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
    <div className="min-h-screen bg-[#0A1118] text-[#F8FAFC] selection:bg-[#10B981]/30 selection:text-white">
      {/* Top Corporate Banner */}
      <div className="bg-[#0D1620] border-b border-[#10B981]/20 py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-[#F8FAFC] font-semibold">Atlas Strategic Advisory</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:inline text-emerald-400">
              Membre Casablanca Finance City (CFC) • Bureaux Casablanca & Paris
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+212522880099" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+212 522 88 00 99</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Échanges 100% sous Accord de Confidentialité (NDA)</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0A1118]/95 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-slate-900 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#F8FAFC]">
                  ATLAS ADVISORY
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  CFC
                </span>
              </div>
              <p className="text-[11px] text-[#94A3B8]">Stratégie & Ingénierie Financière</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-[#94A3B8]">
            <a href="#expertises" className="hover:text-emerald-400 transition-colors">Pôles d’Expertise</a>
            <a href="#diagnostic" className="hover:text-emerald-400 transition-colors">Diagnostic Flash</a>
            <a href="#etudes" className="hover:text-emerald-400 transition-colors">Réalisations</a>
            <a href="#associes" className="hover:text-emerald-400 transition-colors">Associés</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Confidentiel</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#diagnostic"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-xs font-semibold hover:bg-slate-800 transition-all"
            >
              <BarChart className="w-3.5 h-3.5 text-emerald-400" />
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101B26] border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cabinet Conseil de Référence au Maroc et en Afrique</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-tight sm:leading-tight">
              Propulser la Croissance Durable &{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                La Résilience Financière.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#101B26] border border-slate-800 text-[#F8FAFC] font-semibold text-sm hover:bg-slate-800 transition-all"
              >
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Nos Domaines de Conseil</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-[#101B26] border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">+650 M</div>
                <div className="text-xs text-[#94A3B8] mt-1">MAD de transactions conseillées</div>
              </div>
              <div className="p-4 rounded-xl bg-[#101B26] border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">140+</div>
                <div className="text-xs text-[#94A3B8] mt-1">Entreprises & Groupes accompagnés</div>
              </div>
              <div className="p-4 rounded-xl bg-[#101B26] border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">98%</div>
                <div className="text-xs text-[#94A3B8] mt-1">Taux de recommandation client</div>
              </div>
              <div className="p-4 rounded-xl bg-[#101B26] border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">CFC</div>
                <div className="text-xs text-[#94A3B8] mt-1">Casablanca Finance City Label</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="expertises" className="py-20 bg-[#0C151F] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950 text-xs font-mono text-emerald-400 mb-3 border border-emerald-800/40">
              <Briefcase className="w-3.5 h-3.5" />
              <span>DOMAINES D’INTERVENTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
              Une Approche Sur-Mesure à Forte Valeur Ajoutée
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm mt-3">
              De la conception stratégique à la livraison des livrables opérationnels, nos consultants s’engagent sur des résultats quantifiables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRACTICES.map((practice) => (
              <div
                key={practice.id}
                className="p-8 rounded-2xl bg-[#101B26] border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-emerald-400 tracking-wide uppercase font-semibold">
                      {practice.tagline}
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50">
                      {practice.metric}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] group-hover:text-emerald-300 transition-colors">
                    {practice.title}
                  </h3>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mt-3">{practice.description}</p>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <span className="text-[11px] font-semibold text-slate-300 block mb-2 uppercase tracking-wider">
                      Livrables Clés :
                    </span>
                    <div className="space-y-1.5">
                      {practice.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Accompagnement senior direct</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-950 text-emerald-400 hover:bg-emerald-600 hover:text-white text-xs font-semibold transition-all border border-emerald-800/50"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950 text-xs font-mono text-emerald-400 mb-3 border border-emerald-800/40">
              <BarChart className="w-3.5 h-3.5" />
              <span>OUTIL D’ÉVALUATION STRATÉGIQUE</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#F8FAFC]">
              Diagnostic Flash de Maturité Opérationnelle
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm mt-2">
              Évaluez en 4 critères le potentiel d’accélération et de valorisation de votre structure.
            </p>
          </div>

          <div className="rounded-2xl bg-[#101B26] border border-emerald-500/30 p-6 sm:p-10 shadow-2xl">
            {quizCompleted ? (
              <div className="py-8 space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-extrabold text-2xl mb-4">
                    {calculateScore()}%
                  </div>
                  <h3 className="text-2xl font-bold text-white">Score de Potentiel Stratégique Calculé</h3>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Analyse préliminaire générée pour l’entreprise : <strong className="text-white">{companyName || "Votre Entreprise"}</strong>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-[#0A1118] border border-slate-800">
                    <span className="text-emerald-400 font-semibold block mb-1">Levier Prioritaire Identifié :</span>
                    <p className="text-slate-300">{quizPriority}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0A1118] border border-slate-800">
                    <span className="text-emerald-400 font-semibold block mb-1">Horizon d’Exécution :</span>
                    <p className="text-slate-300">{quizTimeline}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-xs text-emerald-200">
                  <p className="font-semibold mb-1">Recommandation du Cabinet :</p>
                  <p className="leading-relaxed">
                    Au vu de votre tranche de chiffre d’affaires ({quizRevenue}), un audit de structuration financière ou de digitalisation permettrait de dégager des gains d’EBITDA mesurables sous 6 mois. Un associé du cabinet est à votre disposition pour restituer ces résultats lors d’un entretien téléphonique de 30 minutes.
                  </p>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setQuizCompleted(false)}
                    className="px-5 py-2.5 rounded-lg bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700"
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
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">
                      1. Tranche de Chiffre d’Affaires Annuel
                    </label>
                    <select
                      value={quizRevenue}
                      onChange={(e) => setQuizRevenue(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1118] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-emerald-400"
                    >
                      <option value="< 10M MAD">&lt; 10M MAD (Startup / PME émergente)</option>
                      <option value="10M - 50M MAD">10M - 50M MAD (PME établie)</option>
                      <option value="50M - 200M MAD">50M - 200M MAD (Entreprise de Taille Intermédiaire)</option>
                      <option value="> 200M MAD">&gt; 200M MAD (Groupe / Holding)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">
                      2. Défi Stratégique Majeur
                    </label>
                    <select
                      value={quizPriority}
                      onChange={(e) => setQuizPriority(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1118] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-emerald-400"
                    >
                      <option value="Transformation Digitale & Automatisation">Transformation Digitale & Automatisation</option>
                      <option value="Opération de M&A ou Levée de Fonds">Opération de M&A ou Levée de Fonds</option>
                      <option value="Optimisation des Coûts & Marge Opérationnelle">Optimisation des Coûts & Marge Opérationnelle</option>
                      <option value="Conformité ESG & Financement Vert">Conformité ESG & Financement Vert</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">
                      3. Degré de Digitalisation Actuel
                    </label>
                    <select
                      value={quizMaturity}
                      onChange={(e) => setQuizMaturity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1118] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-emerald-400"
                    >
                      <option value="Faible (Processus largement manuels / papier)">Faible (Processus manuels / papier)</option>
                      <option value="Intermédiaire (Outils hétérogènes non connectés)">Intermédiaire (Outils hétérogènes)</option>
                      <option value="Avancé (ERP en place à optimiser)">Avancé (ERP en place à optimiser)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">
                      4. Horizon Souhaité de Mise en Œuvre
                    </label>
                    <select
                      value={quizTimeline}
                      onChange={(e) => setQuizTimeline(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1118] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-emerald-400"
                    >
                      <option value="Immédiat (< 3 mois)">Immédiat (&lt; 3 mois)</option>
                      <option value="Dans les 3 à 6 mois">Dans les 3 à 6 mois</option>
                      <option value="Exercice budgétaire suivant">Exercice budgétaire suivant</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">
                      Nom de l’Entreprise (Optionnel)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Société Maghreb Export"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1118] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">
                      Email Professionnel pour Recevoir la Synthèse
                    </label>
                    <input
                      type="email"
                      placeholder="direction@entreprise.ma"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1118] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
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
      <section id="etudes" className="py-20 bg-[#0C151F] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#F8FAFC]">Études de Cas & Impacts Mesurés</h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm mt-2">
              Des interventions concrètes auprès d’acteurs économiques majeurs au Maroc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#101B26] border border-slate-800">
              <span className="text-xs font-mono text-emerald-400 font-semibold">AGROALIMENTAIRE</span>
              <h3 className="text-lg font-bold text-white mt-1">Restructuration de la Dette & Relance</h3>
              <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                Renégociation de 85M MAD d’encours bancaires auprès d’un pool de 4 banques, cession d’actifs non stratégiques et retour à la rentabilité opérationnelle sous 14 mois.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-emerald-400 font-bold">
                Impact : +42% de marge nette
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#101B26] border border-slate-800">
              <span className="text-xs font-mono text-teal-400 font-semibold">SUPPLY CHAIN & LOGISTIQUE</span>
              <h3 className="text-lg font-bold text-white mt-1">Digitalisation & Intégration ERP</h3>
              <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                Refonte intégrale des processus d’ordonnancement, mise en place d’un WMS connecté et automatisation de la facturation client sur 5 plateformes régionales.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-teal-400 font-bold">
                Impact : -35% de délais de livraison
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#101B26] border border-slate-800">
              <span className="text-xs font-mono text-indigo-400 font-semibold">FINTECH & SERVICES</span>
              <h3 className="text-lg font-bold text-white mt-1">Levée de Fonds Série A (25M MAD)</h3>
              <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                Valorisation financière, rédaction du mémorandum de présentation, sélection des fonds de capital-risque panafricains et négociation du pacte d’associés.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-indigo-400 font-bold">
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
            <h2 className="text-3xl font-extrabold text-[#F8FAFC]">
              Solliciter un Échange Confidentiel
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm mt-2">
              Un associé prendra contact avec vous dans un délai de 24 heures sous engagement de confidentialité.
            </p>
          </div>

          <div className="rounded-2xl bg-[#101B26] border border-slate-800 p-8 shadow-xl">
            {contactSent ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-600/50 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Demande Transmise aux Associés</h3>
                <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
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
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1">Nom & Fonction *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Omar Tlemçani, Directeur Général"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#0A1118] border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1">Téléphone Professionnel *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+212 6 61 00 00 00"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#0A1118] border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">Sujet de Consultation</label>
                  <select
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#0A1118] border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-400"
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
      <footer className="bg-[#070D14] border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-[#F8FAFC]">Atlas Strategic Advisory</span>
                <p className="text-[11px] text-[#94A3B8]">Casablanca Finance City (CFC) • Tour CFC</p>
              </div>
            </div>

            <div className="text-xs text-[#94A3B8] text-center md:text-right">
              <p>Développé par Tariq Abala d&apos;une manière professionnelle</p>
              <p className="mt-1 text-slate-500 font-mono text-[10px]">
                Stack : Next.js 16 • React 19 • Tailwind CSS • TypeScript
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 Atlas Strategic Advisory. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#expertises" className="hover:text-slate-400">Pôles</a>
              <a href="#diagnostic" className="hover:text-slate-400">Diagnostic</a>
              <a href="#contact" className="hover:text-slate-400">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
