// app/ilanlar/page.tsx

import React from "react";

type Job = {
  id: number;
  type: "operator" | "fason";
  title: string;
  company: string;
  location: string;
  shift: string;
  tags: string[];
};

const jobs: Job[] = [
  {
    id: 1,
    type: "operator",
    title: "CNC Torna Operatörü",
    company: "Beka Metal",
    location: "İstanbul / İkitelli",
    shift: "Tam Zamanlı",
    tags: ["Fanuc", "Gece Vardiyası", "En az 3 yıl"],
  },
  {
    id: 2,
    type: "fason",
    title: "Fason Freze İmalatı",
    company: "Axis Kalıp",
    location: "Bursa / Nilüfer",
    shift: "Proje Bazlı",
    tags: ["Kalıp Çeliği", "3 Eksen", "Küçük Seri"],
  },
  {
    id: 3,
    type: "fason",
    title: "Alüminyum Talaşlı İmalat",
    company: "Protech Mühendislik",
    location: "Ankara / Sincan",
    shift: "Proje Bazlı",
    tags: ["Alüminyum", "ISO 9001", "Hızlı Termin"],
  },
  {
    id: 4,
    type: "operator",
    title: "CNC Dik İşlem Operatörü",
    company: "Mega Otomotiv",
    location: "Kocaeli / Gebze",
    shift: "Vardiyalı",
    tags: ["Heidenhain", "Otomotiv", "Seri İmalat"],
  },
];

export default function IlanlarPage() {
  return (
    <div className="space-y-8">
      {/* Üst başlık + arama */}
      <section className="space-y-4">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h1 className="text-2xl font-semibold md:text-3xl">
              Güncel ilanlar
            </h1>
            <p className="text-sm text-slate-400">
              CNC operatörü ve fason iş ilanlarını filtreleyip detaylarını
              inceleyebilirsin.
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Pozisyon, firma veya şehir ara..."
              className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none ring-sky-500/40 focus:border-sky-500 focus:ring-2 md:w-72"
            />
            <button className="hidden rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 md:block">
              Ara
            </button>
          </div>
        </div>

        {/* Filtre butonları (dummy) */}
        <div className="flex flex-wrap gap-2 text-xs">
          <button className="rounded-full bg-slate-900 px-3 py-1 font-medium text-slate-100 ring-1 ring-sky-500/60">
            Tümü
          </button>
          <button className="rounded-full bg-slate-900/60 px-3 py-1 text-slate-300 ring-1 ring-slate-700 hover:ring-sky-500/60">
            CNC Operatörü
          </button>
          <button className="rounded-full bg-slate-900/60 px-3 py-1 text-slate-300 ring-1 ring-slate-700 hover:ring-sky-500/60">
            Fason İş
          </button>
          <button className="rounded-full bg-slate-900/60 px-3 py-1 text-slate-300 ring-1 ring-slate-700 hover:ring-sky-500/60">
            İstanbul
          </button>
          <button className="rounded-full bg-slate-900/60 px-3 py-1 text-slate-300 ring-1 ring-slate-700 hover:ring-sky-500/60">
            Ankara
          </button>
        </div>
      </section>

      {/* İlan listesi */}
      <section className="space-y-3">
        {jobs.map((job) => (
          <article
            key={job.id}
            className="flex flex-col justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-1 hover:border-sky-500/70 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-500/20 md:flex-row md:items-center"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                    job.type === "operator"
                      ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40"
                      : "bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/40"
                  }`}
                >
                  {job.type === "operator" ? "CNC Operatörü" : "Fason İş"}
                </span>
                <span className="text-[11px] text-slate-400">{job.shift}</span>
              </div>
              <h2 className="text-sm font-semibold text-slate-50 md:text-base">
                {job.title}
              </h2>
              <p className="text-xs text-slate-300">
                {job.company} · {job.location}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900 px-2 py-0.5 text-[11px] text-slate-300 ring-1 ring-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 md:flex-col md:items-end">
              <button className="rounded-xl border border-sky-500 px-3 py-1.5 text-xs font-semibold text-sky-300 transition hover:bg-sky-500/10">
                Detayı Gör
              </button>
              <button className="rounded-xl bg-sky-500 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-sky-400">
                Hızlı Başvur
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
