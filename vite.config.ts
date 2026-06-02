import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Ensure a single instance so vite-react-ssg's HelmetProvider and the
    // pages' <Helmet> share the same React context (required for head extraction).
    dedupe: ["react", "react-dom", "react-helmet-async"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
