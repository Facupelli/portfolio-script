import Faunakite1 from "./assets/images/faunakite-1.webp";
import Faunakite2 from "./assets/images/faunakite-2.png";
import Faunakite3 from "./assets/images/faunakite-3.png";
import GuanacoRental1 from "./assets/images/guanacorental-1.png";
import GuanacoRental2 from "./assets/images/guanacorental-2.png";
import GuanacoRental3 from "./assets/images/guanacorental-3.png";
import BoletinOficial1 from "./assets/images/boletinoficial-1.png";
import BoletinOficial2 from "./assets/images/boletinoficial-2.png";
import BoletinOficial3 from "./assets/images/boletinoficial-3.png";

export const api = {
  getProjects: () => {
    return [
      {
        images: [
          {
            src: GuanacoRental1,
            alt: "Guanaco Rental home page",
          },
          {
            src: GuanacoRental2,
            alt: "Guanaco Rental home page",
          },
          {
            src: GuanacoRental3,
            alt: "Guanaco Rental home page",
          },
        ],
        title: "Guanaco Rental",
        subtitle: "Rental app",
        description: [
          "Guanaco Rental managed audiovisual equipment through Google Sheets, WhatsApp messages, and a manual booking calendar. As the business grew, checking availability, avoiding booking conflicts, and tracking equipment status became slow and error-prone.",
          "I designed and built a full rental management system with Next.js, tRPC, Prisma, and PostgreSQL. The data model handled equipment, owners, bookings, customers, locations, and date-range availability checks to prevent reservation conflicts in real time. I deployed it on a VPS to keep infrastructure simple, predictable, and cost-effective.",
          "The platform replaced fragmented manual workflows with a centralized system for reservations, equipment status, customer history, paperwork, and analytics. It later supported expansion to a new province without requiring structural changes to the system.",
        ],
        stack: [
          "Typescript",
          "Nextjs",
          "PostgreSQL",
          "Prisma",
          "tRPC",
          "Tailwind",
          "Shadcn/ui",
        ],
      },
      {
        images: [
          {
            src: Faunakite1,
            alt: "Fauna Kite home page",
          },
          {
            src: Faunakite2,
            alt: "Fauna Kite home page",
          },
          {
            src: Faunakite3,
            alt: "Fauna Kite home page",
          },
        ],
        title: "Fauna Kite",
        subtitle: "Kitesurf school app",
        description: [
          "Fauna Kite needed a low-cost website to present its kitesurf courses, manage bookings, and publish events, while the team was still relying on Google Sheets, emails, and calls for day-to-day operations.",
          "I built a fast Astro site and reused their existing Google Sheets workflow as a lightweight booking backend. I added automated email notifications, calendar events, QR code perks, and Sanity CMS so the team could update news and kitecamp content without a custom admin panel.",
          "The project automated bookings and content updates without adding paid infrastructure or operational complexity. It gave the school a scalable foundation while keeping the system simple enough to evolve into a real database later.",
        ],
        stack: [
          "Typescript",
          "Astro",
          "Google Sheets API",
          "Google Calendar API",
          "Gmail API",
          "React",
        ],
      },
      {
        images: [
          {
            src: BoletinOficial1,
            alt: "Boletin Oficial home page",
          },
          {
            src: BoletinOficial2,
            alt: "Boletin Oficial home page",
          },
          {
            src: BoletinOficial3,
            alt: "Boletin Oficial home page",
          },
        ],
        title: "Boletin Oficial",
        subtitle: "Civic tech",
        description: [
          "Argentina’s Boletín Oficial publishes important government updates every day, but the documents are dense, repetitive, and difficult to scan. Relevant changes often get buried among administrative content.",
          "I built a pipeline that ingests the daily PDFs, extracts relevant information with Python, and uses large-context AI models to categorize the updates into structured JSON. The results are published in a fast Astro app with a React chat interface for asking questions about the day’s document.",
          "The app turns a difficult government source into readable summaries and searchable context, helping users understand relevant public updates without manually reading the full document.",
        ],
        stack: ["Python", "FastAPI", "OpenAI", "Gemini", "Astro", "React"],
      },
    ];
  },
  getExperience: () => {
    return [
      {
        date: "July 2023 - Present",
        title: "Full Stack Developer",
        subtitle: "Strategic Architect for high-growth startups",
      },
      {
        date: "April 2023 - September 2023",
        title: "Wordpress Developer",
        subtitle: "Strategic Architect for high-growth startups",
      },
      {
        date: "2022 - 2023",
        title: "Full Stack Developer",
        subtitle: "Strategic Architect for high-growth startups",
      },
    ];
  },
};
