// config.js - File di configurazione White-Label

const config = {
  // --- INFO BRAND ---
  brandName: "Nome Agenzia",
  logoUrl: "/logo.png", // Oppure URL immagine (es. https://sito.it/logo.png)
  faviconUrl: "/favicon.ico",
  
  // --- PERSONALIZZAZIONE GRAFICA ---
  colors: {
    primary: "#2563eb",   // Colore principale (bottoni, accenti, highlight)
    secondary: "#1e293b", // Colore secondario o sfondi scuri
    background: "#f8fafc", // Sfondo della pagina
  },

  // --- CALL TO ACTION (LEAD GENERATION) ---
  cta: {
    text: "Prenota una Call Strategica",
    url: "https://calendly.com/tuo-link-agenzia", // Link al loro Calendly, Typeform o pagina contatti
    showButton: true,
  },

  // --- METADATI SEO ---
  meta: {
    title: "Calcolatore ROAS & Margini E-commerce | [Nome Agenzia]",
    description: "Calcola il Breakeven ROAS e la profittabilità reale delle tue campagne e-commerce.",
  },

  // --- FOOTER & LEGALE ---
  footer: {
    copyrightText: "© 2026 Nome Agenzia. Tutti i diritti riservati.",
    supportEmail: "contatti@nomeagenzia.it",
  }
};

export default config;
