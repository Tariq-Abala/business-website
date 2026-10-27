import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, EyeOff, FileCheck2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité & Engagement NDA | Atlas Advisory Group",
  description: "Engagement de discrétion, accords de non-divulgation (NDA) et gestion des données pour Atlas Advisory Group.",
};

export default function ConfidentialitePage() {
  return (
    <div className="bg-[#FAFAF9] text-[#1C1917]">
      <section className="pt-12 pb-16 border-b border-stone-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l&apos;accueil</span>
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Politique de Confidentialité &amp; Engagement NDA
          </h1>
          <p className="text-xs sm:text-sm text-stone-500">
            La protection du secret des affaires et des données stratégiques de nos mandants est le socle de notre pratique.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <div className="p-8 rounded-3xl bg-white border border-stone-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-lg font-bold text-stone-900">
                1. Engagement de Non-Divulgation (NDA) Bilatéral
              </h2>
            </div>
            <p>
              Préalablement à tout échange approfondi, à toute transmission d&apos;états financiers ou de données d&apos;exploitation, Atlas Advisory propose et signe systématiquement un contrat d&apos;accord de confidentialité (Non-Disclosure Agreement). Cet accord engage juridiquement l&apos;ensemble de nos associés, directeurs de mission et partenaires techniques.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                <EyeOff className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-lg font-bold text-stone-900">
                2. Traitement des Données du Diagnostic en Ligne
              </h2>
            </div>
            <p>
              L&apos;outil d&apos;évaluation stratégique et le diagnostic interactif accessibles sur cette plateforme s&apos;exécutent intégralement en local dans le navigateur du visiteur (client-side execution). Aucune des données saisies (chiffre d&apos;affaires, priorité ou diagnostic) n&apos;est transmise ou enregistrée sur des serveurs distants sans accord explicite.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-lg font-bold text-stone-900">
                3. Conservation &amp; Restitution des Documents de Mission
              </h2>
            </div>
            <p>
              À l&apos;issue de chaque mission de conseil ou mandat financier, tous les documents préparatoires, extractions comptables et notes de travail sont archivés sur des coffres-forts numériques sécurisés ou détruits avec certificat de destruction à la demande écrite du client.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1C3D2B] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <strong className="block text-sm font-serif">
                Demander notre modèle type d&apos;accord de confidentialité
              </strong>
              <span className="text-xs text-stone-300">
                Transmis sous 24h par le secrétariat des associés.
              </span>
            </div>
            <Link
              href="/contact?subject=Demande+Modele+NDA"
              className="px-5 py-2.5 rounded-xl bg-white text-stone-900 text-xs font-bold hover:bg-stone-100 transition-colors shrink-0"
            >
              Solliciter le NDA type
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
