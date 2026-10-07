export const siteConfig = {
  name: "Fabienne Dizy Olliveaud",
  territory: "PRÉSENCE 1.618",
  signature: "Le mouvement vers l’équilibre.",
  secondaryLine: "Revenir à soi, doucement.",
  
  description:
    "Praticienne holistique à l'écoute des corps et du souffle. Soins énergétiques, massage Lemniscate, radiesthésie vibratoire, aromathérapie subtile et L’Officine des Anges.",
  
  url: process.env.APP_URL || "https://presence1618.com",
  
  // Real business details (use null for unconfirmed values per spec #51 & #78)
  email: null as string | null,
  phone: null as string | null,
  address: "Cabinet de consultation & consultations à distance (sur rendez-vous)",
  city: "France",
  
  bookingUrl: "/prendre-rendez-vous",
  contactUrl: "/contact",
  
  socials: {
    instagram: null as string | null,
    facebook: null as string | null,
  },
  
  disclaimer:
    "Les pratiques proposées par Fabienne Dizy Olliveaud s'inscrivent dans une démarche de bien-être, de relaxation profonde et d'harmonisation énergétique. Elles ne constituent en aucun cas un acte médical ou paramédical et ne se substituent à aucun traitement médical en cours.",
};
