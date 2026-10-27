"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Shield,
  BarChart3,
  TrendingUp,
  Sliders,
  FileCheck2,
  Printer,
  ChevronRight,
} from "lucide-react";
import { FIRM_INFO, SERVICES } from "@/data/consulting";

interface QuestionStep {
  id: string;
  category: string;
  title: string;
  description: string;
  options: {
    label: string;
    sublabel: string;
    score: number;
    challengeTag: string;
  }[];
}

const QUESTIONS: QuestionStep[] = [
  {
    id: "revenue",
    category: "Échelle & Chiffre d'Affaires",
    title: "Quelle est la tranche de chiffre d'affaires annuel de votre entreprise ?",
    description: "La taille et la structure du capital conditionnent le type de gouvernance et les leviers d'action prioritaires.",
    options: [
      {
        label: "Inférieur à 15M MAD",
        sublabel: "Startup en amorçage ou PME émergente",
        score: 15,
        challengeTag: "Scalabilité & Financement initial",
      },
      {
        label: "15M à 60M MAD",
        sublabel: "PME structurée en phase de consolidation",
        score: 22,
        challengeTag: "Structuration du management & BFR",
      },
      {
        label: "60M à 250M MAD",
        sublabel: "Entreprise de Taille Intermédiaire (ETI régionale)",
        score: 28,
        challengeTag: "Optimisation des marges & Systèmes ERP",
      },
      {
        label: "Supérieur à 250M MAD",
        sublabel: "Groupe industriel, holding familiale ou filiale multinationale",
        score: 35,
        challengeTag: "Gouvernance de groupe & M&A",
      },
    ],
  },
  {
    id: "challenge",
    category: "Priorité Stratégique",
    title: "Quel est l'enjeu stratégique dominant pour les 12 prochains mois ?",
    description: "Identifiez le défi qui mobilisera principalement les réflexions de la Direction Générale et des actionnaires.",
    options: [
      {
        label: "Croissance organique & Nouveaux Marchés",
        sublabel: "Diversification de portefeuille et expansion géographique",
        score: 25,
        challengeTag: "Stratégie de Croissance",
      },
      {
        label: "Opération Haut de Bilan (M&A, Levée, Cession)",
        sublabel: "Recherche de partenaires financiers, rachat ou transmission",
        score: 30,
        challengeTag: "Corporate Finance & M&A",
      },
      {
        label: "Modernisation des Systèmes & Digitalisation ERP",
        sublabel: "Remplacement d'outils hétérogènes et automatisation des flux",
        score: 24,
        challengeTag: "Transformation Digitale",
      },
      {
        label: "Préservation des Marges & Retournement Opérationnel",
        sublabel: "Réduction des coûts de revient, maîtrise des stocks et trésorerie",
        score: 20,
        challengeTag: "Performance Opérationnelle",
      },
    ],
  },
  {
    id: "digitalMaturity",
    category: "Maturité Opérationnelle",
    title: "Comment qualifieriez-vous le degré d'outillage et d'automatisation interne ?",
    description: "Une mesure réaliste de l'autonomie de vos processus sans ressaisie manuelle ni dépendance aux personnes clés.",
    options: [
      {
        label: "Faible — Forte dépendance aux feuilles de calculs et processus papier",
        sublabel: "Risques élevés d'erreurs et perte d'historique",
        score: 10,
        challengeTag: "Rupture technologique imminente",
      },
      {
        label: "Intermédiaire — Outils hétérogènes non intégrés",
        sublabel: "Comptabilité et gestion séparées, reporting différé",
        score: 20,
        challengeTag: "Nécessité d'intégration inter-services",
      },
      {
        label: "Avancé — ERP en production avec tableaux de bord récents",
        sublabel: "Données fiables mais besoin d'optimisation prédictive",
        score: 30,
        challengeTag: "Gouvernance des données et BI avancée",
      },
    ],
  },
  {
    id: "timeline",
    category: "Calendrier Décisionnel",
    title: "À quelle échéance une intervention externe doit-elle délivrer ses effets ?",
    description: "Le rythme d'exécution détermine le choix entre actions d'urgence (Quick Wins) ou chantiers structurants pluriannuels.",
    options: [
      {
        label: "Urgence immédiate (Moins de 60 jours)",
        sublabel: "Enjeu critique de trésorerie, fenêtre M&A ou défaillance opérationnelle",
        score: 15,
        challengeTag: "Intervention Commando & Fast-Track",
      },
      {
        label: "Court terme (3 à 6 mois)",
        sublabel: "Plan d'affaires pour le prochain exercice ou audit flash",
        score: 22,
        challengeTag: "Mission structurante semestrielle",
      },
      {
        label: "Moyen terme (Exercice budgétaire à venir)",
        sublabel: "Réflexion prospective et préparation de la gouvernance",
        score: 18,
        challengeTag: "Feuille de route stratégique pluriannuelle",
      },
    ],
  },
];

export default function DiagnosticTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [companyContext, setCompanyContext] = useState({
    companyName: "",
    sector: "Industrie / Manufacturing",
  });
  const [isCalculated, setIsCalculated] = useState(false);

  const handleSelectOption = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (answers[currentStep] === undefined) return;
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCalculated(false);
  };

  // Reproducible Scoring Logic based strictly on chosen criteria
  const calculateResults = () => {
    const revChoice = QUESTIONS[0].options[answers[0] ?? 0];
    const challengeChoice = QUESTIONS[1].options[answers[1] ?? 0];
    const digitalChoice = QUESTIONS[2].options[answers[2] ?? 0];
    const timeChoice = QUESTIONS[3].options[answers[3] ?? 0];

    const rawScore = revChoice.score + challengeChoice.score + digitalChoice.score + timeChoice.score;
    // Map between 55 and 96
    const normalizedScore = Math.min(96, Math.max(55, Math.round((rawScore / 115) * 100)));

    let maturityLevel = "Intermédiaire";
    let priorityServiceSlug = "strategie";

    if (challengeChoice.label.includes("Haut de Bilan") || challengeChoice.label.includes("M&A")) {
      priorityServiceSlug = "finance";
    } else if (challengeChoice.label.includes("Modernisation") || challengeChoice.label.includes("ERP")) {
      priorityServiceSlug = "digital";
    } else if (challengeChoice.label.includes("Marges") || challengeChoice.label.includes("Opérationnel")) {
      priorityServiceSlug = "operations";
    } else {
      priorityServiceSlug = "strategie";
    }

    if (normalizedScore > 82) {
      maturityLevel = "Élevée (Organisation prête pour expansion ou transaction)";
    } else if (normalizedScore >= 68) {
      maturityLevel = "Solide avec chantiers d'optimisation prioritaires";
    } else {
      maturityLevel = "Phase de structuration nécessaire avant accélération";
    }

    return {
      score: normalizedScore,
      maturityLevel,
      priorityService: SERVICES.find((s) => s.slug === priorityServiceSlug) ?? SERVICES[0],
      selectedRev: revChoice.label,
      selectedChallenge: challengeChoice.label,
      selectedDigital: digitalChoice.label,
      selectedTime: timeChoice.label,
    };
  };

  const result = isCalculated ? calculateResults() : null;

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden transition-all">
      {/* Header bar */}
      <div className="bg-[#1C3D2B] text-white px-6 sm:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-600/40 text-emerald-300 text-xs font-semibold mb-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Outil d&apos;Évaluation Stratégique Locale</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
              Diagnostic Flash de Pré-Cadrage
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
              Évaluez en 4 critères la maturité de votre gouvernance et identifiez les leviers d&apos;accélération prioritaires.
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[11px] uppercase tracking-wider text-emerald-300/80 block font-semibold">
              Protection des Données
            </span>
            <span className="text-xs text-stone-200 flex items-center gap-1.5 justify-end">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% calculé en local</span>
            </span>
          </div>
        </div>
      </div>

      {!isCalculated ? (
        <div className="p-6 sm:p-10 space-y-8">
          {/* Step Progress Tracker */}
          <div>
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium mb-3">
              <span>
                Étape {currentStep + 1} sur {QUESTIONS.length} :{" "}
                <strong className="text-stone-900 font-semibold">{QUESTIONS[currentStep].category}</strong>
              </span>
              <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% complété</span>
            </div>

            <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
              <div
                className="h-full bg-[#1C3D2B] transition-all duration-300 ease-out"
                style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Current Question */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-bold text-stone-900 font-serif leading-snug">
              {QUESTIONS[currentStep].title}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {QUESTIONS[currentStep].description}
            </p>

            {/* Options list */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {QUESTIONS[currentStep].options.map((option, idx) => {
                const isSelected = answers[currentStep] === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? "border-[#1C3D2B] bg-[#1C3D2B]/5 ring-1 ring-[#1C3D2B]"
                        : "border-stone-200 hover:border-stone-300 hover:bg-stone-50/80 bg-white"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? "border-[#1C3D2B] bg-[#1C3D2B] text-white"
                          : "border-stone-300 bg-white"
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-sm text-stone-900 block leading-tight">
                        {option.label}
                      </span>
                      <span className="text-xs text-stone-500 mt-0.5 block">
                        {option.sublabel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional context field on step 1 */}
          {currentStep === 0 && (
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Nom de votre structure (Optionnel)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Holding Industrielle Atlas"
                  value={companyContext.companyName}
                  onChange={(e) =>
                    setCompanyContext((prev) => ({ ...prev, companyName: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] focus:border-[#1C3D2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Secteur d&apos;activité principal
                </label>
                <select
                  value={companyContext.sector}
                  onChange={(e) =>
                    setCompanyContext((prev) => ({ ...prev, sector: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] focus:border-[#1C3D2B] bg-white"
                >
                  <option value="Industrie / Manufacturing">Industrie / Manufacturing</option>
                  <option value="Agroalimentaire">Agroalimentaire &amp; Distribution</option>
                  <option value="Transport & Logistique">Transport &amp; Logistique</option>
                  <option value="Services Financiers & FinTech">Services Financiers &amp; FinTech</option>
                  <option value="Santé & Technologies Médicales">Santé &amp; Technologies Médicales</option>
                  <option value="Immobilier & BTP">Immobilier &amp; BTP</option>
                </select>
              </div>
            </div>
          )}

          {/* Navigation controls */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                currentStep === 0
                  ? "opacity-30 cursor-not-allowed text-stone-400"
                  : "text-stone-700 hover:bg-stone-100"
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Précédent</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={answers[currentStep] === undefined}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
                answers[currentStep] === undefined
                  ? "opacity-40 cursor-not-allowed bg-stone-300 text-stone-600"
                  : "bg-[#1C3D2B] hover:bg-[#152e20] text-white"
              }`}
            >
              <span>{currentStep === QUESTIONS.length - 1 ? "Générer la Synthèse Stratégique" : "Continuer"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : result ? (
        /* Results View */
        <div className="p-6 sm:p-10 space-y-8 animate-fadeIn">
          {/* Top Score Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="md:col-span-1 flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-stone-200/80 shadow-xs text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                Indice de Préparation
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-black text-[#1C3D2B]">
                {result.score}
                <span className="text-xl text-stone-400 font-sans font-normal">/100</span>
              </div>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full mt-2">
                Éligibilité Mandat Favorable
              </span>
            </div>

            <div className="md:col-span-2 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Diagnostic Synthétique : {companyContext.companyName || "Entreprise Évaluée"} ({companyContext.sector})
              </div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                {result.maturityLevel}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Sur la base de votre tranche de revenus (<strong className="text-stone-800">{result.selectedRev}</strong>) et de votre horizon temporel (<strong className="text-stone-800">{result.selectedTime}</strong>), un accompagnement ciblé sur le domaine <strong className="text-emerald-900">{result.priorityService.title}</strong> offre le retour sur investissement le plus direct.
              </p>
            </div>
          </div>

          {/* Key Recommendations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Recommandations d&apos;Actions Prioritaires</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1C3D2B] mt-1.5 shrink-0" />
                  <span>
                    <strong>Cadrage analytique :</strong> Conduire un audit préliminaire de rentabilité par centre de profit sous 3 semaines.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1C3D2B] mt-1.5 shrink-0" />
                  <span>
                    <strong>Gouvernance actionnariale :</strong> Aligner les parties prenantes sur les hypothèses financières clés avant toute négociation externe.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1C3D2B] mt-1.5 shrink-0" />
                  <span>
                    <strong>Feuille de route AMOA :</strong> Structurer les jalons décisionnels et chiffrer précisément les investissements Capex/Opex requis.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800">
                <TrendingUp className="w-4 h-4 text-[#1C3D2B]" />
                <span>Pratique Spécialisée Recommandée</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white text-emerald-900 border border-stone-200">
                  {result.priorityService.badge}
                </span>
                <h5 className="font-serif font-bold text-base text-stone-900">
                  {result.priorityService.title}
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {result.priorityService.shortDesc}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/services/${result.priorityService.slug}`}
                    className="text-xs font-semibold text-[#1C3D2B] hover:text-emerald-800 inline-flex items-center gap-1 group"
                  >
                    <span>Consulter le détail de cette offre</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Legal / Transparency Disclaimer */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold">Mentions de Démonstration &amp; Rigueur Déontologique :</strong>
              Ce diagnostic constitue une simulation algorithmique locale à visée informative. Il ne se substitue pas à une analyse d&apos;audit financier, fiscal ou juridique formelle. Aucune donnée saisie n&apos;est stockée sur nos serveurs ni communiquée à des tiers sans mandat signé.
            </div>
          </div>

          {/* Actions CTA */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Modifier les hypothèses du diagnostic</span>
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold transition-colors flex-1 sm:flex-initial"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimer la synthèse</span>
              </button>

              <Link
                href={`/contact?subject=${encodeURIComponent(
                  `Restitution Diagnostic — ${result.priorityService.title}`
                )}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#1C3D2B] hover:bg-[#152e20] text-white text-xs font-bold transition-all shadow-sm flex-1 sm:flex-initial"
              >
                <span>Échanger avec un Associé</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
