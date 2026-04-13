const tutorUrl =
  "https://chatgpt.com/g/g-69c67e50543c81918b284221d1e1231e-tutor-pinte-2";

const overviewCards = [
  {
    icon: "◎",
    title: "Qué es este tutor",
    description:
      "Un tutor académico diseñado para apoyar estudio, razonamiento clínico, simulaciones guiadas y retroalimentación formativa en Práctica Integrada II.",
  },
  {
    icon: "◔",
    title: "Cuándo conviene usarlo",
    description:
      "Antes de actividades evaluadas, al ordenar contenidos, al preparar entrevistas o al revisar un borrador con enfoque clínico y biopsicosocial.",
  },
  {
    icon: "✦",
    title: "Qué puede lograr el estudiante",
    description:
      "Más claridad conceptual, mejor organización del trabajo, práctica deliberada y uso más intencional del tutor en momentos clave del semestre.",
  },
];

const summaryItems = [
  "Orientación clara sobre para qué sirve cada modo del tutor.",
  "Prompts listos para copiar y usar según la tarea académica.",
  "Sugerencias de uso a lo largo del semestre y por actividad.",
  "Énfasis en apoyo formativo, no en sustitución del trabajo docente.",
];

const tabs = [
  {
    id: "directo",
    label: "Tutoría directa",
    mode: "Texto recomendado",
    badge: "Texto",
    purpose:
      "Sirve para explicar contenidos, resumir, aclarar instrucciones, interpretar rúbricas, transformar criterios en acciones concretas y recordar semanas o actividades del curso.",
    howTo: [
      "Escribe una pregunta específica sobre contenido, actividad, semana, instrucción o rúbrica.",
      "Pide la respuesta en formato útil para estudiar: pasos, tabla, checklist o resumen.",
      "Úsalo cuando necesites rapidez, orden y una aclaración académica directa.",
    ],
    examples: [
      "Explícame el modelo biopsicosocial aplicado a Práctica Integrada II en una tabla simple.",
      "Resúmeme qué debo incluir en un informe taller según la rúbrica y conviértelo en checklist.",
      "¿Qué diferencia hay entre ecomapa, genograma y evaluación de accesibilidad en esta asignatura?",
      "Recuérdame en qué semanas el tutor es más útil según la programación del curso.",
    ],
    bestFor: ["Modelo biopsicosocial", "CIF", "Rúbricas", "Recordatorios", "Checklists"],
    recommendation:
      "Es el modo más eficiente cuando se busca una respuesta precisa, ordenada y académicamente directa.",
  },
  {
    id: "socratico",
    label: "Tutoría socrática",
    mode: "Voz sugerida, texto también útil",
    badge: "Reflexión guiada",
    purpose:
      "Sirve para pensar mejor: analizar casos, ordenar anamnesis, clasificar información con enfoque CIF, construir ecomapas y genogramas, revisar borradores y justificar decisiones.",
    howTo: [
      "Plantea un caso, una duda clínica o un borrador parcial.",
      "Pide que te guíe con preguntas sin resolverlo todo de inmediato.",
      "Responde cada pregunta justificando tus decisiones para fortalecer tu razonamiento clínico.",
    ],
    examples: [
      "Quiero que me guíes en modo socrático para ordenar una anamnesis según enfoque biopsicosocial y CIF.",
      "Tengo un borrador de caso clínico. Hazme preguntas para detectar vacíos antes de entregarlo.",
      "Ayúdame a decidir qué información del caso va en funciones corporales, actividad, participación y factores contextuales.",
      "Guíame paso a paso para construir el análisis de un genograma sin resolverlo por mí.",
    ],
    bestFor: ["Análisis de caso", "Anamnesis", "Ecomapa", "Genograma", "Informes"],
    recommendation:
      "Conviene priorizar voz cuando se quiere conversar y pensar en tiempo real; texto ayuda si se necesita registro.",
  },
  {
    id: "simulacion",
    label: "Simulación clínica",
    mode: "Voz recomendada",
    badge: "Práctica oral",
    purpose:
      "Sirve para practicar entrevistas clínicas, anamnesis, visita domiciliaria y comunicación clínica con pacientes o familiares simulados, con progresión realista de la información.",
    howTo: [
      "Activa la interacción por voz y pide una simulación específica.",
      "Formula preguntas como si estuvieras frente a una persona real.",
      "Cierra la entrevista de forma explícita para pasar luego a evaluación formativa.",
    ],
    examples: [
      "Quiero practicar una entrevista clínica. Haz de paciente y yo entrevisto.",
      "Simula una visita domiciliaria con un familiar cuidador. No me entregues toda la información al inicio.",
      "Practiquemos un caso para identificar barreras, facilitadores y participación.",
      "Fin de la entrevista. Quiero pasar a evaluación formativa.",
    ],
    bestFor: ["Entrevista clínica", "Visita domiciliaria", "Caso progresivo", "Comunicación"],
    recommendation:
      "Este modo se aprovecha mejor cuando se ensayan preguntas, silencios, repreguntas, encuadre y cierre como en una interacción clínica real.",
  },
  {
    id: "evaluacion",
    label: "Evaluación formativa",
    mode: "Voz o texto",
    badge: "Feedback",
    purpose:
      "Sirve para recibir retroalimentación estructurada después de una simulación o para revisar el desempeño con foco formativo, no solo correctivo.",
    howTo: [
      "Después de una práctica, pide evaluación o retroalimentación explícita.",
      "Solicita análisis por criterio, fortalezas, vacíos y siguiente paso concreto.",
      "Pide que traduzca el feedback a resultados de aprendizaje del curso.",
    ],
    examples: [
      "Evalúame con foco en apertura, recogida de datos, indagación biopsicosocial y comunicación clínica.",
      "Dame feedback formativo de mi entrevista y dime qué me faltó pesquisar.",
      "Traduce mi desempeño a C1RA1, C2RA2, C3RA3 y C4RA4.",
      "Haz una retroalimentación breve, exigente y accionable de mi simulación.",
    ],
    bestFor: ["Fortalezas y vacíos", "Rúbrica", "Plan de mejora", "Resultados de aprendizaje"],
    recommendation:
      "Usa voz si vienes de una práctica oral; usa texto si quieres guardar la retroalimentación y convertirla en plan de mejora.",
  },
];

const timelineItems = [
  ["Semana 4", "Tutor IA Modelo Biopsicosocial", "Buen momento para consolidar conceptos base."],
  ["Semana 6", "Construcción de ecomapa", "Ayuda a comprender estructura, análisis y errores frecuentes."],
  ["Semana 7", "Construcción de genograma", "Permite ordenar símbolos, relaciones familiares y análisis."],
  ["Semanas 8 a 10", "Preparación de simulación", "Conviene pasar a tutoría socrática y simulación oral."],
  ["Semanas 11 a 14", "Organización de informe clínico", "Muy útil para sintetizar hallazgos y revisar consistencia del informe."],
];

const outcomes = [
  ["C1RA1", "Identificar deficiencias, limitaciones de actividad y restricciones de participación comprendiendo la causa de la condición de salud."],
  ["C2RA2", "Desarrollar casos clínicos utilizando la estructura de la CIF en ambientes simulados o reales."],
  ["C3RA3", "Integrar promoción y prevención en salud usando CIF en casos clínicos."],
  ["C4RA4", "Tomar decisiones con abordaje integral y comunicar de forma fluida, asertiva y respetuosa."],
];

const utilities = [
  ["Estudiar antes de pruebas", "Ayuda con modelo biopsicosocial, CIF, promoción y prevención, y análisis de caso."],
  ["Preparar informes", "Sirve para estructurar informe taller, visita domiciliaria, síntesis de hallazgos y sugerencias."],
  ["Construir herramientas", "Apoya ecomapa, genograma, análisis de accesibilidad y organización de antecedentes."],
  ["Entrenar desempeño práctico", "Permite ensayar entrevista clínica, encuadre, repreguntas, cierre y feedback posterior."],
];

const state = { activeTab: tabs[0].id };

const heroPills = document.querySelector("#hero-pills");
const summaryList = document.querySelector("#summary-list");
const overview = document.querySelector("#overview-cards");
const tabList = document.querySelector("#tab-list");
const tabPanel = document.querySelector("#tab-panel");
const timeline = document.querySelector("#timeline");
const outcomesContainer = document.querySelector("#outcomes");
const utilitiesContainer = document.querySelector("#utilities");

function escapeText(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

function renderStaticContent() {
  heroPills.innerHTML = [
    "Modo directo: texto",
    "Modo socrático: voz sugerida",
    "Simulación clínica",
    "Evaluación formativa",
  ]
    .map((item) => `<span class="pill">${item}</span>`)
    .join("");

  summaryList.innerHTML = summaryItems.map((item) => `<li>${item}</li>`).join("");

  overview.innerHTML = overviewCards
    .map(
      (card) => `
        <article class="overview-card">
          <div class="icon-chip" aria-hidden="true">${card.icon}</div>
          <h3>${card.title}</h3>
          <p>${card.description}</p>
        </article>
      `
    )
    .join("");

  timeline.innerHTML = timelineItems
    .map(
      ([week, title, hint]) => `
        <article class="timeline-item">
          <div class="timeline-item__week">${week}</div>
          <div class="timeline-item__body">
            <h3>${title}</h3>
            <p>${hint}</p>
          </div>
        </article>
      `
    )
    .join("");

  outcomesContainer.innerHTML = outcomes
    .map(
      ([title, description]) => `
        <article class="mini-card">
          <h3>${title}</h3>
          <p>${description}</p>
        </article>
      `
    )
    .join("");

  utilitiesContainer.innerHTML = utilities
    .map(
      ([title, description]) => `
        <article class="mini-card">
          <h3>${title}</h3>
          <p>${description}</p>
        </article>
      `
    )
    .join("");
}

function renderTabs() {
  tabList.innerHTML = tabs
    .map((tab) => {
      const selected = tab.id === state.activeTab;
      return `
        <button
          class="tab-button"
          type="button"
          role="tab"
          id="tab-${tab.id}"
          aria-selected="${selected}"
          aria-controls="panel-${tab.id}"
          data-tab="${tab.id}"
          tabindex="${selected ? "0" : "-1"}"
        >
          <span class="tab-button__label">
            <span class="icon-chip" aria-hidden="true">${tab.badge.slice(0, 1)}</span>
            <span>
              <span class="tab-button__title">${tab.label}</span>
              <span class="tab-button__meta">${tab.mode}</span>
            </span>
          </span>
        </button>
      `;
    })
    .join("");

  const tab = tabs.find((item) => item.id === state.activeTab) || tabs[0];
  tabPanel.id = `panel-${tab.id}`;
  tabPanel.setAttribute("role", "tabpanel");
  tabPanel.setAttribute("aria-labelledby", `tab-${tab.id}`);
  tabPanel.innerHTML = `
    <div class="tab-panel__header">
      <span class="pill">${tab.label}</span>
      <span class="pill">${tab.mode}</span>
    </div>
    <h3 class="tab-panel__title">${tab.label}</h3>
    <p>${tab.purpose}</p>
    <div class="content-grid">
      <section class="content-card">
        <h4>Cómo usarlo</h4>
        <ol>${tab.howTo.map((item) => `<li>${item}</li>`).join("")}</ol>
      </section>
      <section class="content-card">
        <h4>Recomendación de uso</h4>
        <p>${tab.recommendation}</p>
        <div class="chip-list">
          ${tab.bestFor.map((item) => `<span class="chip">${item}</span>`).join("")}
        </div>
        <div class="hero__actions">
          <a class="button button--primary" href="${tutorUrl}" target="_blank" rel="noreferrer">
            Probar esta función
          </a>
        </div>
      </section>
    </div>
    <section class="content-card">
      <h4>Prompts listos para usar</h4>
      <div class="prompt-list">
        ${tab.examples
          .map(
            (example, index) => `
              <article class="prompt-card">
                <span class="prompt-card__label">Prompt ${index + 1}</span>
                <p>${example}</p>
                <div class="prompt-card__footer">
                  <button class="copy-button" type="button" data-copy="${escapeText(example)}">
                    Copiar prompt
                  </button>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;

  document.querySelectorAll(".tab-button").forEach((button, index, allButtons) => {
    button.addEventListener("click", () => setActiveTab(button.dataset.tab));
    button.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
        return;
      }
      event.preventDefault();
      const offset = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = (index + offset + allButtons.length) % allButtons.length;
      allButtons[nextIndex].focus();
      setActiveTab(allButtons[nextIndex].dataset.tab);
    });
  });

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(text);
        showToast("Prompt copiado al portapapeles");
      } catch {
        showToast("No se pudo copiar automáticamente");
      }
    });
  });
}

function setActiveTab(tabId) {
  state.activeTab = tabId;
  renderTabs();
}

function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) {
    existing.remove();
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2200);
}

renderStaticContent();
renderTabs();
