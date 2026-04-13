
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Brain,
  ClipboardList,
  Mic,
  MessageSquare,
  Stethoscope,
  Users,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  CalendarDays,
  Target,
  Sparkles,
  FileText,
  HeartPulse,
  Network,
  Home,
} from "lucide-react";

export default function DashboardTutorVirtualPI2() {
  const tutorUrl =
    "https://chatgpt.com/g/g-69c67e50543c81918b284221d1e1231e-tutor-pinte-2";

  const palette = {
    bg: "#F7F4EE",
    surface: "#FFFFFF",
    surfaceSoft: "#F4E8C9",
    primary: "#B68A2F",
    primarySoft: "#F3E7C4",
    accent: "#8F6A22",
    accentSoft: "#EAD9AE",
    ink: "#111111",
    muted: "#4E4A43",
    line: "#D8C9A6",
    success: "#6F5420",
    warm: "#C79A3B",
  };

  const tabs = useMemo(
    () => [
      {
        id: "directo",
        label: "Tutoría directa",
        mode: "Texto recomendado",
        icon: MessageSquare,
        color: palette.primary,
        soft: palette.primarySoft,
        purpose:
          "Sirve para explicar contenidos, resumir, aclarar instrucciones, interpretar rúbricas, transformar criterios en acciones concretas y recordar semanas o actividades del curso.",
        howTo: [
          "Escribe una pregunta específica sobre contenido, actividad, semana, instrucción o rúbrica.",
          "Pide que te responda con pasos, checklist, tabla o resumen según lo necesites.",
          "Úsalo cuando quieras rapidez, orden y claridad para estudiar o planificar trabajo autónomo.",
        ],
        examples: [
          "Explícame el modelo biopsicosocial aplicado a Práctica Integrada II en una tabla simple.",
          "Resúmeme qué debo incluir en un informe taller según la rúbrica y conviértelo en checklist.",
          "¿Qué diferencia hay entre ecomapa, genograma y evaluación de accesibilidad en esta asignatura?",
          "Recuérdame en qué semanas el tutor es más útil según la programación del curso.",
        ],
        bestFor: [
          "modelo biopsicosocial",
          "CIF",
          "instrucciones de actividades",
          "rúbricas",
          "recordatorios semanales",
          "checklists de estudio",
        ],
        recommendation:
          "Prioriza texto. Es el modo más eficiente cuando necesitas precisión, estructura y una respuesta académica directa.",
      },
      {
        id: "socratico",
        label: "Tutoría socrática",
        mode: "Voz recomendada · texto también útil",
        icon: Brain,
        color: palette.accent,
        soft: palette.accentSoft,
        purpose:
          "Sirve para pensar mejor: analizar casos, ordenar anamnesis, clasificar información con enfoque CIF, construir ecomapas y genogramas, revisar borradores y tomar decisiones justificadas.",
        howTo: [
          "Plantea un caso, una duda clínica o un borrador parcial.",
          "Pídele que te guíe con preguntas sin resolverte todo de inmediato.",
          "Responde cada pregunta justificando tus decisiones para fortalecer razonamiento clínico.",
        ],
        examples: [
          "Quiero que me guíes en modo socrático para ordenar una anamnesis según enfoque biopsicosocial y CIF.",
          "Tengo un borrador de caso clínico. Hazme preguntas para detectar vacíos antes de entregarlo.",
          "Ayúdame a decidir qué información del caso va en funciones corporales, actividad, participación y factores contextuales.",
          "Guíame paso a paso para construir el análisis de un genograma sin resolverlo por mí.",
        ],
        bestFor: [
          "análisis de caso",
          "anamnesis",
          "CIF",
          "ecomapa",
          "genograma",
          "organización de informes",
        ],
        recommendation:
          "Prioriza voz cuando quieras conversar y pensar en tiempo real. Usa texto cuando necesites dejar registro del razonamiento o trabajar con fragmentos escritos.",
      },
      {
        id: "simulacion",
        label: "Simulación clínica por voz",
        mode: "Voz recomendada",
        icon: Mic,
        color: palette.success,
        soft: palette.primarySoft,
        purpose:
          "Sirve para practicar entrevistas clínicas, anamnesis, visita domiciliaria y comunicación clínica con pacientes o familiares simulados, manteniendo progresión realista y sin regalar información no preguntada.",
        howTo: [
          "Activa el modo voz y pide una simulación.",
          "Formula preguntas como si estuvieras frente a una persona real.",
          "Cierra la entrevista con una expresión explícita para pasar a evaluación formativa.",
        ],
        examples: [
          "Quiero practicar una entrevista clínica. Haz de paciente y yo entrevisto.",
          "Simula una visita domiciliaria con un familiar cuidador. No me entregues toda la información al inicio.",
          "Practiquemos un caso para identificar barreras, facilitadores y participación.",
          "Fin de la entrevista. Quiero pasar a evaluación formativa.",
        ],
        bestFor: [
          "anamnesis",
          "simulación alta fidelidad",
          "visita domiciliaria",
          "comunicación clínica",
          "descubrimiento progresivo del caso",
        ],
        recommendation:
          "Prioriza voz. Este modo se aprovecha mejor cuando ensayas preguntas, silencios, repreguntas, encuadre y cierre como en una interacción clínica real.",
      },
      {
        id: "evaluacion",
        label: "Evaluación formativa",
        mode: "Voz o texto",
        icon: ClipboardList,
        color: palette.warm,
        soft: palette.accentSoft,
        purpose:
          "Sirve para recibir feedback estructurado después de una simulación o cuando deseas revisar tu desempeño con foco formativo, no solo correctivo.",
        howTo: [
          "Después de una entrevista, pide evaluación o retroalimentación.",
          "Solicita análisis por criterio, fortalezas, vacíos y siguiente paso concreto.",
          "Úsalo también si quieres traducir tu desempeño a los resultados de aprendizaje del curso.",
        ],
        examples: [
          "Evalúame con foco en apertura, recogida de datos, indagación biopsicosocial y comunicación clínica.",
          "Dame feedback formativo de mi entrevista y dime qué me faltó pesquisar.",
          "Traduce mi desempeño a C1RA1, C2RA2, C3RA3 y C4RA4.",
          "Haz una retroalimentación breve, exigente y accionable de mi simulación.",
        ],
        bestFor: [
          "feedback estructurado",
          "fortalezas y vacíos",
          "rúbrica de desempeño",
          "alineación con resultados de aprendizaje",
        ],
        recommendation:
          "Usa voz si vienes de una práctica oral y quieres continuidad. Usa texto si quieres guardar la retroalimentación y convertirla en plan de mejora.",
      },
    ],
    [palette]
  );

  const [activeTab, setActiveTab] = useState("directo");
  const current = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  const curriculumMoments = [
    {
      week: "Semana 4",
      title: "Tutor IA Modelo Biopsicosocial",
      hint: "Ideal para tutoría directa en texto.",
    },
    {
      week: "Semana 6",
      title: "Tutor IA Construcción Ecomapa",
      hint: "Úsalo para comprender estructura, análisis y errores frecuentes.",
    },
    {
      week: "Semana 7",
      title: "Tutor IA Construcción Genograma",
      hint: "Muy útil para ordenar símbolos, relaciones y análisis familiar.",
    },
    {
      week: "Semanas 8 a 10",
      title: "Tutor IA Completo y preparación de simulación",
      hint: "Conviene pasar a modo socrático y práctica por voz.",
    },
    {
      week: "Semanas 11 a 14",
      title: "Organización de información para informe clínico",
      hint: "Fuerte utilidad para ordenar anamnesis, análisis e informe final.",
    },
  ];

  const learningOutcomes = [
    {
      code: "C1RA1",
      text: "Identificar deficiencias, limitaciones de actividad y restricciones de participación comprendiendo la causa de la condición de salud.",
      icon: HeartPulse,
    },
    {
      code: "C2RA2",
      text: "Desarrollar casos clínicos utilizando la estructura de la CIF en ambientes simulados o reales.",
      icon: Stethoscope,
    },
    {
      code: "C3RA3",
      text: "Integrar promoción y prevención en salud usando CIF en casos clínicos.",
      icon: Sparkles,
    },
    {
      code: "C4RA4",
      text: "Tomar decisiones con abordaje integral y comunicar de forma fluida, asertiva y respetuosa.",
      icon: Users,
    },
  ];

  const tutorFunctions = [
    {
      title: "Explica y ordena contenidos",
      description:
        "Aclara conceptos, resume clases, transforma instrucciones y convierte rúbricas en acciones concretas.",
      icon: BookOpen,
    },
    {
      title: "Guía el razonamiento clínico",
      description:
        "Hace preguntas estratégicas para que el estudiante piense, justifique y detecte vacíos antes de responder o entregar.",
      icon: Brain,
    },
    {
      title: "Simula entrevistas y visitas",
      description:
        "Actúa como paciente o familiar para entrenar anamnesis, comunicación clínica y toma de decisiones en interacción realista.",
      icon: Mic,
    },
    {
      title: "Entrega retroalimentación formativa",
      description:
        "Evalúa fortalezas, debilidades, criterios observables y siguiente paso concreto sin reducir el proceso a una nota cerrada.",
      icon: ClipboardList,
    },
  ];

  const utilities = [
    {
      title: "Estudiar antes de pruebas",
      detail:
        "Modelo biopsicosocial, CIF, promoción y prevención, análisis de caso.",
      icon: GraduationCap,
    },
    {
      title: "Preparar informes",
      detail:
        "Informe taller, visita domiciliaria, síntesis de hallazgos y sugerencias.",
      icon: FileText,
    },
    {
      title: "Construir herramientas",
      detail:
        "Ecomapa, genograma, análisis de accesibilidad y organización de antecedentes.",
      icon: Network,
    },
    {
      title: "Entrenar desempeño práctico",
      detail:
        "Entrevista clínica, apertura, encuadre, repreguntas, cierre y feedback.",
      icon: Home,
    },
  ];

  const pill = (text, bg, color) => (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
      style={{ backgroundColor: bg, color }}
    >
      {text}
    </span>
  );

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: `linear-gradient(180deg, ${palette.bg} 0%, #ffffff 100%)`,
        color: palette.ink,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-10">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[32px] border p-6 shadow-sm md:p-10"
          style={{ backgroundColor: palette.surface, borderColor: palette.line }}
        >
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background: `radial-gradient(circle at top left, ${palette.primarySoft} 0%, transparent 34%), radial-gradient(circle at right center, ${palette.accentSoft} 0%, transparent 28%)`,
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              {pill("Propuesta de dashboard web", palette.primarySoft, palette.primary)}
              <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Tutor virtual académico Práctica integrada 2
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 md:text-lg" style={{ color: palette.muted }}>
                Un dashboard con formato de <strong>infografía interactiva</strong> para
                que los estudiantes entiendan qué es este tutor, qué modos de tutoría
                ofrece, en qué actividades resulta más útil y cómo probar cada función
                con ejemplos listos para usar.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {pill("Modo directo: texto", palette.primarySoft, palette.primary)}
                {pill("Modo socrático: voz sugerida", palette.accentSoft, palette.accent)}
                {pill("Simulación clínica: voz", palette.primarySoft, palette.success)}
                {pill("Evaluación formativa", palette.accentSoft, palette.accent)}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={tutorUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5"
                  style={{ backgroundColor: palette.primary, color: "white" }}
                >
                  Ir al tutor
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#funciones"
                  className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold transition"
                  style={{
                    borderColor: palette.line,
                    color: palette.ink,
                    backgroundColor: palette.surface,
                  }}
                >
                  Explorar funciones
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              <InfoCard
                icon={Target}
                title="Qué es este tutor"
                description="Un tutor académico configurado para apoyar estudio, análisis de casos, simulaciones por voz y evaluación formativa en Práctica Integrada II."
                palette={palette}
              />
              <InfoCard
                icon={CalendarDays}
                title="Cuándo conviene usarlo"
                description="Especialmente desde el trabajo con modelo biopsicosocial, ecomapa, genograma, simulación y preparación de informes clínicos."
                palette={palette}
              />
              <InfoCard
                icon={CheckCircle2}
                title="Qué logra el estudiante"
                description="Mayor claridad conceptual, mejor razonamiento clínico, práctica comunicacional y preparación guiada para actividades evaluadas."
                palette={palette}
              />
            </div>
          </div>
        </motion.section>

        <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {tutorFunctions.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[24px] border p-5 shadow-sm"
                style={{ backgroundColor: palette.surface, borderColor: palette.line }}
              >
                <div
                  className="mb-4 inline-flex rounded-2xl p-3"
                  style={{ backgroundColor: palette.surfaceSoft, color: palette.primary }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6" style={{ color: palette.muted }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </section>

        <section id="funciones" className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          <div
            className="rounded-[28px] border p-4 shadow-sm"
            style={{ backgroundColor: palette.surface, borderColor: palette.line }}
          >
            <h2 className="px-2 text-xl font-semibold">Funciones del tutor</h2>
            <p className="px-2 pt-2 text-sm leading-6" style={{ color: palette.muted }}>
              Cada pestaña explica para qué sirve la función, cómo usarla, ejemplos de
              interacción y el modo recomendado para el estudiante.
            </p>

            <div className="mt-4 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="w-full rounded-2xl border px-4 py-4 text-left transition"
                    style={{
                      borderColor: isActive ? tab.color : palette.line,
                      backgroundColor: isActive ? tab.soft : palette.surface,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-0.5 rounded-xl p-2"
                        style={{
                          backgroundColor: isActive
                            ? "rgba(255,255,255,0.65)"
                            : palette.surfaceSoft,
                          color: tab.color,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="font-semibold">{tab.label}</div>
                        <div className="mt-1 text-xs" style={{ color: palette.muted }}>
                          {tab.mode}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="overflow-hidden rounded-[28px] border shadow-sm"
            style={{ backgroundColor: palette.surface, borderColor: palette.line }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="p-6 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  {pill(current.label, current.soft, current.color)}
                  {pill(current.mode, palette.surfaceSoft, palette.ink)}
                </div>

                <h3 className="mt-4 text-2xl font-bold">{current.label}</h3>
                <p className="mt-3 max-w-4xl text-base leading-7" style={{ color: palette.muted }}>
                  {current.purpose}
                </p>

                <div className="mt-8 grid gap-5 xl:grid-cols-2">
                  <SectionCard title="Para qué sirve" icon={Target} palette={palette}>
                    <p className="text-sm leading-6" style={{ color: palette.muted }}>
                      {current.purpose}
                    </p>
                  </SectionCard>

                  <SectionCard title="Cómo usarlo" icon={BookOpen} palette={palette}>
                    <ol className="space-y-3 text-sm leading-6" style={{ color: palette.muted }}>
                      {current.howTo.map((step, index) => (
                        <li key={step} className="flex gap-3">
                          <span
                            className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                            style={{ backgroundColor: current.soft, color: current.color }}
                          >
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </SectionCard>
                </div>

                <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_0.9fr]">
                  <SectionCard title="Ejemplos listos para usar" icon={Sparkles} palette={palette}>
                    <div className="space-y-3">
                      {current.examples.map((example) => (
                        <div
                          key={example}
                          className="rounded-2xl border p-4 text-sm leading-6"
                          style={{
                            borderColor: palette.line,
                            backgroundColor: "rgba(255,255,255,0.75)",
                          }}
                        >
                          <span className="font-semibold" style={{ color: current.color }}>
                            Prompt sugerido:
                          </span>{" "}
                          <span style={{ color: palette.ink }}>{example}</span>
                        </div>
                      ))}
                    </div>
                  </SectionCard>

                  <SectionCard title="Recomendación de uso" icon={CheckCircle2} palette={palette}>
                    <p className="text-sm leading-6" style={{ color: palette.muted }}>
                      {current.recommendation}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {current.bestFor.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border px-3 py-1 text-xs font-medium"
                          style={{
                            borderColor: palette.line,
                            color: palette.ink,
                            backgroundColor: palette.surfaceSoft,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      href={tutorUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold"
                      style={{ backgroundColor: current.color, color: "white" }}
                    >
                      Probar esta función en el tutor
                      <ArrowRight size={16} />
                    </a>
                  </SectionCard>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="mt-12 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div
            className="rounded-[28px] border p-6 shadow-sm md:p-8"
            style={{ backgroundColor: palette.surface, borderColor: palette.line }}
          >
            <div className="flex items-center gap-3">
              <div
                className="rounded-2xl p-3"
                style={{ backgroundColor: palette.surfaceSoft, color: palette.primary }}
              >
                <CalendarDays size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  Momentos del semestre en que este tutor aporta más
                </h2>
                <p className="mt-1 text-sm" style={{ color: palette.muted }}>
                  Línea de uso sugerido según la programación y los usos declarados del
                  tutor en la asignatura.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {curriculumMoments.map((item, index) => (
                <div key={item.week} className="grid gap-3 md:grid-cols-[120px_1fr] md:items-start">
                  <div>
                    <div
                      className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: index % 2 === 0 ? palette.primarySoft : palette.accentSoft,
                        color: index % 2 === 0 ? palette.primary : palette.accent,
                      }}
                    >
                      {item.week}
                    </div>
                  </div>
                  <div
                    className="rounded-2xl border p-4"
                    style={{ borderColor: palette.line, backgroundColor: "#FCFBF8" }}
                  >
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6" style={{ color: palette.muted }}>
                      {item.hint}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div
              className="rounded-[28px] border p-6 shadow-sm"
              style={{ backgroundColor: palette.surface, borderColor: palette.line }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl p-3" style={{ backgroundColor: palette.accentSoft, color: palette.accent }}>
                  <Target size={22} />
                </div>
                <h2 className="text-2xl font-bold">Resultados de aprendizaje que apoya</h2>
              </div>

              <div className="mt-5 space-y-4">
                {learningOutcomes.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.code}
                      className="rounded-2xl border p-4"
                      style={{ borderColor: palette.line, backgroundColor: "#FCFBF8" }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="rounded-xl p-2"
                          style={{ backgroundColor: palette.surfaceSoft, color: palette.primary }}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="font-semibold">{item.code}</div>
                          <p className="mt-1 text-sm leading-6" style={{ color: palette.muted }}>
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="rounded-[28px] border p-6 shadow-sm"
              style={{ backgroundColor: palette.surface, borderColor: palette.line }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl p-3" style={{ backgroundColor: palette.primarySoft, color: palette.primary }}>
                  <Sparkles size={22} />
                </div>
                <h2 className="text-2xl font-bold">
                  Actividades donde resulta especialmente útil
                </h2>
              </div>

              <div className="mt-5 grid gap-3">
                {utilities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border p-4"
                      style={{ borderColor: palette.line, backgroundColor: "#FCFBF8" }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="rounded-xl p-2"
                          style={{ backgroundColor: palette.surfaceSoft, color: palette.primary }}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="mt-1 text-sm leading-6" style={{ color: palette.muted }}>
                            {item.detail}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div
            className="rounded-[32px] border p-6 shadow-sm md:p-8"
            style={{
              background: `linear-gradient(135deg, ${palette.ink} 0%, ${palette.primary} 100%)`,
              borderColor: "transparent",
              color: "white",
            }}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Mensaje clave para el estudiante</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/90 md:text-base">
                  Este tutor no reemplaza al docente ni al juicio clínico real. Está
                  diseñado para apoyar estudio, práctica, razonamiento, simulación y
                  mejora progresiva dentro de la asignatura. La idea del dashboard es
                  que el estudiante entienda qué pedir, cuándo usar cada modo y cómo
                  aprovechar el tutor con intención académica.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={tutorUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold"
                  style={{ color: palette.primary }}
                >
                  Abrir tutor
                  <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => setActiveTab("directo")}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/25 px-5 py-3 text-sm font-semibold text-white"
                >
                  Ver funciones
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, description, palette }) {
  return (
    <div
      className="rounded-[24px] border p-5 shadow-sm"
      style={{ backgroundColor: palette.surface, borderColor: palette.line }}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl p-3" style={{ backgroundColor: palette.surfaceSoft, color: palette.primary }}>
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-1 text-sm leading-6" style={{ color: palette.muted }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionCard({ title, icon: Icon, children, palette }) {
  return (
    <div
      className="rounded-[24px] border p-5"
      style={{ borderColor: palette.line, backgroundColor: "#FCFBF8" }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl p-2" style={{ backgroundColor: palette.surfaceSoft, color: palette.primary }}>
          <Icon size={18} />
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      {children}
    </div>
  );
}
