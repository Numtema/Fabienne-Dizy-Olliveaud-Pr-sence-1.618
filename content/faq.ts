export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    id: "premier-echange",
    question: "Comment se déroule un premier contact ou une prise de rendez-vous ?",
    answer:
      "Tout accompagnement commence par un moment d'écoute bienveillante. Vous pouvez me joindre par le formulaire ou directement par téléphone. Nous prenons quelques minutes pour faire le point sur vos besoins du moment et convenir du créneau le plus adapté à votre rythme.",
  },
  {
    id: "massage-lemniscate-difference",
    question: "Qu'est-ce que le massage Lemniscate et en quoi se distingue-t-il d'un massage traditionnel ?",
    answer:
      "Le massage Lemniscate repose sur le mouvement continu du chiffre huit (∞). Contrairement aux protocoles qui traitent les zones musculaires séparément en rompant le contact, ce massage ne s'arrête jamais. Les mains relient sans cesse les polarités du corps, ce qui régule profondément le système neurovégétatif et recrée une sensation d'unité globale.",
  },
  {
    id: "cadre-medical",
    question: "Les soins énergétiques remplacent-ils un suivi ou un traitement médical ?",
    answer:
      "Absolument pas. Les pratiques de Fabienne Dizy Olliveaud relèvent exclusivement du bien-être, de la relaxation et de l'harmonisation énergétique. Elles viennent en complément serein pour soutenir votre vitalité et votre confort, et ne doivent en aucun cas interrompre ou modifier une prescription médicale en cours.",
  },
  {
    id: "choix-pratique",
    question: "Je ne sais pas quelle pratique choisir : comment faire ?",
    answer:
      "Il n'est pas nécessaire de savoir à l'avance. Lors de notre premier contact, nous clarifions si votre besoin relève plutôt de la dépose physique (massage Lemniscate), de l'apaisement global (soin énergétique), de la clarification d'une situation (radiesthésie) ou d'un soutien olfactif (aromathérapie). Le soin est toujours ajusté sur mesure.",
  },
  {
    id: "preparation-seance",
    question: "Comment se préparer avant une séance au cabinet ?",
    answer:
      "Privilégiez une tenue souple et agréable. Prévoyez si possible un moment de calme après la séance pour laisser le corps intégrer le mouvement sans devoir reprendre immédiatement un rythme effréné. Buvez de l'eau pure et laissez-vous accueillir.",
  },
  {
    id: "officine-formules",
    question: "Qu'est-ce que L'Officine des Anges et comment se procurer une formule ?",
    answer:
      "L'Officine des Anges est le laboratoire artisanal et olfactif de Présence 1.618. Il regroupe des brumes de présence, huiles d'onction et synergies florales confectionnées en séries limitées à partir d'essences pures. Chaque formule est proposée lors des séances ou sur commande personnalisée après échange.",
  },
];
