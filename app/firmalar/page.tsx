// app/firmalar/page.tsx

import React from "react";

type Company = {
  name: string;
  city: string;
  focus: string;
  badges: string[];
};

const companies: Company[] = [
  {
    name: "Beka Metal",
    city: "İstanbul",
    focus: "Otomotiv parçaları, seri talaşlı imalat",
    badges: ["ISO 9001", "Otomotiv", "50+ çalışan"],
  },
  {
    name: "Axis Kalıp",
    city: "Bursa",
    focus: "Kalıp imalatı, kalıp bakımı ve revizyonu",
    badges: ["Kalıp Uzmanı", "3-5 eksen", "Ar-Ge"],
  },
  {
    name: "Protech Mühendislik",
    city: "Ankara",
    focus: "Prototip parça, küçük seri hassas imalat",
    badges: ["Prototip", "Savunma", "CMM ölçüm"],
  },
];

export default function FirmalarPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold md:text-3xl">Firmalar</h1>
        <p className="text-sm text-slate-400">
          Platformdaki örnek firmalar. Gerçekte buraya API’den gelen firma
          listesini koyacaksın.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {companies.map((c) => (
          <article
            key={c.name}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-1 hover:border-sky-500/60 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-500/15"
          >
            <h2 className="text-sm font-semibold text-slate-50 md:text-base">
              {c.name}
            </h2>
            <p className="text-xs text-sky-300">{c.city}</p>
            <p className="mt-2 text-xs text-slate-300">{c.focus}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {c.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-slate-900 px-2 py-0.5 text-[11px] text-slate-300 ring-1 ring-slate-700"
                >
                  {b}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
