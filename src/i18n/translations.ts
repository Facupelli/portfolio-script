export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

interface Translation {
  title: string;
  description: string;
  headline: string;
  intro: [string, string];
  illustrationLabel: string;
  projectsHeading: string;
  projectsLabel: string;
  projectDescriptions: Record<"depiqo" | "divideExpenses" | "queVes", string>;
  recent: string;
  socialLabel: string;
  languageLabel: string;
  switchToLight: string;
  switchToDark: string;
}

export const translations = {
  en: {
    title: "Facundo Pellicer | Web software",
    description:
      "I build web software, from the database to the browser. A few things I've built and a little about how I work.",
    headline: "I build web software, from the database to the browser.",
    intro: [
      "I enjoy getting into the details, understanding why things work the way they do, and finding ways to make them simpler.",
      "I mostly work with TypeScript, but I'm not tied to any language or framework. I'm happy to learn what I need to solve the problem.",
    ],
    illustrationLabel: "Window into my workspace",
    projectsHeading: "A few things I've built",
    projectsLabel: "Selected projects",
    projectDescriptions: {
      depiqo: "Rental management for equipment businesses.",
      divideExpenses: "Split expenses using natural language.",
      queVes: "Discover movies through people whose taste you trust.",
    },
    recent:
      "Lately, I've been reading about computer networks, experimenting with AI agents, and trying my hand at homebrewing.",
    socialLabel: "Social profiles",
    languageLabel: "Language",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },
  es: {
    title: "Facundo Pellicer | Desarrollo de software web",
    description:
      "Desarrollo software web, desde la base de datos hasta el navegador. Algunos proyectos que hice y cómo me gusta trabajar.",
    headline:
      "Desarrollo software web, desde la base de datos hasta el navegador.",
    intro: [
      "Me gusta meterme en los detalles, entender por qué las cosas funcionan como funcionan y encontrar maneras de simplificarlas.",
      "Trabajo principalmente con TypeScript, pero no me ato a ningún lenguaje ni framework. Aprendo lo que haga falta para resolver el problema.",
    ],
    illustrationLabel: "Una ventana a mi espacio de trabajo",
    projectsHeading: "Algunos proyectos que hice",
    projectsLabel: "Proyectos seleccionados",
    projectDescriptions: {
      depiqo: "Gestión de alquileres de equipos para empresas.",
      divideExpenses: "Repartir gastos usando lenguaje natural.",
      queVes: "Descubrí películas a través de gente en cuyo gusto confiás.",
    },
    recent:
      "Últimamente estoy leyendo sobre redes informáticas, experimentando con agentes de IA y aprendiendo a hacer cerveza casera.",
    socialLabel: "Perfiles sociales",
    languageLabel: "Idioma",
    switchToLight: "Cambiar al modo claro",
    switchToDark: "Cambiar al modo oscuro",
  },
} satisfies Record<Locale, Translation>;
