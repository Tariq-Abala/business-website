"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  Lock,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ArrowRight,
  Building2,
  FileCheck2,
} from "lucide-react";
import { FIRM_INFO, SERVICES } from "@/data/consulting";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "strategie";
  const initialSubject = searchParams.get("subject") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: initialService,
    revenueBracket: "15M - 60M MAD",
    message: initialSubject ? `Objet : ${initialSubject}\n\n` : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (searchParams.get("service")) {
      setFormData((prev) => ({ ...prev, service: searchParams.get("service")! }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Veuillez renseigner votre nom complet.";
    if (!formData.company.trim()) newErrors.company = "Veuillez préciser le nom de votre organisation.";
    if (!formData.email.trim() || !formData.email.includes("@"))
      newErrors.email = "Une adresse email professionnelle valide est requise.";
    if (!formData.message.trim())
      newErrors.message = "Veuillez décrire le contexte de votre demande.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAFAF9] text-[#1C1917]">
      {/* 1. Header */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Secrétariat Général des Associés</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Prendre contact avec la direction du cabinet.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Pour solliciter un premier échange de cadrage ou planifier une réunion de travail sous accord de confidentialité (NDA).
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Form & Office Info */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Office Coordinates */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1C3D2B] text-white flex items-center justify-center font-bold">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-stone-900">
                      Garantie NDA Systématique
                    </h3>
                    <span className="text-[11px] text-stone-500">
                      Confidentialité bilatérale garantie dès le premier contact
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {FIRM_INFO.ndaGuarantee}
                </p>

                <div className="space-y-4 pt-4 border-t border-stone-100 text-xs text-stone-700">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">Téléphone Secrétariat :</strong>
                      <a href={`tel:${FIRM_INFO.phoneRaw}`} className="hover:text-emerald-800 font-medium">
                        {FIRM_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">Courriel Officiel :</strong>
                      <a href={`mailto:${FIRM_INFO.email}`} className="hover:text-emerald-800 font-medium">
                        {FIRM_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">Disponibilité :</strong>
                      <span>{FIRM_INFO.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Addresses */}
              <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Bureaux &amp; Espaces de Réunion
                </h4>

                <div className="space-y-4 text-xs text-stone-600">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
                    <div className="flex items-center gap-2 text-stone-900 font-bold">
                      <Building2 className="w-4 h-4 text-[#1C3D2B]" />
                      <span>Casablanca — Siège Régional</span>
                    </div>
                    <p className="text-stone-600 text-[11px] leading-relaxed">
                      {FIRM_INFO.addressCasa}, {FIRM_INFO.cityCasa}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
                    <div className="flex items-center gap-2 text-stone-900 font-bold">
                      <Building2 className="w-4 h-4 text-[#1C3D2B]" />
                      <span>Paris — Bureau de Liaison</span>
                    </div>
                    <p className="text-stone-600 text-[11px] leading-relaxed">
                      {FIRM_INFO.addressParis}, {FIRM_INFO.cityParis}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${FIRM_INFO.whatsappRaw}?text=${encodeURIComponent(
                      "Bonjour Atlas Advisory, je sollicite un échange préliminaire confidentiel."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Ouvrir une discussion WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-xs">
                {submitted ? (
                  <div className="text-center py-12 space-y-5 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">
                      Demande enregistrée en mode démonstration
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                      Merci pour votre intérêt, <strong className="text-stone-900">{formData.fullName}</strong>. Votre sollicitation pour la structure <strong className="text-stone-900">{formData.company}</strong> a été validée localement.
                    </p>
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 max-w-md mx-auto text-left">
                      <strong>Précision d&apos;Intégration Technique :</strong>
                      <p className="text-[11px] mt-1 text-amber-800">
                        Ce site web est un démonstrateur de portfolio. Aucune passerelle SMTP externe n&apos;est connectée sur cet environnement de test. Pour joindre un véritable interlocuteur ou tester un contact effectif, veuillez utiliser la messagerie WhatsApp ci-contre.
                      </p>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition-colors"
                      >
                        Soumettre une nouvelle demande
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-stone-100 pb-4">
                      <h3 className="font-serif text-2xl font-bold text-stone-900">
                        Demande de Consultation &amp; Accord NDA
                      </h3>
                      <p className="text-xs text-stone-500 mt-1">
                        Chaque champ est examiné en toute confidentialité par les associés du cabinet.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                          Nom &amp; Prénom *
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: Tariq Abala"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                          }
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] bg-[#FAFAF9] ${
                            errors.fullName
                              ? "border-red-400 focus:border-red-500"
                              : "border-stone-300 focus:border-[#1C3D2B]"
                          }`}
                        />
                        {errors.fullName && (
                          <span className="text-[11px] text-red-600 mt-1 block">
                            {errors.fullName}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                          Entreprise / Organisation *
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: Atlas Holding S.A."
                          value={formData.company}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, company: e.target.value }))
                          }
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] bg-[#FAFAF9] ${
                            errors.company
                              ? "border-red-400 focus:border-red-500"
                              : "border-stone-300 focus:border-[#1C3D2B]"
                          }`}
                        />
                        {errors.company && (
                          <span className="text-[11px] text-red-600 mt-1 block">
                            {errors.company}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                          Courriel Professionnel *
                        </label>
                        <input
                          type="email"
                          placeholder="direction@entreprise.ma"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                          }
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] bg-[#FAFAF9] ${
                            errors.email
                              ? "border-red-400 focus:border-red-500"
                              : "border-stone-300 focus:border-[#1C3D2B]"
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[11px] text-red-600 mt-1 block">
                            {errors.email}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                          Numéro Téléphonique Direct
                        </label>
                        <input
                          type="tel"
                          placeholder="+212 6 XX XX XX XX"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] focus:border-[#1C3D2B] bg-[#FAFAF9]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                          Pratique Concernée
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, service: e.target.value }))
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] focus:border-[#1C3D2B] bg-[#FAFAF9]"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                          Chiffre d&apos;Affaires Annuel
                        </label>
                        <select
                          value={formData.revenueBracket}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, revenueBracket: e.target.value }))
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] focus:border-[#1C3D2B] bg-[#FAFAF9]"
                        >
                          <option value="< 15M MAD">&lt; 15M MAD</option>
                          <option value="15M - 60M MAD">15M - 60M MAD</option>
                          <option value="60M - 250M MAD">60M - 250M MAD</option>
                          <option value="> 250M MAD">&gt; 250M MAD</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Description Synthétique de votre Démarche *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Précisez le contexte (ex : revue stratégique triennale, projet d'acquisition, réorganisation industrielle, audit ERP)..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] bg-[#FAFAF9] ${
                          errors.message
                            ? "border-red-400 focus:border-red-500"
                            : "border-stone-300 focus:border-[#1C3D2B]"
                        }`}
                      />
                      {errors.message && (
                        <span className="text-[11px] text-red-600 mt-1 block">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#1C3D2B] hover:bg-[#152e20] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                      >
                        <span>Transmettre la demande confidentielle</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-[11px] text-stone-500 text-center">
                      En soumettant ce formulaire, vous acceptez l&apos;application de notre engagement de confidentialité stricte.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAF9]">
          <div className="text-xs font-semibold text-stone-500">Chargement...</div>
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
