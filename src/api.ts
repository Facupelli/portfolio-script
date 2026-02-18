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
          "Fauna Kite, a new kitesurf school with a tight budget, needed an online site to showcase services and enable student bookings for courses and classes. They were manually tracking info in Google Sheets via emails and calls, with no easy way to update content, events like kitecamps, or newsletters—creating inefficiency for a growing business.",
          "To keep costs low, I minimized development by using their existing Google Sheets as a free 'database' for bookings, automating data storage, email notifications (via free Nodemailer), QR code perks, and calendar events. For content like news and events, I chose Sanity CMS's free tier for its ready dashboard—avoiding custom CRUD builds, integrations with Sheets, or paid DBs, which cut workload and expenses while maintaining performance. Built with Astro for speed, deployed on Cloudflare's free tier.",
          "The site automated bookings and admin tasks, freeing the school to focus on teaching. It boosted visibility, engagement, and scalability without ongoing costs—designed with modularity so transitioning from Sheets to a real database would be straightforward as they grow. This turned constraints into a lean, effective solution that supports their expansion.",
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
          "Guanaco Rental, an audiovisual equipment business, was bogged down by manual processes: equipment lists shared via Google Sheets, bookings tracked in a makeshift sheet-based calendar, and reservations handled through scattered WhatsApp messages. This led to errors, delays, and no realtime visibility, admins couldn't quickly check availability, and clients had to wait for shared spreadsheets, making the whole operation inefficient and error-prone as the business grew.",
          "I designed and built prioritizing tools that maximized efficiency for one-person development while addressing the relational nature of the data equipment tied to owners, bookings, locations, and more. Next.js handled the full stack, with tRPC for typesafe API calls, streamlining development UX. PostgreSQL for its robust handling of relationships and queries, like checking daterange overlaps for realtime availability to prevent booking conflicts. Key trade-offs focused on cost and simplicity: Opting for a VPS deployment kept latency low and costs predictable far cheaper than cloud options with variable pricing while colocating the DB and server on the same machine ensured it could handle all traffic without scaling concerns.",
          "The platform transformed their operations, automating bookings, paperwork, and analytics saving hours of manual work so they could focus on growth. Admins now easily track equipment status, customer reliability, and monthly performance, leading to better decisions. It even scaled seamlessly when they expanded to a new province, handling the added location without any system changes, proving the design's flexibility turned a fragmented mess into a scalable business engine.",
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
          "In Argentina, the Boletín Oficial—a daily government gazette—publishes all national changes, from laws to administrative updates, amid rapid shifts under recent presidencies. Lawyers I spoke with relied on it to stay informed, but it's a dense, lengthy document filled with boilerplate like job postings that most people ignore. Citizens miss key insights buried in the jargon, lacking an easy way to access relevant updates without sifting through pages of irrelevant details.",
          "To make this accessible, I used Python's seamless PDF libraries to ingest the daily documents, then leveraged Gemini's 1M context window for AI analysis—extracting and categorizing key news into JSON format without bias. Why Gemini? Its large context handled full documents efficiently, focusing on relevance for everyday users rather than legal experts. The output feeds an Astro app for fast rendering, with a React-based AI chat embedding the day's paper in context for on-demand clarifications. This stack balanced automation (AI extraction) with interactivity (chat), keeping development lean while prioritizing neutrality and usability over opinionated content.",
          "The app delivers categorized, digestible summaries of government changes—like a neutral newspaper—empowering Argentinians to stay informed without the overwhelm. It saves time, fosters civic awareness, and highlights important shifts objectively, turning a bureaucratic resource into a public tool that's expanded users' understanding of national developments.",
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
