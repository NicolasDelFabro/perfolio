
"use client";

import { useState, type ComponentProps } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit: NonNullable<
    ComponentProps<"form">["onSubmit"]
  > = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

      if (!endpoint) {
        throw new Error("Formspree endpoint not configured");
      }

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error sending message");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-2xl px-6 pb-15"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight">
          Contacto
        </h2>

        <p className="mt-4 text-base leading-relaxed text-gray-500">
          ¿Tenés un proyecto en mente o querés trabajar
          conmigo? Dejá tu email y contame brevemente
          en qué puedo ayudarte.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium"
          >
            Email de contacto
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            autoComplete="email"
            required
            maxLength={254}
            className="w-full rounded-lg border border-gray-300
              bg-transparent px-4 py-3 text-sm
              outline-none transition
              focus:border-blue-500
              focus:ring-2 focus:ring-blue-500/20
              dark:border-gray-700"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium"
          >
            ¿Para qué necesitás contactarme?
          </label>

          <textarea
            id="contact-message"
            name="message"
            placeholder="Contame brevemente sobre tu proyecto o consulta..."
            rows={5}
            required
            minLength={10}
            maxLength={3000}
            className="w-full resize-y rounded-lg
              border border-gray-300 bg-transparent
              px-4 py-3 text-sm outline-none
              transition focus:border-blue-500
              focus:ring-2 focus:ring-blue-500/20
              dark:border-gray-700"
          />
        </div>

        <input
          type="hidden"
          name="_subject"
          value="Nuevo contacto desde mi portfolio"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-7
          py-4 font-medium text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.02]
          disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending"
            ? "Enviando..."
            : "Enviar mensaje"}
        </button>

        <div
          role="status"
          aria-live="polite"
          className="text-sm"
        >
          {status === "success" && (
            <p className="text-green-600">
              ¡Tu mensaje fue enviado correctamente!
              Gracias por contactarme.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-500">
              No se pudo enviar el mensaje.
              Por favor, intentá nuevamente.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
