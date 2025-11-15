export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#dfeaff]">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-12 md:py-16">
        {/* HERO – CNCİTEM + uzun açıklama + butonlar */}
        <section className="space-y-8">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-slate-600 uppercase">
            CNCİTEM
          </p>

          <h1 className="text-2xl md:text-3xl font-bold leading-relaxed text-slate-900">
            takım tutuculardan kesici takımlara, bağlama
            <br className="hidden md:block" />
            elemanlarından yedek parçalara kadar ihtiyacın olan
            <br className="hidden md:block" />
            parçaları tek bir yerde toplar. Firmaları karşılaştır,
            <br className="hidden md:block" />
            fiyat iste, üretimini hızlandır.
          </h1>

          <div className="inline-flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-900">
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600 ring-1 ring-sky-200">
              cncitem.com
            </span>
            <span>ile saniyeler içinde</span>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Giriş Yap
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-800 hover:border-sky-400 hover:text-sky-600">
              Cncitem.com’u keşfet
            </button>
          </div>
        </section>

        {/* BLOK 2 – Cncitem.com’da neler yapabilirsiniz + 3 açıklama */}
        <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-start">
          {/* Sol: büyük beyaz kart (başlık) */}
          <div className="rounded-3xl bg-white px-8 py-10 shadow-sm">
            <p className="text-[13px] font-semibold tracking-[0.22em] uppercase text-slate-500">
              cncitem.com’da
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-slate-900">
              neler
              <br />
              yapabilirsiniz?
            </h2>
          </div>

          {/* Sağ: 3 renkli satır (Pazaryeri / Fasonyeri / Haberyeri) */}
          <div className="space-y-6 text-sm text-slate-800">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-900">
                CNCİTEM <span className="text-[#ff2b2b]">PAZARYERİ</span> TIKLA
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-700">
                Use this space to talk about your company&apos;s leadership
                program. What makes this program relevant and effective? Add
                that here.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-900">
                CNCİTEM <span className="text-[#1fbf5b]">FASONYERİ</span> TIKLA
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-700">
                Use this space to talk about your company&apos;s leadership
                program. What makes this program relevant and effective? Add
                that here.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-900">
                CNCİTEM <span className="text-[#1f6fff]">HABERYERİ</span> TIKLA
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-700">
                Use this space to talk about your company&apos;s leadership
                program. What makes this program relevant and effective? Add
                that here.
              </p>
            </div>
          </div>
        </section>

        {/* BLOK 3 – Thanks for joining this training! + “kadın” kartı (placeholder) */}
        <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
          {/* Sol: başlık + paragraf */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
              Thanks for
              <br />
              joining this
              <br />
              training!
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-slate-800">
              Please answer this short survey so we can improve our program to
              support you better.
            </p>
            <div className="pt-4 text-2xl text-slate-900">↓</div>
          </div>

          {/* Sağ: stilize “kadın” kartı – resimsiz, sorun çıkarmayan */}
          <div className="flex justify-center">
            <div className="flex h-[360px] w-[260px] flex-col justify-between rounded-3xl border-2 border-slate-900 bg-white p-5 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-lg text-slate-50">
                    🙂
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      Eğitim Katılımcısı
                    </p>
                    <p className="text-[11px] text-slate-500">
                      (Kadın görsel alanı)
                    </p>
                  </div>
                </div>
                <div className="mt-2 h-32 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300" />
              </div>
              <p className="text-[11px] text-slate-600">
                Buraya istersen ileride gerçek fotoğraf koyarsın. Şimdilik
                Canva tasarımındaki kadın bloğunun yerini tutuyor.
              </p>
            </div>
          </div>
        </section>

        {/* BLOK 4 – Erkek kartı + bülten */}
        <section className="grid gap-10 md:grid-cols-[2fr,3fr] md:items-center">
          {/* Sol: stilize “erkek” kartı */}
          <div className="flex justify-center">
            <div className="flex h-[360px] w-[260px] flex-col justify-between rounded-3xl border-2 border-slate-900 bg-white p-5 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-lg text-slate-50">
                    🧑
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      Atölye Sahibi
                    </p>
                    <p className="text-[11px] text-slate-500">
                      (Erkek görsel alanı)
                    </p>
                  </div>
                </div>
                <div className="mt-2 h-32 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300" />
              </div>
              <p className="text-[11px] text-slate-600">
                Bu alan da Canva tasarımındaki erkek kartını temsil ediyor. İleride
                gerçek fotoğraf ekleyebilirsin.
              </p>
            </div>
          </div>

          {/* Sağ: bülten başlığı + input */}
          <div className="space-y-6">
            <h4 className="text-2xl md:text-3xl font-bold leading-snug text-slate-900">
              Fırsat ve yeniliklerden
              <br />
              haberdar olmak için
              <br />
              bültenimize abone olun!
            </h4>

            <div className="max-w-sm space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-900"
              >
                E-Posta Adresiniz
              </label>
              <input
                id="email"
                type="email"
                placeholder="ornek@cncitem.com"
                className="w-full rounded-full border-2 border-slate-900 bg-white px-4 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-slate-900 focus:ring-0"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
