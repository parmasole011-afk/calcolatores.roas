// config.js - File di configurazione White-Label & i18n

const config = {
  // --- IMPOSTAZIONI GENERALI ---
  defaultLang: "it", // Lingua predefinita: "it" | "en"
  currency: "€",
  storageKey: "roas_calc_scenarios_v1", // Chiave per il salvataggio locale (localStorage)

  // --- INFO BRAND ---
  brandName: "Nome Agenzia",
  logoUrl: "/logo.png", // Path locale o URL remoto (es. https://sito.it/logo.png)
  faviconUrl: "/favicon.ico",
  
  // --- PERSONALIZZAZIONE GRAFICA ---
  colors: {
    primary: "#2563eb",   // Colore principale (bottoni, accenti, highlight)
    secondary: "#1e293b", // Colore secondario o sfondi scuri
    background: "#f8fafc", // Sfondo della pagina
    cardBg: "#ffffff",     // Sfondo schede/card
  },

  // --- CALL TO ACTION (LEAD GENERATION) ---
  cta: {
    showButton: true,
    url: "https://calendly.com/tuo-link-agenzia", // Link al Calendly / Typeform / Pagina Contatti
    text: {
      it: "Prenota una Call Strategica",
      en: "Book a Strategic Call",
    },
  },

  // --- METADATI SEO ---
  meta: {
    title: {
      it: "Calcolatore ROAS & Margini E-commerce | Nome Agenzia",
      en: "Ecommerce ROAS & Margin Calculator | Agency Name",
    },
    description: {
      it: "Calcola il Breakeven ROAS e la profittabilità reale delle tue campagne e-commerce.",
      en: "Calculate Breakeven ROAS and real profitability for your ecommerce campaigns.",
    },
  },

  // --- DIZIONARIO INTERFACCIA (i18n) ---
  i18n: {
    it: {
      title: "Calcolatore ROAS & Unit Economics",
      subtitle: "Analizza i margini reali, il punto di pareggio e simula lo scaling delle campagne.",
      inputsHeader: "Parametri Economici",
      resultsHeader: "Metriche e Margini",
      scenariosHeader: "Scenari Salvati",
      
      // Etichette Form
      productPrice: "Prezzo di Vendita (IVA incl.)",
      productCost: "Costo Prodotto (COGS)",
      shippingCost: "Spese di Spedizione / Fulfillment",
      paymentFees: "Commissioni di Pagamento (%)",
      taxRate: "Aliquota IVA (%)",
      adSpend: "Spesa Pubblicitaria Totale",
      roasTarget: "ROAS Obiettivo",

      // Risultati
      breakevenRoas: "ROAS di Pareggio (Breakeven)",
      netMargin: "Margine Netto (%)",
      netProfit: "Profitto Netto Totale",
      
      // Azioni / Bottoni
      saveScenario: "Salva Scenario",
      clearScenarios: "Cancella Scenari",
      exportPdf: "Esporta Report PDF",
    },
    en: {
      title: "ROAS & Unit Economics Calculator",
      subtitle: "Analyze real margins, break-even points, and simulate campaign scaling.",
      inputsHeader: "Economic Parameters",
      resultsHeader: "Metrics & Margins",
      scenariosHeader: "Saved Scenarios",
      
      // Form Labels
      productPrice: "Selling Price (VAT incl.)",
      productCost: "Product Cost (COGS)",
      shippingCost: "Shipping / Fulfillment Cost",
      paymentFees: "Payment Gateway Fees (%)",
      taxRate: "VAT Rate (%)",
      adSpend: "Total Ad Spend",
      roasTarget: "Target ROAS",

      // Results
      breakevenRoas: "Breakeven ROAS",
      netMargin: "Net Margin (%)",
      netProfit: "Total Net Profit",
      
      // Actions / Buttons
      saveScenario: "Save Scenario",
      clearScenarios: "Clear Scenarios",
      exportPdf: "Export PDF Report",
    }
  },

  // --- FOOTER & LEGALE ---
  footer: {
    copyrightText: "© 2026 Nome Agenzia. Tutti i diritti riservati.",
    supportEmail: "contatti@nomeagenzia.it",
  }
};

// Esportazione compatibile sia per ES Modules che per caricatori tradizionali
if (typeof window !== "undefined") {
  window.appConfig = config;
}

export default config;
