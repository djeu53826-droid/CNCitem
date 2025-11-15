// app/fiyatlandirma/page.tsx

import React from "react";

type Plan = {
  name: string;
  price: string;
  badge?: string;
  desc: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Başlangıç",
    price: "Ücretsiz",
    desc: "Küçük işletmeler ve denemek isteyenler için.",
    features: [
      "Aylık 3 ilan yayında",
      "Temel firma profili",
      "Sınırlı operatör görüntüleme",
    ],
  },
  {
    name: "Pro",
    price: "₺499/ay",
    badge: "En Popüler",
    desc: "Aktif fason iş ve operatör arayan KOBİ'ler için.",
    features: [
      "Sınırsız ilan",
      "Öne çıkarılmış firma profili",
      "Gelişmiş filtreleme ve raporlama",
      "Öncelikli destek",
    ],
  },
  {
    name: "Kurumsal",
    price: "Teklif Al",
    desc: "Birden fazla tesis ve yüksek hacim için.",
    features: [
      "Çoklu kullanıcı & rol yönetimi",
      "Özel entegrasyonlar (ERP/MES)",
      "Özel müşteri temsilcisi",
    ],
  },
];

export default function FiyatlandirmaPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold md:text-3xl">Fiyatlandırma</h1>
        <p className="text-sm text-slate-400">
          İş hacmine ve ihtiyaçlarına göre sana uygun planı seç. İstediğin
          zaman yükselt veya düşür.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <article
            key={p.name}
            className={`flex flex-col rounded-2xl border bg-slate-900/70 p-5 text-sm transition hover:-translate-y-1 hover:shadow-lg ${
              p.badge
                ? "border-sky-500/70 shadow-sky-500/25"
                : "border-slate-800 hover:border-sky-500/60 hover:shadow-sky-500/20"
            }`}
          >
            {p.badge && (
              <span className="mb-2 inline-flex w-max rounded-full bg-sky-500/15 px-2 py-0.5 text-[11px] font-semibold text-sky-300 ring-1 ring-sky-500/40">
                {p.badge}
              </span>
            )}
            <h2 className="text-base font-semibold text-slate-50">
              {p.name}
            </h2>
            <p className="mt-1 text-lg font-semibold text-sky-300">
              {p.price}
            </p>
            <p className="mt-1 text-xs text-slate-300">{p.desc}</p>
            <ul className="mt-3 flex-1 space-y-1 text-xs text-slate-300">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button
              className={`mt-4 w-full rounded-xl px-3 py-2 text-xs font-semibold transition ${
                p.badge
                  ? "bg-sky-500 text-slate-950 hover:bg-sky-400"
                  : "border border-sky-500 text-sky-300 hover:bg-sky-500/10"
              }`}
            >
              Planı Seç
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
