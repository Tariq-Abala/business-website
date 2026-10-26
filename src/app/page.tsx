"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Shield,
  Briefcase,
  Target,
  BarChart,
  Building,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ChevronRight,
  Award,
  Users2,
  FileText,
  Search,
  Sun,
  Moon,
} from "lucide-react";

interface PracticeArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metric: string;
}

const PRACTICES: PracticeArea[] = [
  {
    id: "mna",
    title: "Fusions, Acquisitions & Levée de Fonds",
    tagline: "Corporate Finance & Capital Solutions",
    description: "Accompagnement de bout en bout des opérations de haut de bilan : valorisation financière, structuration des tours de table, due diligence et négociations stratégiques.",
    deliverables: ["Modélisation financière prévisionnelle DCF & Multiples", "Mémorandum d'information investisseur", "Négociation de pacte d'actionnaires", "Structuration de la dette senior & mezzanine"],
    metric: "+650M MAD levés",
  },
  {
    id: "digital",
    title: "Transformation Digitale & ERP",
    tagline: "Digital Strategy & Process Automation",
    description: "Modernisation des processus opérationnels et déploiement d’architectures technologiques scalables alignées sur les objectifs de croissance à moyen terme.",
    deliverables: ["Schéma directeur des systèmes d'information (SDSI)", "Cahier des charges & sélection d'éditeurs", "Automatisation des flux supply-chain & finance", "Conduite du changement & formation des équipes"],
    metric: "-35% délais opérationnels",
  },
  {
    id: "restructuration",
    title: "Stratégie Opérationnelle & Restructuration",
    tagline: "Performance Turnaround & Growth",
    description: "Diagnostic en profondeur des coûts et de l'organisation pour restaurer la rentabilité opérationnelle et accélérer la croissance sur les marchés export.",
    deliverables: ["Audit des marges par ligne d'activité", "Plan de réduction des coûts (Opex/Capex)", "Refonte de la gouvernance et des KPIs", "Accompagnement de crise et retournement"],
    metric: "+42% marge nette moyenne",
  },
  {
    id: "esg",
    title: "Gouvernance & Stratégie ESG",
    tagline: "Corporate Governance & Sustainable Value",
    description: "Alignement de votre modèle d'affaires avec les standards internationaux de gouvernance, transition bas-carbone et critères d’éligibilité aux financements verts.",
    deliverables: ["Bilan carbone d'entreprise Scope 1, 2, 3", "Charte de gouvernance du Conseil d'Administration", "Rapport extra-financier conforme CSRD", "Accès aux financements bancaires durables"],
    metric: "100% conformité aux normes",
  },
];

export default function BusinessWebsitePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Flash Diagnostic Quiz State
  const [quizRevenue, setQuizRevenue] = useState("10M - 50M MAD");
  const [quizPriority, setQuizPriority] = useState("Transformation Digitale & Automatisation");
  const [quizMaturity, setQuizMaturity] = useState("Intermédiaire (Outils hétérogènes)");
  const [quizTimeline, setQuizTimeline] = useState("Dans les 3 à 6 mois");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  // Contact form
  const [contactSubject, setContactSubject] = useState("Demande d'Échange Confidentiel");
  const [contactSent, setContactSent] = useState(false);

  const calculateScore = () => {
    let score = 75;
    if (quizPriority.includes("M&A") || quizPriority.includes("Levée")) score += 10;
    if (quizMaturity.includes("Faible")) score += 12;
    if (quizTimeline.includes("3 à 6 mois")) score += 5;
    return Math.min(score, 98);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#0A1118] text-[#F8FAFC] selection:bg-[#10B981]/30 selection:text-white"
          : "bg-[#F8FAFC] text-[#0F172A] selection:bg-emerald-100 selection:text-emerald-900"
      }`}
    >
      {/* Top Corporate Banner */}
      <div
        className={`py-2.5 px-4 text-xs border-b transition-colors ${
          isDarkMode
            ? "bg-[#0D1620] border-[#10B981]/20 text-[#94A3B8]"
            : "bg-white border-slate-200 text-slate-600"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className={`font-semibold ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
              Atlas Strategic Advisory
            </span>
            <span className={isDarkMode ? "text-slate-700 hidden sm:inline" : "text-slate-300 hidden sm:inline"}>
              |
            </span>
            <span className="hidden sm:inline text-emerald-600 dark:text-emerald-400 font-medium">
              Membre Casablanca Finance City (CFC) • Bureaux Casablanca & Paris
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+212522880099"
              className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>+212 522 88 00 99</span>
            </a>
            <span className={isDarkMode ? "text-slate-700 hidden sm:inline" : "text-slate-300 hidden sm:inline"}>
              |
            </span>
            <span className={`hidden sm:inline ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              Échanges 100% sous Accord de Confidentialité (NDA)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
          isDarkMode
            ? "bg-[#0A1118]/95 border-slate-800"
            : "bg-white/95 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-slate-900 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-lg sm:text-xl font-bold tracking-tight ${
                    isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
                  }`}
                >
                  ATLAS ADVISORY
                </span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                    isDarkMode
                      ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  CFC
                </span>
              </div>
              <p className={`text-[11px] ${isDarkMode ? "text-[#94A3B8]" : "text-slate-500"}`}>
                Stratégie & Ingénierie Financière
              </p>
            </div>
          </div>

          <div
            className={`hidden md:flex items-center gap-8 text-sm font-medium ${
              isDarkMode ? "text-[#94A3B8]" : "text-slate-600"
            }`}
          >
            <a href="#expertises" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Pôles d’Expertise
            </a>
            <a href="#diagnostic" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Diagnostic Flash
            </a>
            <a href="#etudes" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Réalisations
            </a>
            <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Contact Confidentiel
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Changer de thème"
              className={`p-2.5 rounded-xl border transition-all ${
                isDarkMode
                  ? "bg-[#101B26] border-slate-700 text-emerald-400 hover:bg-slate-800"
                  : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 shadow-sm"
              }`}
              title={isDarkMode ? "Activer le mode clair (par défaut)" : "Activer le mode sombre"}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#diagnostic"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border ${
                isDarkMode
                  ? "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <BarChart className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Diagnostic Flash</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold shadow-md shadow-emerald-500/25 hover:brightness-110 transition-all"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Solliciter un Conseil</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] rounded-full blur-[140px] pointer-events-none ${
            isDarkMode ? "bg-emerald-600/10" : "bg-emerald-200/50"
          }`}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-6 border ${
                isDarkMode
                  ? "bg-[#101B26] border-emerald-500/30 text-emerald-400"
                  : "bg-emerald-50 border-emerald-200 text-emerald-700 font-semibold"
              }`}
            >
              <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Cabinet Conseil de Référence au Maroc et en Afrique</span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              Propulser la Croissance Durable &{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                La Résilience Financière.
              </span>
            </h1>

            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed ${
                isDarkMode ? "text-[#94A3B8]" : "text-slate-600"
              }`}
            >
              Nous accompagnons les conseils d’administration, dirigeants de PME et fonds d’investissement dans leurs décisions stratégiques décisives : opérations de fusions-acquisitions, restructuration opérationnelle et transformation digitale.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 hover:scale-[1.02] transition-transform"
              >
                <Sparkles className="w-4 h-4" />
                <span>Réaliser Votre Diagnostic Flash (3 min)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#expertises"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all border ${
                  isDarkMode
                    ? "bg-[#101B26] border-slate-800 text-[#F8FAFC] hover:bg-slate-800"
                    : "bg-white border-slate-300 text-slate-800 hover:bg-slate-50 shadow-sm"
                }`}
              >
                <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Nos Domaines de Conseil</span>
              </a>
            </div>

            {/* Metrics */}
            <div
              className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t ${
                isDarkMode ? "border-slate-800" : "border-slate-200"
              }`}
            >
              <div
                className={`p-4 rounded-xl border ${
                  isDarkMode ? "bg-[#101B26] border-slate-800" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">+650 M</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#94A3B8]" : "text-slate-500"}`}>
                  MAD de transactions conseillées
                </div>
              </div>
              <div
                className={`p-4 rounded-xl border ${
                  isDarkMode ? "bg-[#101B26] border-slate-800" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">140+</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#94A3B8]" : "text-slate-500"}`}>
                  Entreprises & Groupes accompagnés
                </div>
              </div>
              <div
                className={`p-4 rounded-xl border ${
                  isDarkMode ? "bg-[#101B26] border-slate-800" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">98%</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#94A3B8]" : "text-slate-500"}`}>
                  Taux de recommandation client
                </div>
              </div>
              <div
                className={`p-4 rounded-xl border ${
                  isDarkMode ? "bg-[#101B26] border-slate-800" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">CFC</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#94A3B8]" : "text-slate-500"}`}>
                  Casablanca Finance City Label
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section
        id="expertises"
        className={`py-20 border-y transition-colors ${
          isDarkMode ? "bg-[#0C151F] border-slate-800" : "bg-slate-100/70 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono mb-3 border ${
                isDarkMode
                  ? "bg-emerald-950 text-emerald-400 border-emerald-800/40"
                  : "bg-emerald-50 text-emerald-700 border-emerald-200 font-bold"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>DOMAINES D’INTERVENTION</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              Une Approche Sur-Mesure à Forte Valeur Ajoutée
            </h2>
            <p className={`text-xs sm:text-sm mt-3 ${isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}`}>
              De la conception stratégique à la livraison des livrables opérationnels, nos consultants s’engagent sur des résultats quantifiables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRACTICES.map((practice) => (
              <div
                key={practice.id}
                className={`p-8 rounded-2xl border transition-all flex flex-col justify-between group ${
                  isDarkMode
                    ? "bg-[#101B26] border-slate-800 hover:border-emerald-500/50"
                    : "bg-white border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-wide uppercase font-bold">
                      {practice.tagline}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
                        isDarkMode
                          ? "bg-emerald-950 text-emerald-300 border-emerald-800/50"
                          : "bg-emerald-50 text-emerald-800 border-emerald-200"
                      }`}
                    >
                      {practice.metric}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-bold transition-colors ${
                      isDarkMode
                        ? "text-[#F8FAFC] group-hover:text-emerald-300"
                        : "text-slate-900 group-hover:text-emerald-700"
                    }`}
                  >
                    {practice.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mt-3 ${isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}`}>
                    {practice.description}
                  </p>

                  <div className={`mt-6 pt-4 border-t ${isDarkMode ? "border-slate-800" : "border-slate-100"}`}>
                    <span
                      className={`text-[11px] font-bold block mb-2 uppercase tracking-wider ${
                        isDarkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Livrables Clés :
                    </span>
                    <div className="space-y-1.5">
                      {practice.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 text-xs ${
                            isDarkMode ? "text-slate-300" : "text-slate-700 font-medium"
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-8 pt-4 border-t flex items-center justify-between ${
                    isDarkMode ? "border-slate-800" : "border-slate-100"
                  }`}
                >
                  <span className={`text-xs ${isDarkMode ? "text-slate-500" : "text-slate-500 font-medium"}`}>
                    Accompagnement senior direct
                  </span>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                      isDarkMode
                        ? "bg-emerald-950 text-emerald-400 hover:bg-emerald-600 hover:text-white border-emerald-800/50"
                        : "bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border-emerald-200"
                    }`}
                  >
                    <span>Échanger avec un Associé</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Flash Diagnostic Tool */}
      <section id="diagnostic" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono mb-3 border ${
                isDarkMode
                  ? "bg-emerald-950 text-emerald-400 border-emerald-800/40"
                  : "bg-emerald-50 text-emerald-700 border-emerald-200 font-bold"
              }`}
            >
              <BarChart className="w-3.5 h-3.5" />
              <span>OUTIL D’ÉVALUATION STRATÉGIQUE</span>
            </div>
            <h2 className={`text-3xl font-extrabold ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
              Diagnostic Flash de Maturité Opérationnelle
            </h2>
            <p className={`text-xs sm:text-sm mt-2 ${isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}`}>
              Évaluez en 4 critères le potentiel d’accélération et de valorisation de votre structure.
            </p>
          </div>

          <div
            className={`rounded-2xl border p-6 sm:p-10 shadow-2xl transition-all ${
              isDarkMode
                ? "bg-[#101B26] border-emerald-500/30"
                : "bg-white border-slate-200"
            }`}
          >
            {quizCompleted ? (
              <div className="py-8 space-y-6">
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full font-extrabold text-2xl mb-4 border ${
                      isDarkMode
                        ? "bg-emerald-950 border-emerald-500/40 text-emerald-400"
                        : "bg-emerald-50 border-emerald-300 text-emerald-700"
                    }`}
                  >
                    {calculateScore()}%
                  </div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                    Score de Potentiel Stratégique Calculé
                  </h3>
                  <p className={`text-xs mt-1 ${isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}`}>
                    Analyse préliminaire générée pour l’entreprise :{" "}
                    <strong className={isDarkMode ? "text-white" : "text-slate-900"}>
                      {companyName || "Votre Entreprise"}
                    </strong>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div
                    className={`p-4 rounded-xl border ${
                      isDarkMode ? "bg-[#0A1118] border-slate-800" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
                      Levier Prioritaire Identifié :
                    </span>
                    <p className={isDarkMode ? "text-slate-300" : "text-slate-700 font-medium"}>{quizPriority}</p>
                  </div>
                  <div
                    className={`p-4 rounded-xl border ${
                      isDarkMode ? "bg-[#0A1118] border-slate-800" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
                      Horizon d’Exécution :
                    </span>
                    <p className={isDarkMode ? "text-slate-300" : "text-slate-700 font-medium"}>{quizTimeline}</p>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl text-xs border ${
                    isDarkMode
                      ? "bg-emerald-950/40 border-emerald-800/50 text-emerald-200"
                      : "bg-emerald-50 border-emerald-200 text-emerald-800"
                  }`}
                >
                  <p className="font-bold mb-1">Recommandation du Cabinet :</p>
                  <p className="leading-relaxed">
                    Au vu de votre tranche de chiffre d’affaires ({quizRevenue}), un audit de structuration financière ou de digitalisation permettrait de dégager des gains d’EBITDA mesurables sous 6 mois. Un associé du cabinet est à votre disposition pour restituer ces résultats lors d’un entretien téléphonique de 30 minutes.
                  </p>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setQuizCompleted(false)}
                    className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                      isDarkMode
                        ? "bg-slate-800 text-white hover:bg-slate-700"
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300"
                    }`}
                  >
                    Modifier les paramètres du diagnostic
                  </button>
                  <a
                    href="#contact"
                    className="px-6 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 shadow-md"
                  >
                    Planifier l’Échange Conseil
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-xs font-semibold mb-2 ${
                        isDarkMode ? "text-[#94A3B8]" : "text-slate-700"
                      }`}
                    >
                      1. Tranche de Chiffre d’Affaires Annuel
                    </label>
                    <select
                      value={quizRevenue}
                      onChange={(e) => setQuizRevenue(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${
                        isDarkMode
                          ? "bg-[#0A1118] border-slate-800 text-[#F8FAFC]"
                          : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    >
                      <option value="< 10M MAD">&lt; 10M MAD (Startup / PME émergente)</option>
                      <option value="10M - 50M MAD">10M - 50M MAD (PME établie)</option>
                      <option value="50M - 200M MAD">50M - 200M MAD (Entreprise de Taille Intermédiaire)</option>
                      <option value="> 200M MAD">&gt; 200M MAD (Groupe / Holding)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-semibold mb-2 ${
                        isDarkMode ? "text-[#94A3B8]" : "text-slate-700"
                      }`}
                    >
                      2. Défi Stratégique Majeur
                    </label>
                    <select
                      value={quizPriority}
                      onChange={(e) => setQuizPriority(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${
                        isDarkMode
                          ? "bg-[#0A1118] border-slate-800 text-[#F8FAFC]"
                          : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    >
                      <option value="Transformation Digitale & Automatisation">Transformation Digitale & Automatisation</option>
                      <option value="Opération de M&A ou Levée de Fonds">Opération de M&A ou Levée de Fonds</option>
                      <option value="Optimisation des Coûts & Marge Opérationnelle">Optimisation des Coûts & Marge Opérationnelle</option>
                      <option value="Conformité ESG & Financement Vert">Conformité ESG & Financement Vert</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-semibold mb-2 ${
                        isDarkMode ? "text-[#94A3B8]" : "text-slate-700"
                      }`}
                    >
                      3. Degré de Digitalisation Actuel
                    </label>
                    <select
                      value={quizMaturity}
                      onChange={(e) => setQuizMaturity(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${
                        isDarkMode
                          ? "bg-[#0A1118] border-slate-800 text-[#F8FAFC]"
                          : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    >
                      <option value="Faible (Processus largement manuels / papier)">Faible (Processus manuels / papier)</option>
                      <option value="Intermédiaire (Outils hétérogènes non connectés)">Intermédiaire (Outils hétérogènes)</option>
                      <option value="Avancé (ERP en place à optimiser)">Avancé (ERP en place à optimiser)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-semibold mb-2 ${
                        isDarkMode ? "text-[#94A3B8]" : "text-slate-700"
                      }`}
                    >
                      4. Horizon Souhaité de Mise en Œuvre
                    </label>
                    <select
                      value={quizTimeline}
                      onChange={(e) => setQuizTimeline(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${
                        isDarkMode
                          ? "bg-[#0A1118] border-slate-800 text-[#F8FAFC]"
                          : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    >
                      <option value="Immédiat (< 3 mois)">Immédiat (&lt; 3 mois)</option>
                      <option value="Dans les 3 à 6 mois">Dans les 3 à 6 mois</option>
                      <option value="Exercice budgétaire suivant">Exercice budgétaire suivant</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-semibold mb-2 ${
                        isDarkMode ? "text-[#94A3B8]" : "text-slate-700"
                      }`}
                    >
                      Nom de l’Entreprise (Optionnel)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Société Maghreb Export"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${
                        isDarkMode
                          ? "bg-[#0A1118] border-slate-800 text-[#F8FAFC]"
                          : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-semibold mb-2 ${
                        isDarkMode ? "text-[#94A3B8]" : "text-slate-700"
                      }`}
                    >
                      Email Professionnel pour Recevoir la Synthèse
                    </label>
                    <input
                      type="email"
                      placeholder="direction@entreprise.ma"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-emerald-500 ${
                        isDarkMode
                          ? "bg-[#0A1118] border-slate-800 text-[#F8FAFC]"
                          : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`pt-4 border-t flex justify-end ${
                    isDarkMode ? "border-slate-800" : "border-slate-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setQuizCompleted(true)}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 hover:brightness-110 transition-all"
                  >
                    Calculer le Score Stratégique
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies / Réalisations */}
      <section
        id="etudes"
        className={`py-20 border-y transition-colors ${
          isDarkMode ? "bg-[#0C151F] border-slate-800" : "bg-slate-100/70 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className={`text-3xl font-extrabold ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
              Études de Cas & Impacts Mesurés
            </h2>
            <p className={`text-xs sm:text-sm mt-2 ${isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}`}>
              Des interventions concrètes auprès d’acteurs économiques majeurs au Maroc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`p-7 rounded-2xl border ${
                isDarkMode ? "bg-[#101B26] border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">AGROALIMENTAIRE</span>
              <h3 className={`text-lg font-bold mt-1 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                Restructuration de la Dette & Relance
              </h3>
              <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}`}>
                Renégociation de 85M MAD d’encours bancaires auprès d’un pool de 4 banques, cession d’actifs non stratégiques et retour à la rentabilité opérationnelle sous 14 mois.
              </p>
              <div
                className={`mt-4 pt-3 border-t text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 ${
                  isDarkMode ? "border-slate-800" : "border-slate-100"
                }`}
              >
                Impact : +42% de marge nette
              </div>
            </div>

            <div
              className={`p-7 rounded-2xl border ${
                isDarkMode ? "bg-[#101B26] border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <span className="text-xs font-mono text-teal-600 dark:text-teal-400 font-bold">SUPPLY CHAIN & LOGISTIQUE</span>
              <h3 className={`text-lg font-bold mt-1 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                Digitalisation & Intégration ERP
              </h3>
              <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}`}>
                Refonte intégrale des processus d’ordonnancement, mise en place d’un WMS connecté et automatisation de la facturation client sur 5 plateformes régionales.
              </p>
              <div
                className={`mt-4 pt-3 border-t text-xs font-mono font-bold text-teal-600 dark:text-teal-400 ${
                  isDarkMode ? "border-slate-800" : "border-slate-100"
                }`}
              >
                Impact : -35% de délais de livraison
              </div>
            </div>

            <div
              className={`p-7 rounded-2xl border ${
                isDarkMode ? "bg-[#101B26] border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">FINTECH & SERVICES</span>
              <h3 className={`text-lg font-bold mt-1 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                Levée de Fonds Série A (25M MAD)
              </h3>
              <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}`}>
                Valorisation financière, rédaction du mémorandum de présentation, sélection des fonds de capital-risque panafricains et négociation du pacte d’associés.
              </p>
              <div
                className={`mt-4 pt-3 border-t text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 ${
                  isDarkMode ? "border-slate-800" : "border-slate-100"
                }`}
              >
                Impact : Closing réalisé en 5 mois
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidential Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-extrabold ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
              Solliciter un Échange Confidentiel
            </h2>
            <p className={`text-xs sm:text-sm mt-2 ${isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}`}>
              Un associé prendra contact avec vous dans un délai de 24 heures sous engagement de confidentialité.
            </p>
          </div>

          <div
            className={`rounded-2xl border p-8 shadow-xl transition-all ${
              isDarkMode ? "bg-[#101B26] border-slate-800" : "bg-white border-slate-200"
            }`}
          >
            {contactSent ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:border dark:border-emerald-600/50 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  Demande Transmise aux Associés
                </h3>
                <p className={`text-xs max-w-md mx-auto ${isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}`}>
                  Nous avons bien reçu votre prise de contact. Un associé du cabinet vous recontactera sous 24h ouvrées.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-xs font-semibold mb-1 ${
                        isDarkMode ? "text-[#94A3B8]" : "text-slate-700"
                      }`}
                    >
                      Nom & Fonction *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Omar Tlemçani, Directeur Général"
                      className={`w-full px-3.5 py-2 rounded-lg border text-xs focus:outline-none focus:border-emerald-500 ${
                        isDarkMode
                          ? "bg-[#0A1118] border-slate-800 text-white"
                          : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-xs font-semibold mb-1 ${
                        isDarkMode ? "text-[#94A3B8]" : "text-slate-700"
                      }`}
                    >
                      Téléphone Professionnel *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+212 6 61 00 00 00"
                      className={`w-full px-3.5 py-2 rounded-lg border text-xs focus:outline-none focus:border-emerald-500 ${
                        isDarkMode
                          ? "bg-[#0A1118] border-slate-800 text-white"
                          : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-xs font-semibold mb-1 ${
                      isDarkMode ? "text-[#94A3B8]" : "text-slate-700"
                    }`}
                  >
                    Sujet de Consultation
                  </label>
                  <select
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-lg border text-xs focus:outline-none focus:border-emerald-500 ${
                      isDarkMode
                        ? "bg-[#0A1118] border-slate-800 text-white"
                        : "bg-slate-50 border-slate-300 text-slate-900"
                    }`}
                  >
                    <option value="Demande d'Échange Confidentiel">Demande d&apos;Échange Confidentiel</option>
                    <option value="Mandat M&A / Levée de Fonds">Mandat M&amp;A / Levée de Fonds</option>
                    <option value="Projet de Transformation Digitale ERP">Projet de Transformation Digitale ERP</option>
                    <option value="Mission d'Audit & Restructuration">Mission d&apos;Audit &amp; Restructuration</option>
                  </select>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-7 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
                  >
                    Envoyer la Demande Confidentielle
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 border-t transition-colors ${
          isDarkMode ? "bg-[#070D14] border-slate-800" : "bg-white border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
              isDarkMode ? "border-slate-900" : "border-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className={`text-lg font-bold ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
                  Atlas Strategic Advisory
                </span>
                <p className={`text-[11px] ${isDarkMode ? "text-[#94A3B8]" : "text-slate-500"}`}>
                  Casablanca Finance City (CFC) • Tour CFC
                </p>
              </div>
            </div>

            <div className={`text-xs text-center md:text-right ${isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}`}>
              <p className="font-semibold text-slate-900 dark:text-white">
                Développé par Tariq Abala d&apos;une manière professionnelle
              </p>
              <p className="mt-1 text-slate-400 font-mono text-[10px]">
                Stack : Next.js 16 • React 19 • Tailwind CSS • TypeScript
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 Atlas Strategic Advisory. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#expertises" className="hover:text-slate-900 dark:hover:text-slate-300">
                Pôles
              </a>
              <a href="#diagnostic" className="hover:text-slate-900 dark:hover:text-slate-300">
                Diagnostic
              </a>
              <a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
