"use client";

import React from "react";
import Link from "next/link";
import {
  Shield,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Lock,
  ExternalLink,
  Building2,
  FileCheck2,
} from "lucide-react";
import { FIRM_INFO, SERVICES } from "@/data/consulting";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Bar: Confidentiality & NDA Commitment */}
        <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 mb-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-base">
                  Garantie de Confidentialité Absolue
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
                  NDA Inclus
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-0.5">
                Chaque échange exploratoire et chaque mandat sont rigoureusement encadrés par un accord de non-divulgation bilatéral préalable.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-white text-stone-900 hover:bg-stone-100 transition-colors shadow-sm shrink-0"
          >
            <span>Initier un échange confidentiel</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1 & 2: Firm Branding and Locations */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-sm tracking-wider">
                A
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight text-white block">
                  ATLAS ADVISORY
                </span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-medium">
                  Management Consulting • Casablanca &amp; Paris
                </span>
              </div>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Cabinet indépendant de conseil en stratégie de direction générale, corporate finance M&amp;A et transformation des opérations. Rigueur analytique, indépendance et résultats tangibles.
            </p>

            <div className="space-y-3 pt-2 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-200 block">Siège Régional — Casablanca :</strong>
                  <span>{FIRM_INFO.addressCasa}, {FIRM_INFO.cityCasa}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-200 block">Bureau de Liaison — Paris :</strong>
                  <span>{FIRM_INFO.addressParis}, {FIRM_INFO.cityParis}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{FIRM_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Expertises */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Domaines d&apos;Expertise
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-stone-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-stone-800">
                <Link
                  href="/services"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>Vue synthétique de nos offres</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Le Cabinet */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Le Cabinet
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  Notre Vision &amp; Associés
                </Link>
              </li>
              <li>
                <Link href="/methodologie" className="hover:text-white transition-colors">
                  Méthodologie &amp; Processus
                </Link>
              </li>
              <li>
                <Link href="/etudes-de-cas" className="hover:text-white transition-colors">
                  Études de Cas (Démonstrations)
                </Link>
              </li>
              <li>
                <Link href="/diagnostic" className="hover:text-white transition-colors flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Diagnostic Stratégique Interactif</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Questions Fréquentes (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Secrétariat &amp; Prise de Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Direct & Liens Légaux */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact &amp; Déontologie
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div>
                <span className="block text-[11px] text-stone-500 uppercase">Téléphone Secrétariat</span>
                <a
                  href={`tel:${FIRM_INFO.phoneRaw}`}
                  className="text-stone-200 hover:text-white font-medium block"
                >
                  {FIRM_INFO.phone}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-stone-500 uppercase">Courriel Général</span>
                <a
                  href={`mailto:${FIRM_INFO.email}`}
                  className="text-stone-200 hover:text-white font-medium block"
                >
                  {FIRM_INFO.email}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-stone-500 uppercase">Canal Direction WhatsApp</span>
                <a
                  href={`https://wa.me/${FIRM_INFO.whatsappRaw}?text=${encodeURIComponent("Bonjour Atlas Advisory, je souhaite solliciter un échange exploratoire confidentiel.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
                >
                  <span>{FIRM_INFO.whatsapp}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="pt-2 border-t border-stone-800 flex flex-col gap-1.5 text-[11px]">
                <Link href="/mentions-legales" className="hover:text-stone-200 transition-colors">
                  Mentions Légales &amp; RGPD
                </Link>
                <Link href="/confidentialite" className="hover:text-stone-200 transition-colors">
                  Politique de Confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Fictional Demonstration Transparency Banner */}
        <div className="my-8 p-4 rounded-xl bg-stone-950/90 border border-stone-800 text-[11px] text-stone-400 leading-relaxed flex flex-col md:flex-row items-start md:items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-300 shrink-0">
            <FileCheck2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex-1">
            <strong className="text-stone-200 font-semibold block mb-0.5">
              Avis Transparent de Démonstration Professionnelle
            </strong>
            <p>
              Ce site web est une vitrine de démonstration conçue et développée dans le cadre du portfolio d&apos;ingénierie logicielle de Tariq Abala. Les dénominations d&apos;interventions, profils d&apos;associés et métriques d&apos;impact sont des simulations illustratives. Aucun conseil juridique, fiscal, réglementaire ou financier engageant n&apos;est dispensé sur cette plateforme.
            </p>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 border-t border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <div className="text-stone-300 font-medium">
              Développé par{" "}
              <a
                href="https://tariqabala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 font-semibold transition-colors"
              >
                Tariq Abala
              </a>
            </div>
            <div className="text-[11px] text-stone-500 font-mono tracking-wide">
              TARIQ ABALA • Web Development &amp; Digital Solutions • Professional Websites • Business Applications • Custom Admin Panels
            </div>
          </div>

          <div className="text-[11px] text-stone-500">
            &copy; 2026 Atlas Advisory Group. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
