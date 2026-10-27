export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  keyChallenges: string[];
  clientProfile: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  sector: string;
  title: string;
  tagline: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  deliverables: string[];
  duration: string;
  isFictionalDemo: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  image: string;
  isDemoProfile: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "mandats" | "confidentialite" | "honoraires" | "equipe";
}

export const FIRM_INFO = {
  name: "Atlas Advisory Group",
  shortName: "Atlas Advisory",
  tagline: "Cabinet de Conseil en Stratégie, Corporate Finance & Transformation Opérationnelle",
  description:
    "Atlas Advisory accompagne les comités de direction, conseils d'administration et actionnaires d'entreprises dans leurs décisions à fort enjeu stratégique, financier et technologique.",
  addressCasa: "Tour Casablanca Finance City (CFC), 16ème étage, Main Street, Casa Anfa",
  cityCasa: "20250 Casablanca, Maroc",
  addressParis: "28, Avenue de l'Opéra",
  cityParis: "75001 Paris, France",
  phone: "+212 5 22 88 00 99",
  phoneRaw: "+212522880099",
  whatsapp: "+212 6 23 59 28 87",
  whatsappRaw: "212623592887",
  email: "contact@atlas-advisory.demo.ma",
  hours: "Du Lundi au Vendredi : 08h30 - 19h00 (Sur Rendez-vous)",
  ndaGuarantee:
    "Engagement de confidentialité strict : 100% de nos premiers échanges et missions sont encadrés par un accord de non-divulgation (NDA).",
  demoNotice:
    "Site web vitrine de démonstration conçu et développé par Tariq Abala. Les études de cas, profils de consultants et métriques sont des exemples de simulation professionnelle sans engagement d'obligation de résultat.",
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "strategie",
    slug: "strategie",
    title: "Conseil en Stratégie & Croissance",
    badge: "Management Consulting",
    tagline: "Clarifier les orientations, accélérer la trajectoire de croissance et sécuriser le modèle économique.",
    shortDesc:
      "Élaboration de plans stratégiques à 3 et 5 ans, revue de portefeuille d'activités, études d'opportunités de diversification et optimisation de la gouvernance d'entreprise.",
    fullDesc:
      "Face aux mutations rapides des marchés et aux ruptures concurrentielles, nous aidons les équipes dirigeantes à définir un cap stratégique clair et actionnable. Notre démarche allie rigueur analytique, modélisation de scénarios de marché et accompagnement de l'alignement des actionnaires.",
    deliverables: [
      "Plan stratégique triennal & quinquennal formalisé",
      "Cartographie des relais de croissance et d'expansion géographique",
      "Revue stratégique de portefeuille (matrices rentabilité / risque)",
      "Charte de gouvernance actionnariale et pactes d'associés",
      "Feuille de route d'exécution avec indicateurs clés (OKRs & KPIs)",
    ],
    keyChallenges: [
      "Stagnation de la croissance organique sur le marché domestique",
      "Alignement stratégique entre actionnaires familiaux et fonds d'investissement",
      "Évaluation des opportunités de déploiement à l'échelle africaine et européenne",
      "Modernisation du modèle économique face à de nouveaux entrants",
    ],
    clientProfile: "Conseils d'administration, Directions Générales de PME/ETI et Holdings familiales.",
    image: "/images/office_hero.jpg",
  },
  {
    id: "finance",
    slug: "finance",
    title: "Corporate Finance, M&A & Ingénierie",
    badge: "M&A & Capital Solutions",
    tagline: "Maximiser la valeur financière lors des opérations de haut de bilan, fusions-acquisitions et levées de capitaux.",
    shortDesc:
      "Accompagnement indépendant lors des opérations de cession, acquisition stratégique, modélisation financière DCF, levée de dette structurée et restructuration de passif bancaire.",
    fullDesc:
      "De la valorisation financière préliminaire jusqu'au closing, nos équipes apportent une expertise pointue des transactions de capital au Maroc et en Afrique du Nord. Nous défendons les intérêts stricts de nos mandants avec indépendance et confidentialité.",
    deliverables: [
      "Modélisation financière prévisionnelle détaillée (DCF, multiples boursiers et transactions comparables)",
      "Mémorandum d'information investisseur (Info Memo) de niveau institutionnel",
      "Coordination des audits d'acquisition (Due Diligence financière, fiscale et juridique)",
      "Structuration des tours de table (Equity, dette senior, mezzanine)",
      "Support lors de la négociation des contrats de cession (SPA) et pactes d'actionnaires",
    ],
    keyChallenges: [
      "Valorisation juste et défendable d'une entreprise avant transmission",
      "Identification de contreparties stratégiques ou financières qualifiées",
      "Renégociation de covenants ou restructuration d'endettement auprès de pools bancaires",
      "Arbitrage entre dilution capitalistique et financement non dilutif",
    ],
    clientProfile: "Actionnaires cédants, repreneurs industriels, fonds de Private Equity et comités d'investissement.",
    image: "/images/digital_strategy.jpg",
  },
  {
    id: "digital",
    slug: "digital",
    title: "Transformation Digitale & Systèmes ERP",
    badge: "Technology Advisory",
    tagline: "Aligner les systèmes d'information sur les objectifs métier pour bâtir une organisation agile et scalable.",
    shortDesc:
      "Schémas directeurs des systèmes d'information (SDSI), sélection et pilotage d'intégration ERP / CRM, automatisation des flux de travail et gouvernance de la donnée.",
    fullDesc:
      "La technologie doit être un accélérateur de rentabilité et non un centre de coûts opaque. Nous assistons la maîtrise d'ouvrage (AMOA) dans le choix et la mise en œuvre de solutions d'entreprise pérennes, en veillant à l'adoption réelle par les utilisateurs.",
    deliverables: [
      "Schéma Directeur des Systèmes d'Information (SDSI) aligné sur la stratégie",
      "Cahier des charges fonctionnel et technique pour appel d'offres",
      "Grille comparative indépendante et sélection des éditeurs / intégrateurs ERP",
      "Plan de conduite du changement et montée en compétences des équipes",
      "Architecture de gouvernance des données et tableaux de bord décisionnels (BI)",
    ],
    keyChallenges: [
      "Systèmes d'information fragmentés et ressaisies manuelles chronophages",
      "Échec ou dérive budgétaire d'un projet d'intégration ERP",
      "Fiabilisation des flux de facturation, comptabilité et supply-chain",
      "Sécurisation des données sensibles et conformité réglementaire",
    ],
    clientProfile: "Directions des Systèmes d'Information (DSI), Directeurs Financiers (DAF) et Directions des Opérations.",
    image: "/images/corporate_meeting.jpg",
  },
  {
    id: "operations",
    slug: "operations",
    title: "Performance Opérationnelle & Supply Chain",
    badge: "Operations & Turnaround",
    tagline: "Optimiser les processus, réduire les coûts de revient et élever les standards d'exécution industrielle.",
    shortDesc:
      "Diagnostic de la chaîne de valeur, plans de réduction des coûts (Opex/Capex), optimisation des stocks, refonte des tournées logistiques et excellence opérationnelle.",
    fullDesc:
      "Nous intervenons au cœur des opérations pour identifier les gisements d'efficience et éliminer les gaspillages. Notre méthode combine analyse rigoureuse des données d'exploitation et immersion sur le terrain aux côtés des équipes.",
    deliverables: [
      "Audit des marges par produit, canal de distribution et typologie de client",
      "Plan d'action de rationalisation des coûts (Quick Wins et chantiers structurels)",
      "Refonte des processus d'approvisionnement et réduction des encours de stock",
      "Schéma d'optimisation logistique et modélisation des tournées de livraison",
      "Mise en place de rituels de management opérationnel et indicateurs de productivité",
    ],
    keyChallenges: [
      "Érosion continue des marges brutes sous l'effet de l'inflation des matières premières",
      "Ruptures de stock récurrentes associées à un sur-stockage coûteux",
      "Complexité logistique multi-sites et délais de livraison non maîtrisés",
      "Besoin de restructuration rapide suite à une dégradation de la trésorerie",
    ],
    clientProfile: "Directeurs Généraux, Directions Industrielles, Directeurs Logistiques et Supply Chain.",
    image: "/images/operations_facility.jpg",
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    name: "Immersion & Cadrage Initial",
    duration: "Semaines 1 à 2",
    description:
      "Entretiens approfondis avec le comité de direction, immersion sur le terrain et collecte exhaustive des données financières et opérationnelles sous accord de confidentialité (NDA).",
    deliverables: "Note de cadrage méthodologique, calendrier des travaux et cartographie des parties prenantes.",
  },
  {
    step: "02",
    name: "Diagnostic Analytique & Modélisation",
    duration: "Semaines 3 à 5",
    description:
      "Analyse quantitative rigoureuse, benchmarks sectoriels, modélisation financière prospective et identification précise des leviers de création de valeur.",
    deliverables: "Rapport de diagnostic stratégique complet et modèle financier interactif.",
  },
  {
    step: "03",
    name: "Co-Construction de la Feuille de Route",
    duration: "Semaines 6 à 8",
    description:
      "Ateliers de travail stratégiques avec les équipes dirigeantes pour prioriser les initiatives, évaluer la faisabilité et définir le plan d'allocation des ressources.",
    deliverables: "Feuille de route opérationnelle (Roadmap), budget détaillé et indicateurs de pilotage (KPIs).",
  },
  {
    step: "04",
    name: "Pilotage de l'Exécution & Restitution",
    duration: "Mois 3 à 6 (selon mandat)",
    description:
      "Accompagnement de la gouvernance, comités de suivi mensuels, levée des points de blocage opérationnels et mesure des impacts quantifiables.",
    deliverables: "Comptes-rendus de comités de pilotage et rapport final d'impact.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-agro",
    sector: "Industrie Agroalimentaire",
    title: "Restructuration Opérationnelle & Refinancement d'un Groupe Régional",
    tagline: "Retournement de rentabilité et négociation d'un pool bancaire de 85M MAD.",
    challenge:
      "Érosion sévère des marges brutes suite à la hausse des coûts des intrants et surendettement à court terme menaçant l'équilibre d'exploitation.",
    solution:
      "Audit flash de la rentabilité par famille de produits, arrêt des références déficitaires, renégociation des encours avec 4 banques partenaires et mise en place d'un contrôle de gestion prévisionnel.",
    impactMetrics: [
      { label: "Marge d'EBITDA", value: "+4,8 pts" },
      { label: "Dette restructurée", value: "85M MAD" },
      { label: "Délais de recouvrement", value: "-22 jours" },
    ],
    deliverables: [
      "Plan d'affaires financier indépendant",
      "Protocole d'accord de rééchelonnement bancaire",
      "Tableau de bord de trésorerie hebdomadaire",
    ],
    duration: "5 mois",
    isFictionalDemo: true,
  },
  {
    id: "case-logistique",
    sector: "Transport & Supply Chain",
    title: "Schéma Directeur & Déploiement d'une Solution WMS Connectée",
    tagline: "Automatisation de la gestion des stocks sur 4 plateformes régionales.",
    challenge:
      "Système d'information hérité saturé, erreurs de préparation de commandes et manque de visibilité en temps réel sur les flux multi-sites.",
    solution:
      "Rédaction du cahier des charges AMOA, sélection indépendante de l'éditeur WMS, refonte des processus d'ordonnancement et accompagnement des équipes d'entrepôt.",
    impactMetrics: [
      { label: "Délais de livraison", value: "-35%" },
      { label: "Précision d'inventaire", value: "99,4%" },
      { label: "Productivité préparation", value: "+28%" },
    ],
    deliverables: [
      "Cahier des charges fonctionnel WMS",
      "Cartographie des flux logistiques cibles",
      "Plan de formation des opérateurs",
    ],
    duration: "6 mois",
    isFictionalDemo: true,
  },
  {
    id: "case-fintech",
    sector: "Technologies Financières (FinTech)",
    title: "Préparation & Exécution d'une Levée de Fonds Série A (25M MAD)",
    tagline: "Valorisation financière et négociation du tour de table auprès de fonds de capital-risque.",
    challenge:
      "Nécessité d'accélérer l'expansion en Afrique de l'Ouest tout en structurant les ratios prudentiels et la gouvernance d'entreprise.",
    solution:
      "Modélisation prévisionnelle DCF sur 5 ans, rédaction du mémorandum investisseur, sélection d'investisseurs institutionnels panafricains et assistance lors de la négociation du pacte.",
    impactMetrics: [
      { label: "Fonds levés", value: "25M MAD" },
      { label: "Closing réalisé", value: "5 mois" },
      { label: "Fonds en concurrence", value: "4 offres" },
    ],
    deliverables: [
      "Modèle financier dynamique 5 ans",
      "Investment Memorandum de 45 pages",
      "Pacte d'actionnaires structuré",
    ],
    duration: "5 mois",
    isFictionalDemo: true,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "karim-b",
    name: "Karim Benjelloun",
    role: "Senior Managing Partner — Stratégie & M&A (Profil Démo)",
    credentials: [
      "Ancien Directeur Associé dans un cabinet international de conseil",
      "Diplômé de l'ESSEC Business School & Sciences Po",
      "20+ années d'expérience en fusions-acquisitions et gouvernance",
    ],
    bio: "Spécialiste des opérations de haut de bilan et de la transformation stratégique d'entreprises familiales et de groupes industriels au Maroc et en Afrique subsaharienne.",
    image: "/images/partner_male.jpg",
    isDemoProfile: true,
  },
  {
    id: "leila-m",
    name: "Leila El Mansouri",
    role: "Partner — Transformation Digitale & Systèmes (Profil Démo)",
    credentials: [
      "Diplômée de l'École Centrale Paris & Télécom",
      "15 années de direction de projets technologiques et ERP",
      "Experte en architectures de données et conduite du changement",
    ],
    bio: "Conseille les comités de direction sur l'intégration de technologies critiques, l'automatisation des processus d'entreprise et l'efficacité des investissements numériques.",
    image: "/images/partner_female.jpg",
    isDemoProfile: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "mandats",
    question: "Quelle est la durée typique d'une mission de conseil avec Atlas Advisory ?",
    answer:
      "La durée varie selon la complexité du mandat : un diagnostic flash ou une revue stratégique s'étale généralement sur 3 à 5 semaines, tandis qu'un mandat M&A ou une mission de transformation opérationnelle s'échelonne sur 3 à 6 mois jusqu'à la livraison complète des résultats.",
  },
  {
    category: "confidentialite",
    question: "Comment est garantie la stricte confidentialité de nos informations stratégiques ?",
    answer:
      "La discrétion absolue est au cœur de notre déontologie. Avant tout échange d'informations préliminaires, nous signons systématiquement un accord de confidentialité (Non-Disclosure Agreement - NDA) bilatéral engageant l'ensemble de nos équipes et partenaires techniques.",
  },
  {
    category: "honoraires",
    question: "Quel est le modèle de rémunération appliqué par le cabinet ?",
    answer:
      "Nos honoraires sont structurés de manière transparente selon la nature de l'intervention : forfait d'honoraires au temps passé pour les missions de stratégie et d'organisation, ou structure mixte (retainer fixe + success fee contingent à la réalisation effective) pour les mandats de levée de fonds et d'acquisition M&A.",
  },
  {
    category: "equipe",
    question: "Qui compose l'équipe projet dédiée à notre mission ?",
    answer:
      "Chaque mission est directement pilotée par un Partner associé expérimenté, secondé par des directeurs de mission et consultants seniors spécialisés. Nous privilégions une implication forte et continue des associés tout au long de l'intervention.",
  },
];
