
import { motion } from "motion/react";

import {
  ArrowRight,
  Code2,
  Mail,
  Server,
  Database,
  Download,
  FileText,
} from "lucide-react";

const linkedinUrl =
  "https://www.linkedin.com/in/johan-m%C3%A9ndez-90602a235/";

const githubUrl = "https://github.com/JohanRRod";

const cvUrl =
  "/documents/CV_Johan_Ricardo_Full_Stack_Junior.pdf";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center overflow-hidden pt-24"
    >
      {/* Luces decorativas */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 items-center gap-14 px-5 py-12 sm:px-6 sm:py-20 lg:grid-cols-2">

        {/* PRESENTACIÓN */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0 w-full"
        >
          {/* Disponibilidad */}
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs text-green-400 sm:text-sm">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" />

            Disponible para proyectos freelance
          </div>

          {/* Nombre */}
          <p className="mb-4 text-base font-medium text-violet-400 sm:text-lg">
            ¡Hola! Soy Johan Ricardo
          </p>

          {/* Título */}
          <h1 className="text-[clamp(2rem,8.5vw,3.75rem)] font-extrabold leading-tight tracking-tight">
            Desarrollador
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Full Stack.
            </span>
          </h1>

          {/* Descripción */}
          <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Desarrollo aplicaciones web y soluciones de software
            con React, Java, Spring Boot y PostgreSQL.
            Transformo ideas en aplicaciones funcionales,
            modernas y organizadas.
          </p>

          {/* BOTONES PRINCIPALES */}
          <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">

            {/* Ver proyectos */}
            <a
              href="#proyectos"
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl bg-violet-600 px-3 py-3 text-center text-sm font-medium transition hover:bg-violet-500 sm:px-6 sm:text-base"
            >
              Ver proyectos
              <ArrowRight size={17} className="shrink-0" />
            </a>

            {/* Contacto */}
            <a
              href="#contacto"
              className="inline-flex min-w-0 items-center justify-center rounded-xl border border-white/15 px-3 py-3 text-center text-sm font-medium transition hover:bg-white/10 sm:px-6 sm:text-base"
            >
              Contáctame
            </a>

            {/* Ver CV */}
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-cyan-500/40 px-3 py-3 text-center text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/10 sm:px-6 sm:text-base"
            >
              <FileText size={17} className="shrink-0" />
              Ver CV
            </a>

            {/* Descargar CV */}
            <a
              href={cvUrl}
              download="CV_Johan_Ricardo_Full_Stack_Junior.pdf"
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-violet-500/40 px-3 py-3 text-center text-sm font-medium text-violet-300 transition hover:bg-violet-500/10 sm:px-6 sm:text-base"
            >
              <Download size={17} className="shrink-0" />
              Descargar CV
            </a>
          </div>

          {/* REDES SOCIALES */}
          <div className="mt-9 flex items-center gap-6">

            {/* GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mi GitHub"
              title="GitHub"
              className="text-slate-400 transition hover:text-violet-400"
            >
              <Code2 size={25} />
            </a>

            {/* Correo */}
            <a
              href="mailto:jrod242006@gmail.com"
              aria-label="Enviar correo"
              title="Correo electrónico"
              className="text-slate-400 transition hover:text-violet-400"
            >
              <Mail size={25} />
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mi perfil de LinkedIn"
              title="LinkedIn"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* TARJETA DE TECNOLOGÍAS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative min-w-0 w-full"
        >
          <div className="rounded-3xl border border-white/10 bg-[#101522]/90 p-5 shadow-2xl shadow-violet-950/20 backdrop-blur-xl sm:p-7">

            {/* Encabezado */}
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Code2 size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold">
                  Mi stack tecnológico
                </h3>

                <p className="text-sm text-slate-500">
                  Herramientas que utilizo
                </p>
              </div>
            </div>

            <div className="space-y-4">

              {/* Frontend */}
              <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                <div className="mb-3 flex items-center gap-2 text-violet-300">
                  <Code2 size={18} />

                  <span className="font-medium">
                    Frontend
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-400">
                  React · JavaScript · Tailwind CSS
                </p>
              </div>

              {/* Backend */}
              <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                <div className="mb-3 flex items-center gap-2 text-cyan-300">
                  <Server size={18} />

                  <span className="font-medium">
                    Backend
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-400">
                  Java · Spring Boot · REST API
                </p>
              </div>

              {/* Bases de datos */}
              <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                <div className="mb-3 flex items-center gap-2 text-green-300">
                  <Database size={18} />

                  <span className="font-medium">
                    Bases de datos
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-400">
                  PostgreSQL · MySQL · SQLite
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  Conocimientos básicos y experiencia académica
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
