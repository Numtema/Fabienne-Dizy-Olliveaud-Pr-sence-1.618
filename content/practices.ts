export interface Practice {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string[];
  intention: string;
  pourQui: string[];
  deroulement: string[];
  practicalInfo: {
    duree?: string;
    lieu?: string;
    tarif?: string;
    remarque?: string;
  };
  image: string;
  aspectRatio: string;
  pathCategory: "Recevoir" | "Ralentir" | "Explorer";
}

export const practicesList: Practice[] = [
  {
    slug: "energetique",
    number: "01",
    title: "Soin Énergétique",
    subtitle: "Harmonisation globale & dépose des charges subtiles",
    shortDescription:
      "Un temps suspendu d'apposition des mains et d'écoute vibratoire pour fluidifier la circulation vitale, dissoudre les nœuds de fatigue et rétablir le calme organique.",
    fullDescription: [
      "Le corps humain accumule continuellement le rythme effréné du quotidien, les émotions retenues et les fatigues résiduelles. Le soin énergétique propose une parenthèse où le corps retrouve sa capacité naturelle d'autorégulation.",
      "Par un toucher délicat ou une présence des mains à quelques centimètres du corps, nous parcourons les centres énergétiques (chakras) et les méridiens pour relancer ce qui était figé et apaiser ce qui était en tension.",
      "Nous intégrons selon les besoins du moment les approches LaHoChi et Reiki, adaptées à la sensibilité spécifique de chaque personne.",
    ],
    intention:
      "Permettre à l'énergie de circuler librement sans obstacle ni précipitation, en laissant le corps se déposer à son propre rythme.",
    pourQui: [
      "Périodes de surmenage, de charge mentale ou de fatigue persistante",
      "Transitions de vie nécessitant un recentrage profond",
      "Sensation de dispersion ou de déconnexion d'avec son corps",
      "Besoin d'un espace d'accueil sans attente ni jugement",
    ],
    deroulement: [
      "Temps d'accueil et d'échange sur vos ressentis actuels",
      "Séance allongée, habillé(e), dans une ambiance sereine et tempérée",
      "Balayage énergétique, imposition des mains et harmonisation",
      "Retour progressif à soi et bref partage d'intégration",
    ],
    practicalInfo: {
      duree: "Environ 1 heure à 1 heure 15",
      lieu: "Au cabinet ou en accompagnement à distance",
      tarif: "Sur demande lors du premier échange",
      remarque: "Tenue souple et confortable recommandée",
    },
    image: "/assets/fabienne-hands.jpg",
    aspectRatio: "1.618 / 1",
    pathCategory: "Recevoir",
  },
  {
    slug: "massage-lemniscate",
    number: "02",
    title: "Massage Lemniscate",
    subtitle: "Le mouvement infini au service de la continuité du vivant",
    shortDescription:
      "Inspiré par le chiffre 8 et la lemniscate, ce massage rythmique enveloppant utilise un geste continu, fluide et sans rupture pour réunifier la conscience corporelle.",
    fullDescription: [
      "La lemniscate — forme du huit couché et symbole d'équilibre infini — est un mouvement primordial présent dans les battements cardiaques, la circulation sanguine et les cycles naturels.",
      "Contrairement aux massages fragmentés par zones isolées, le massage Lemniscate relie continuellement le haut et le bas, la droite et la gauche, l'intérieur et l'extérieur. Les mains de la praticienne ne rompent jamais le contact.",
      "Ce bercement régulier agit directement sur le système nerveux autonome, induisant un état de relâchement proche du sommeil conscient.",
    ],
    intention:
      "Effacer la fragmentation du corps et recréer un sentiment d'unité globale, de douceur et d'ancrage rassurant.",
    pourQui: [
      "Système nerveux sous tension constante ou stress chronique",
      "Besoin de réunification corporelle et d'apaisement tactile",
      "Recherche d'un massage doux, profond et hautement enveloppant",
      "Personnes ayant des difficultés à 'lâcher prise' mentalement",
    ],
    deroulement: [
      "Prise de contact par la respiration partagée et effleurements initiaux",
      "Application d'une huile végétale biologique tiédie formulée avec douceur",
      "Tracés continus en forme de huit sur l'ensemble du corps",
      "Phase de repos silencieux sous tissu doux pour intégrer la circulation",
    ],
    practicalInfo: {
      duree: "Environ 1 heure 15 à 1 heure 30",
      lieu: "Exclusivement au cabinet",
      tarif: "Consulter la page tarifs ou nous contacter",
      remarque: "Huiles végétales biologiques neutres ou délicatement infusées",
    },
    image: "/assets/fabienne-massage-lemniscate.jpg",
    aspectRatio: "1.618 / 1",
    pathCategory: "Recevoir",
  },
  {
    slug: "radiesthesie",
    number: "03",
    title: "Radiesthésie & Écoute Vibratoire",
    subtitle: "Interroger le champ subtil par le mouvement du pendule",
    shortDescription:
      "Une approche sensible et rigoureuse utilisant le pendule comme prolongement de la perception sensorielle pour repérer les déséquilibres et clarifier les choix de vie.",
    fullDescription: [
      "La radiesthésie n'est pas une prédiction du futur : c'est un art de l'écoute fine. Le pendule agit comme un résonateur, amplifiant les micro-mouvements neuromusculaires involontaires induits par notre réceptivité aux champs subtils.",
      "En cabinet ou sur plan, cette pratique permet de dresser un bilan de vitalité, d'identifier les blocages énergétiques dans les corps subtils ou d'analyser les influences d'un lieu de vie.",
      "Elle sert de guide précieux pour orienter le choix des synergies botaniques ou le protocole de soin le plus adapté.",
    ],
    intention:
      "Clarifier la boussole intérieure et rendre visibles les résonances qui demandent à être réajustées.",
    pourQui: [
      "Bilan de vitalité et vérification des centres énergétiques",
      "Questionnements intérieurs nécessitant un éclairage neutre et bienveillant",
      "Harmonisation de lieux d'habitation ou d'espaces professionnels",
      "Choix personnalisé d'élixirs floraux ou d'huiles adaptées",
    ],
    deroulement: [
      "Définition précise de la demande ou de l'axe de recherche",
      "Prise de mesures vibratoires à l'aide de biomètres et cadrans adaptés",
      "Analyse des perturbations et identification des points de levier",
      "Conseils personnalisés d'harmonisation",
    ],
    practicalInfo: {
      duree: "Environ 45 minutes à 1 heure",
      lieu: "Au cabinet ou à distance (sur support)",
      tarif: "Modalités présentées sur la page dédiée",
      remarque: "Nécessite calme et concentration réciproque",
    },
    image: "/assets/fabienne-pendulum.jpg",
    aspectRatio: "4 / 3",
    pathCategory: "Explorer",
  },
  {
    slug: "aromatherapie",
    number: "04",
    title: "Aromathérapie Subtile & Olfaction",
    subtitle: "La mémoire des plantes au service de l'émotion",
    shortDescription:
      "L'usage des quintessences végétales pures et rares pour dialoguer avec la sphère limbique, libérer les mémoires émotionnelles et ramener la clarté d'esprit.",
    fullDescription: [
      "L'odorat est le seul sens directement relié à notre cerveau émotionnel sans passer par le filtre du néocortex rationnel. Une essence végétale a le pouvoir d'apaiser un état de crise en quelques respirations.",
      "L'aromathérapie subtile ne se contente pas des molécules biochimiques : elle s'intéresse au message vibratoire de la plante, à sa géométrie et à son affinité avec les centres de conscience.",
      "Chaque composition est élaborée sur mesure, dans le respect strict des précautions d'emploi et des dosages sécuritaires.",
    ],
    intention:
      "Accompagner la libération des tensions par le souffle et le réconfort olfactif des essences végétales de haute lignée.",
    pourQui: [
      "Stress émotionnel, anxiété diffuse ou difficultés d'endormissement",
      "Accompagnement de deuils, séparations ou transitions intenses",
      "Envie de créer son propre rituel olfactif quotidien",
      "Sensibilité naturelle aux plantes et au monde végétal",
    ],
    deroulement: [
      "Écoute de vos affinités et aversions olfactives",
      "Dégustation olfactive à l'aveugle de touches parfumées",
      "Sélection des essences en résonance avec votre état vibratoire",
      "Conception d'une touche d'onction ou d'un roll-on personnalisé",
    ],
    practicalInfo: {
      duree: "Environ 1 heure",
      lieu: "Au cabinet ou atelier privatif",
      tarif: "Comprend le flacon personnalisé selon la formule",
      remarque: "Mentionner toute grossesse ou terrain allergique",
    },
    image: "/assets/fabienne-aromatherapy.jpg",
    aspectRatio: "1.618 / 1",
    pathCategory: "Ralentir",
  },
  {
    slug: "meditation",
    number: "05",
    title: "Méditation & Présence Guidée",
    subtitle: "L'art de s'asseoir dans le silence sans rien forcer",
    shortDescription:
      "Séances individuelles ou en petits cercles pour apprivoiser l'immobilité, calmer le flux des pensées et faire l'expérience d'une présence pleine et entière à soi.",
    fullDescription: [
      "Dans notre monde d'injonction à l'action constante, s'arrêter est devenu un acte radical de bienveillance envers soi-même.",
      "La méditation telle que guidée par Fabienne n'impose aucune posture rigide ni performance d'esprit vide. Elle repose sur l'ancrage doux dans le souffle, la perception corporelle et l'écoute attentive des bruits du monde.",
      "Au fil des minutes, le système s'apaise de lui-même sans effort, révélant cet espace d'équilibre qui n'a jamais cessé d'exister en nous.",
    ],
    intention:
      "Retrouver le contact avec l'immobilité tranquille et transformer sa relation au temps qui passe.",
    pourQui: [
      "Débutants souhaitant apprendre à méditer sans pression",
      "Pratiquants cherchant à approfondir leur ancrage dans le quotidien",
      "Personnes submergées par l'agitation mentale ou le multitâche",
      "Toute personne en quête d'un temps de silence partagé",
    ],
    deroulement: [
      "Installation corporelle et dépose des tensions physiques",
      "Guidance vocale sobre, axée sur les sensations et la respiration",
      "Temps de silence ouvert et d'écoute du champ de présence",
      "Transition douce vers le mouvement et mot de clôture",
    ],
    practicalInfo: {
      duree: "45 minutes à 1 heure",
      lieu: "En cabinet ou en visio individuelle",
      tarif: "Consulter la page tarifs",
      remarque: "Coussins et assises ergonomiques mis à disposition",
    },
    image: "/assets/fabienne-cabinet.jpg",
    aspectRatio: "4 / 3",
    pathCategory: "Ralentir",
  },
  {
    slug: "ateliers-formations",
    number: "06",
    title: "Ateliers & Transmissions",
    subtitle: "Transmettre le geste, la sensibilité et l'autonomie",
    shortDescription:
      "Des moments de transmission intimes pour s'initier à la radiesthésie, comprendre les bases de la circulation énergétique et intégrer des rituels de soin au quotidien.",
    fullDescription: [
      "La sensibilité n'est pas un don réservé à quelques élus : c'est une qualité humaine fondamentale que notre mode de vie moderne a souvent mise en sommeil.",
      "Au sein de cercles restreints (4 à 8 personnes maximum), Fabienne transmet des repères clairs, des protocoles simples et une éthique rigoureuse pour vous permettre de développer votre ressenti en toute sécurité.",
      "Ces ateliers allient théorie vivante, exercices pratiques en binôme et temps de dépose collective.",
    ],
    intention:
      "Donner à chacun des outils concrets et autonomes pour prendre soin de son équilibre et de celui de son entourage.",
    pourQui: [
      "Personnes curieuses d'explorer leur intuition et leur ressenti subtil",
      "Thérapeutes désireux d'enrichir leur boîte à outils d'écoute",
      "Toute personne souhaitant pratiquer la radiesthésie au pendule",
      "Ceux qui cherchent à instaurer des rituels de centrage fiables",
    ],
    deroulement: [
      "Tour d'horizon bienveillant et pose du cadre d'écoute",
      "Apports pédagogiques et démonstration du geste",
      "Pratique guidée pas à pas avec matériel fourni",
      "Cahier de transmission remis pour accompagner votre pratique personnelle",
    ],
    practicalInfo: {
      duree: "Demi-journée (3h30) ou journée complète (7h)",
      lieu: "Lieux choisis en nature ou cabinet spacieux",
      tarif: "Programme et dates annoncés périodiquement",
      remarque: "Petits groupes pour garantir une attention personnalisée",
    },
    image: "/assets/fabienne-hero-poster.jpg",
    aspectRatio: "1.618 / 1",
    pathCategory: "Explorer",
  },
];
