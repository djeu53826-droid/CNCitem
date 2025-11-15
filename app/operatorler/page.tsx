// app/operatorler/page.tsx

import React from "react";

type Operator = {
  name: string;
  city: string;
  exp: string;
  machines: string[];
};

const operators: Operator[] = [
  {
    name: "Ahmet K.",
    city: "İstanbul / Esenyurt",
    exp: "6 yıl CNC torna operatörü",
    machines: ["Fanuc", "Mazak", "Çoklu taret"],
  },
  {
    name: "Mehmet D.",
    city: "Bursa / Nilüfer",
    exp: "4 yıl dik işlem & kalıp",
    machines: ["Heidenhain", "3 eksen", "Kalıp çeliği"],
  },
  {
    name: "Serkan T.",
    city: "Ankara / Sincan",
    exp: "8 yıl talaşlı imalat (savunma)",
    machines: ["Siemens", "CMM bilgisi", "Ölçüm cihazları"],
  },
];

export default function OperatorlerPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold md:text-3xl">Operatörler</h1>
        <p className="text-sm text-slate-400">
          Örnek operatör profilleri. Gerçekte buraya adayların özgeçmişlerini
          kart olarak getireceksin.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {operators.map((op) => (
          <article
            key={op.name}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-1 hover:border-sky-500/60 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-500/15"
          >
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-50">
                {op.name}
              </h2>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] text-emerald-300 ring-1 ring-emerald-500/40">
                Müsait
              </span>
            </div>
            <p className="text-xs text-sky-300">{op.city}</p>
            <p className="mt-2 text-xs text-slate-300">{op.exp}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {op.machines.map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-slate-900 px-2 py-0.5 text-[11px] text-slate-300 ring-1 ring-slate-700"
                >
                  {m}
                </span>
              ))}
            </div>
            <button className="mt-4 w-full rounded-xl border border-sky-500 px-3 py-1.5 text-[11px] font-semibold text-sky-300 transition hover:bg-sky-500/10">
              Detaylı Profil
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
