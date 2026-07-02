import Image from "next/image";
import linkedin from "../public/linkedin.png";
import gmail from "../public/gmail.png";


export default function PortfolioPage() {
  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Express',
    'Tailwind CSS',
    'TypeORM',
    'SQL',
  ];

  const projects = [
    {
      title: 'Qiwi',
      description:
        'E-commerce con carrito y dashboard de usuario',
      tags: ['Next.js', 'TypeScript', 'SQL'],
    },
    {
      title: 'TrainX',
      description:
        'Completo software para la gestion de gimnasion que cuenta con pasarela de pago, reserva de turno, dashboard de usuario y admin entro otras cosas.',
      tags: ['Next', 'Tailwind', 'TypeScript', 'Node.js', 'TypeORM'],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* NAVBAR */}
        <header className="flex items-center justify-between py-6 border-b border-white/10">
          <div>
            <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
              NDF
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            <a href="#inicio" className="hover:text-white transition">
              Inicio
            </a>
            <a href="#sobre-mi" className="hover:text-white transition">
              Sobre mí
            </a>
            <a href="#proyectos" className="hover:text-white transition">
              Proyectos
            </a>
            <a href="#tecnologias" className="hover:text-white transition">
              Tecnologías
            </a>
            <a href="#contacto" className="hover:text-white transition">
              Contacto
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section
          id="inicio"
          className="grid gap-14 py-24 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 backdrop-blur-sm">
              👋 ¡Hola! Soy Nicolás
            </div>

            <h2 className="text-5xl font-black leading-tight md:text-7xl">
              Nicolás Del Fabro
            </h2>

            <h3 className="mt-2 bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
              Fullstack Developer
            </h3>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
              Desarrollo aplicaciones web modernas, rápidas y escalables
              utilizando tecnologías actuales y buenas prácticas.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://github.com/NicolasDelFabro">
                <button className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-4 font-medium text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.02]">
                  Ver proyectos
                </button>
              </a>
            </div>
          </div>

          {/* VISUAL */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#131a35] to-[#0d1227] p-6 shadow-2xl shadow-violet-900/20 backdrop-blur-xl">
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#0a0f1f] p-6 font-mono text-sm text-gray-300">
                <p className="text-violet-400">const developer = {'{'}</p>
                <p className="ml-4">name: 'Nicolás Del Fabro',</p>
                <p className="ml-4">stack: ['Next.js', 'Node.js'],</p>
                <p className="ml-4">passion: 'Fullstack Development',</p>
                <p className="ml-4">learning: 'ESP32 & C++'</p>
                <p className="text-violet-400">{'}'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section id="tecnologias" className="py-10">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Tecnologías</h2>
            <span className="text-sm text-violet-400">Stack principal</span>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition hover:-translate-y-1 hover:border-violet-500/30 hover:bg-violet-500/5"
              >
                <div className="mb-3 h-10 w-10 mx-auto rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20" />
                <p className="text-sm font-medium text-gray-200">{tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="sobre-mi"
          className="grid gap-8 py-24 lg:grid-cols-[1.3fr_1fr]"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm">
            <div className="mb-6 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              Sobre mí
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              Desarrollo experiencias modernas enfocadas en rendimiento y
              escalabilidad.
            </h2>

            <p className="mt-6 leading-relaxed text-gray-400">
              Soy desarrollador fullstack con pasión por construir soluciones
              web eficientes y centradas en el usuario. Actualmente formo parte
              de un equipo en el que se desarrolla software para pantallas 
              ESP-32 mientras continúo perfeccionando mis
              habilidades en frontend y backend.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              'Pensamiento lógico',
              'Trabajo en equipo',
              'Aprendizaje constante',
              'Enfoque en el usuario',
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="mt-3 text-gray-400">
                  Desarrollo soluciones limpias y enfocadas en una buena
                  experiencia.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="proyectos" className="py-10">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Proyectos</h2>
              <a href="https://github.com/NicolasDelFabro">
                  <button className="text-sm text-violet-400 hover:text-violet-300">
                    Ver todos →
                </button>
              </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-2 hover:border-violet-500/20"
              >
                <div className="h-52 bg-gradient-to-br from-violet-500/20 to-blue-500/10" />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="mt-4 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        <section className="py-24">
          <div className="overflow-hidden rounded-[2rem] border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-blue-500/5 p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-6 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  Proyecto destacado
                </div>

                <h2 className="text-5xl font-black">TrainX</h2>

                <p className="mt-6 max-w-xl leading-relaxed text-gray-300">
                Completo software para la gestion de gimnasion que cuenta con pasarela de pago, 
                reserva de turno, dashboard de usuario y admin entro otras cosas.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'TypeORM', 'Mercado Pago', 'SQL'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-gray-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="h-[320px] rounded-3xl border border-white/10 bg-[#0a0f1f] shadow-2xl shadow-violet-900/20" />
            </div>
          </div>
        </section>

            {/* CONTACT */}
        <section id="contacto" className="pb-20">
          <div className="flex justify-around rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm">
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-violet-500/30 hover:bg-violet-500/5">
            <a
              href="https://linkedin.com/in/nicolasdelfabro"
              className="flex items-center gap-4">
            <Image
              alt="LinkedIn"
              src={linkedin}
              className="h-10 w-10 rounded-lg"/>

              <div>
                <p className="text-sm text-gray-400">Linkedin</p>
                <h2 className="text-white font-medium">
                  Nicolás Del
                </h2>
              </div>
            </a>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-violet-500/30 hover:bg-violet-500/5">
              <span
                className="flex items-center gap-4">
                <Image
                  alt="LinkedIn"
                  src={gmail}
                  className="h-10 w-10 rounded-lg"/>

                  <div>
                    <p className="text-sm text-gray-400">Gmail</p>
                    <h2 className="text-white font-medium">
                      nicolasdelfabro.dev@gmail.com
                    </h2>
                  </div>
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
