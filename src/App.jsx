
import { useState } from "react";
import { motion } from "motion/react";
import AnimatedSection from "./components/AnimatedSection";
import Hero from "./components/Hero";


import {
  Mail,
  ExternalLink,
  Code2,
  Database,
  Server,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";



const projects = [
  {
    title: "FitPass",
    subtitle: "Plataforma de gestión de gimnasios",
    description:
      "Sistema de gestión de gimnasios con administración de clientes, planes, sucursales y membresías. Participé en el desarrollo del backend mediante APIs REST, validaciones y persistencia de datos.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "REST API",
    ],
    image: "/projects/fitpass.png",
    github: "https://github.com/JohanRRod/Proyecto-PrograC",
    category: "Full Stack",
  },
  {
    title: "PascalLab",
    subtitle: "Analizador y compilador educativo",
    description:
      "Aplicación web para procesar código Pascal y visualizar resultados de análisis, incluyendo tokens, errores y estructuras sintácticas.",
    technologies: [
      "React",
      "JavaScript",
      "Pascal",
      "Análisis léxico",
    ],
    image: "/projects/pascallab.png",
    github: "",
    category: "Desarrollo web",
  },
  {
    title: "Caja Segura",
    subtitle: "Aplicación de gestión financiera",
    description:
      "Aplicación móvil colaborativa para administrar movimientos financieros, categorías e historial, con almacenamiento local y una interfaz intuitiva.",
    technologies: [
      "Flutter",
      "Dart",
      "SQLite",
      "Riverpod",
    ],
    image: "/projects/caja-segura.png",
    github:
      "https://github.com/JosueVasque/pdm2026e-equipo-3-cajasegura",
    category: "Desarrollo móvil",
  },
];


const skills = [
  { name: "Frontend", icon: Code2, items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { name: "Backend", icon: Server, items: ["Java", "Spring Boot", "REST API", "Python"] },
  { name: "Bases de datos", icon: Database, items: ["PostgreSQL", "MySQL", "SQLite", "SQL"] },
];

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080b14] text-slate-100">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080b14]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#inicio" className="text-xl font-bold tracking-tight">
            JR<span className="text-violet-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#080b14] px-6 py-4 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-slate-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* INICIO */}
        <Hero />

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="border-t border-white/10 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Conóceme
            </p>
            <h2 className="mb-8 text-4xl font-bold">Sobre mí</h2>

            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-400">
              <p>
                Soy estudiante de Ingeniería en Sistemas de la Universidad
                Mesoamericana, con cierre de cursos y formación en desarrollo
                de software, bases de datos y tecnologías web.
              </p>
              <p>
                He participado en proyectos académicos de desarrollo
                backend, aplicaciones web, sistemas de gestión y
                aplicaciones móviles.
              </p>
              <p>
                Actualmente busco oportunidades profesionales y proyectos
                freelance donde pueda aportar mis conocimientos,
                continuar aprendiendo y desarrollar soluciones reales.
              </p>
            </div>
          </div>
        </section>

        {/* TECNOLOGÍAS */}
        <AnimatedSection
  id="tecnologias"
  className="bg-white/[0.025] py-24"
>
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Stack tecnológico
            </p>
            <h2 className="mb-10 text-4xl font-bold">Tecnologías</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="rounded-2xl border border-white/10 bg-[#101522] p-7"
                  >
                    <Icon className="mb-6 text-violet-400" size={32} />
                    <h3 className="mb-5 text-xl font-semibold">{skill.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
       </AnimatedSection>

        {/* PROYECTOS */}
        <section id="proyectos" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Mi trabajo
            </p>
            <h2 className="mb-4 text-4xl font-bold">Proyectos destacados</h2>
            <p className="mb-12 max-w-2xl text-slate-400">
              Una selección de proyectos académicos y colaborativos
              en los que he aplicado diferentes tecnologías.
            </p>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                
<motion.article
  key={project.title}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -8 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  className="flex flex-col rounded-2xl border border-white/10 bg-[#101522] p-7 transition-colors hover:border-violet-500/50"
>


<div className="group relative mb-6 flex h-64 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#080b14] p-3">
  {project.image ? (
    <img
      src={project.image}
      alt={`Captura real del proyecto ${project.title}`}
      loading="lazy"
      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  ) : (
    <div className="flex items-center justify-center text-slate-500">
      <Code2 size={48} />
    </div>
  )}
</div>


                  <span className="mb-5 w-fit rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm text-violet-300">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 flex-1 leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300"
                    >
                      Ver código <ExternalLink size={16} />
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="border-t border-white/10 py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Trabajemos juntos
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              ¿Tienes un proyecto en mente?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
              Estoy disponible para oportunidades laborales y proyectos
              freelance de desarrollo web y backend.
            </p>

            <a
              href="mailto:jrod242006@gmail.com"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 font-medium transition hover:bg-violet-500"
            >
              <Mail size={20} />
              Enviar correo
            </a>

<a
  href="https://www.linkedin.com/in/johan-m%C3%A9ndez-90602a235/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 px-7 py-4 font-medium text-cyan-300 transition hover:bg-cyan-500/10 sm:ml-4"
>
  Ver mi LinkedIn
  <ExternalLink size={18} />
</a>

          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Johan Ricardo Méndez Rodríguez.
        Desarrollado con React y Tailwind CSS.
      </footer>
    </div>
  );
}
