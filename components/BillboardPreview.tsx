// components/BillboardPreview.tsx
export default function BillboardPreview() {
  return (
    <section className="mt-12 rounded-3xl bg-slate-950 text-slate-50 p-5 md:p-7 shadow-xl shadow-slate-900/70">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold tracking-tight">
          Sokak afişi önizlemesi
        </p>
        <span className="text-[11px] text-slate-400">
          cncitem.com • konsept tasarım
        </span>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-4 md:p-5">
        {/* tuğla duvar efekti */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative grid gap-4 md:grid-cols-[1.6fr,1fr,1fr]">
          {/* büyük ana afiş */}
          <div className="rounded-xl border border-emerald-500/60 bg-black/70 p-4 md:p-5 shadow-lg shadow-emerald-500/30">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300">
              CNCitem / dış mekan afiş
            </p>
            <h2 className="mt-3 text-xl md:text-2xl font-bold tracking-tight text-slate-50">
              CNC dünyası için <br />
              <span className="text-emerald-400">akıllı parça kataloğu</span>
            </h2>
            <p className="mt-3 text-xs md:text-sm text-slate-300 max-w-sm">
              cncitem.com adresinden takım tutucu, kesici takım, bağlama
              elemanı ve yedek parçaları sokak afişinde gördüğün hızla bul.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1.5 text-[11px] font-medium text-emerald-200 ring-1 ring-emerald-400/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              cncitem.com • şimdi ziyaret et
            </div>
          </div>

          {/* küçük afişler */}
          <div className="space-y-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3">
              <p className="text-[11px] font-semibold text-slate-200">
                “Takım tutucu ararken kaybolma.”
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                CNCitem, OSTİM’den İkitelli’ye tüm tedarikçileri tek ekranda
                toplar.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3">
              <p className="text-[11px] font-semibold text-slate-200">
                Operatörler için tasarlandı.
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Telefon, tablet, PC — nerede olursan ol, aynı sade arayüz.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3">
              <p className="text-[11px] font-semibold text-slate-200">
                Fason iş & yedek parça
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Fason freze, torna, kalıp ve bakım ilanlarını tek panelde gör.
              </p>
            </div>
            <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-emerald-500/60 bg-emerald-500/5 p-3 text-center">
              <p className="text-[11px] text-emerald-200">
                Bu sadece konsept. İleride CNCitem için gerçek afişleri buraya
                koyabilirsin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
