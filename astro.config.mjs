import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      name: "Instrument Sans",
      cssVariable: "--font-instrument-sans",
      provider: fontProviders.google(),
      weights: ["400 700"],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
