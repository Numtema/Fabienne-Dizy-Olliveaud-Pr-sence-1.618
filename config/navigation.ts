export interface NavItem {
  label: string;
  href: string;
  description?: string;
  category?: "Recevoir" | "Ralentir / Explorer";
}

export const mainNavItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Fabienne", href: "/a-propos" },
  { label: "Pratiques", href: "/pratiques" },
  { label: "Lemniscate", href: "/massage-lemniscate" },
  { label: "L’Officine", href: "/officine-des-anges" },
  { label: "Ateliers", href: "/ateliers-formations" },
  { label: "Témoignages", href: "/temoignages" },
];

export const practicesSubNav: {
  recevoir: NavItem[];
  ralentir: NavItem[];
} = {
  recevoir: [
    {
      label: "Énergétique",
      href: "/energetique",
      description: "Harmonisation globale des flux vitaux et libération des tensions subtiles.",
      category: "Recevoir",
    },
    {
      label: "Massage Lemniscate",
      href: "/massage-lemniscate",
      description: "Mouvement en huit continu réunifiant le corps et apaisant le système nerveux.",
      category: "Recevoir",
    },
  ],
  ralentir: [
    {
      label: "Radiesthésie",
      href: "/radiesthesie",
      description: "Écoute vibratoire et lecture sensible des fréquences par le pendule.",
      category: "Ralentir / Explorer",
    },
    {
      label: "Aromathérapie",
      href: "/aromatherapie",
      description: "Quintessences végétales et olfaction pour soutenir l'équilibre intérieur.",
      category: "Ralentir / Explorer",
    },
    {
      label: "Méditation & Présence",
      href: "/meditation",
      description: "Apprentissage du silence intérieur, du souffle et de l’immobilité attentive.",
      category: "Ralentir / Explorer",
    },
    {
      label: "Ateliers & Formations",
      href: "/ateliers-formations",
      description: "Transmissions collectives, initiation au geste et développement de la perception.",
      category: "Ralentir / Explorer",
    },
  ],
};

export const footerLinks = {
  navigation: [
    { label: "Fabienne", href: "/a-propos" },
    { label: "Pratiques", href: "/pratiques" },
    { label: "Tarifs & Modalités", href: "/tarifs" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "Contact", href: "/contact" },
  ],
  practices: [
    { label: "Énergétique", href: "/energetique" },
    { label: "Massage Lemniscate", href: "/massage-lemniscate" },
    { label: "Radiesthésie", href: "/radiesthesie" },
    { label: "Aromathérapie", href: "/aromatherapie" },
    { label: "Méditation", href: "/meditation" },
  ],
  explorer: [
    { label: "L’Officine des Anges", href: "/officine-des-anges" },
    { label: "Ateliers & Formations", href: "/ateliers-formations" },
    { label: "Prendre rendez-vous", href: "/prendre-rendez-vous" },
  ],
  legal: [
    { label: "Mentions légales", href: "/legal/mentions-legales" },
    { label: "Politique de confidentialité", href: "/legal/politique-confidentialite" },
  ],
};
