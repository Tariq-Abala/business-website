import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Sliders,
  Shield,
  FileCheck2,
  Lock,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import DiagnosticTool from "@/components/DiagnosticTool";

export const metadata: Metadata = {
  title: "Diagnostic Stratégique Interactif | Atlas Advisory Group",
  description:
    "Évaluez gratuitement en 4 étapes la maturité organisationnelle de votre entreprise et identifiez les leviers d'accélération prioritaires.",
};

export default function DiagnosticPage() {
  return (
    <div className="bg-[#FAFAF9] text-[#1C1917]">
      {/* 1. Header */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Outil d&apos;Aide à la Décision</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Diagnostic Stratégique &amp; Cadrage des Priorités
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Un algorithme d&apos;orientation analytique conçu pour éclairer les directions générales sur leurs leviers de rentabilité, d&apos;outillage technologique et de structuration financière.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Tool Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Diagnostic Widget */}
          <DiagnosticTool />

          {/* Privacy and Transparency Assurance Box */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Garanties Déontologiques &amp; Protection des Données
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Ce questionnaire s&apos;exécute à 100% dans votre navigateur web local. Aucune information saisie (nom d&apos;entreprise, chiffres d&apos;affaires ou orientations) n&apos;est transmise à une base de données externe ou à un tiers publicitaire.
            </p>

            <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <span className="text-stone-500">
                Vous souhaitez un audit formel sur site avec nos associés ?
              </span>
              <Link
                href="/contact"
                className="font-bold text-[#1C3D2B] hover:text-emerald-800 inline-flex items-center gap-1"
              >
                <span>Solliciter un cadrage confidentiel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
