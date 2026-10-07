export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
  source: string;
  date?: string;
  rating?: string;
}

export const testimonialsList: Testimonial[] = [
  {
    id: "temoignage-1",
    quote:
      "Le massage Lemniscate est une expérience d'une douceur rare. Pour la première fois depuis des mois, la sensation de coupure entre ma tête et mon corps a disparu. Le geste en huit ne s'arrête jamais, c'est infiniment rassurant.",
    author: "Claire D.",
    context: "Séance de massage Lemniscate",
    source: "Avis vérifié Resalib",
    date: "Novembre 2025",
    rating: "5/5",
  },
  {
    id: "temoignage-2",
    quote:
      "Fabienne a une écoute exceptionnelle. Elle ne précipite rien, elle prend le temps de comprendre où se loge la tension avant même de poser les mains. On repart du cabinet avec une clarté et un calme qui durent plusieurs semaines.",
    author: "Marc V.",
    context: "Soin Énergétique & Bilan",
    source: "Avis vérifié Google",
    date: "Janvier 2026",
    rating: "5/5",
  },
  {
    id: "temoignage-3",
    quote:
      "La séance de radiesthésie combinée à l'aromathérapie m'a permis de mettre des mots très justes sur ce que je traversais. La brume personnalisée de l'Officine fait désormais partie de mon rituel du soir.",
    author: "Éléonore B.",
    context: "Accompagnement holistique & L'Officine",
    source: "Témoignage patient",
    date: "Février 2026",
  },
];
