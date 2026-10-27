import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Building2, Server, Scale, FileCheck2 } from "lucide-react";
import { FIRM_INFO } from "@/data/consulting";

export const metadata: Metadata = {
  title: "Mentions Légales & Cadre Réglementaire | Atlas Advisory Group",
  description: "Mentions légales, informations sur l'éditeur, hébergement et avis de démonstration du site Atlas Advisory Group.",
};

export default function MentionsLegalesPage() {
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
            Mentions Légales &amp; Cadre de Démonstration
          </h1>
          <p className="text-xs sm:text-sm text-stone-500">
            Dernière mise à jour : 2026 • Plateforme conforme aux recommandations déontologiques de conseil en gestion.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs sm:text-sm text-stone-600 leading-relaxed">
          {/* Fictional demo notice */}
          <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-900">
              <FileCheck2 className="w-4 h-4 text-amber-700" />
              <span>Avis Transparent de Démonstration Professionnelle</span>
            </div>
            <p>
              Le site <strong>Atlas Advisory Group</strong> est une réalisation conçue et développée par <strong>Tariq Abala</strong> dans le cadre d&apos;un portfolio d&apos;ingénierie web et d&apos;applications d&apos;entreprise. Les études de cas, mandats mentionnés, profils de partenaires et résultats financiers sont des simulations fictives destinées à illustrer la structure et le design d&apos;un cabinet de conseil haut de gamme. Aucune prestation de conseil financier, juridique ou d&apos;investissement n&apos;est commercialisée à travers cette interface.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200 space-y-4">
            <h2 className="font-serif text-lg font-bold text-stone-900">
              1. Éditeur du Site
            </h2>
            <p>
              <strong>Dénomination de démonstration :</strong> Atlas Advisory Group S.A.<br />
              <strong>Siège Régional Fictif :</strong> {FIRM_INFO.addressCasa}, {FIRM_INFO.cityCasa}<br />
              <strong>Bureau de Liaison :</strong> {FIRM_INFO.addressParis}, {FIRM_INFO.cityParis}<br />
              <strong>Conception, Développement &amp; Architecture Web :</strong> Tariq Abala (
              <a
                href="https://tariqabala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 underline underline-offset-2 font-semibold"
              >
                tariqabala.com
              </a>
              )<br />
              <strong>Courriel de contact :</strong> contact@atlas-advisory.demo.ma
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200 space-y-4">
            <h2 className="font-serif text-lg font-bold text-stone-900">
              2. Hébergement &amp; Sécurité Technique
            </h2>
            <p>
              Le présent site est hébergé selon les normes de l&apos;industrie sur une infrastructure moderne pourvue d&apos;un certificat SSL / TLS (chiffrement HTTPS de bout en bout). Aucun cookie publicitaire tiers n&apos;est déposé à l&apos;insu de l&apos;utilisateur.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200 space-y-4">
            <h2 className="font-serif text-lg font-bold text-stone-900">
              3. Propriété Intellectuelle &amp; Droits d&apos;Auteur
            </h2>
            <p>
              L&apos;ensemble du code source, des composants graphiques, de l&apos;architecture applicative et de la charte éditoriale est la propriété exclusive de Tariq Abala. Toute reproduction totale ou partielle sans autorisation expresse est strictement interdite.
            </p>
            <p className="text-[11px] text-stone-500 font-mono">
              &copy; 2026 TARIQ ABALA • Web Development &amp; Digital Solutions • Professional Websites • Business Applications • Custom Admin Panels.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
