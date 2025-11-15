export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#dfeaff]">
      <div className="mx-auto max-w-5xl px-4 py-12 space-y-24">

        {/* HERO */}
        <section className="space-y-8">
          <p className="text-[11px] tracking-[0.25em] font-semibold text-slate-600 uppercase">
            CNCİTEM
          </p>

          <h1 className="text-3xl md:text-4xl font-bold leading-relaxed text-slate-900">
            takım tutuculardan kesici takımlara, bağlama
            <br />
            elemanlarından yedek parçalara kadar ihtiyacın olan
            <br />
            parçaları tek bir yerde toplar. Firmaları karşılaştır,
            <br />
            fiyat iste, üretimini hızlandır.
          </h1>

          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs text-sky-600 ring-1 ring-sky-200">
              cncitem.com
            </span>
            <span>ile saniyeler içinde</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2 rounded-full bg-slate-900 text-white font-semibold">
              Giriş Yap
            </button>
            <button className="px-5 py-2 rounded-full border border-slate-300 bg-white text-slate-800 font-semibold">
              Cncitem.com’u keşfet
            </button>
          </div>
        </section>

        {/* KÜÇÜK BİLGİ KUTUSU */}
        <section>
          <div className="bg-white rounded-3xl px-6 py-6 shadow-sm text-sm text-slate-700 leading-relaxed">
            <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-slate-600">
              CNCİTEM
            </p>
            <p className="mt-2">
              Use this space to talk about your company’s platform.
              What makes CNCITEM relevant and effective for CNC
              operatörleri, atölyeler ve tedarikçiler? Buraya,
              ileride gerçek açıklama metnini ekleyebilirsin.
            </p>
          </div>
        </section>

        {/* CNCİTEM.COM’DA NELER YAPABİLİRSİNİZ */}
        <section className="space-y-4">
          <p className="text-[11px] tracking-[0.25em] font-semibold uppercase text-slate-600">
            CNCİTEM.COM’DA
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
            neler yapabilirsiniz?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 pt-4">

            {/* PAZARYERİ */}
            <div className="space-y-2">
              <p className="text-xs uppercase font-semibold text-slate-900 tracking-[0.18em]">
                CNCİTEM <span className="text-red-500">PAZARYERİ</span> TIKLA
              </p>
              <p className="text-[13px] text-slate-700 leading-relaxed">
                Use this space to talk about your company's leadership program.
              </p>
            </div>

            {/* FASONYERİ */}
            <div className="space-y-2">
              <p className="text-xs uppercase font-semibold text-slate-900 tracking-[0.18em]">
                CNCİTEM <span className="text-green-500">FASONYERİ</span> TIKLA
              </p>
              <p className="text-[13px] text-slate-700 leading-relaxed">
                Use this space to talk about your company's leadership program.
              </p>
            </div>

            {/* HABERYERİ */}
            <div className="space-y-2">
              <p className="text-xs uppercase font-semibold text-slate-900 tracking-[0.18em]">
                CNCİTEM <span className="text-blue-500">HABERYERİ</span> TIKLA
              </p>
              <p className="text-[13px] text-slate-700 leading-relaxed">
                Use this space to talk about your company's leadership program.
              </p>
            </div>
          </div>
        </section>

        {/* TRAINING + WOMAN */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Thanks for joining this training!
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed max-w-md">
              Please answer this short survey so we can improve our program.
            </p>
            <div className="text-3xl text-slate-900">↓</div>
          </div>

          {/* WOMAN CARD */}
          <div className="flex justify-center">
            <div className="rounded-3xl border-2 border-slate-900 bg-white h-[360px] w-[260px] p-5 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 flex items-center justify-center bg-slate-900 text-white rounded-full text-lg">
                    🙂
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Eğitim Katılımcısı</p>
                    <p className="text-[11px] text-slate-500">(Kadın görsel alanı)</p>
                  </div>
                </div>
                <div className="h-32 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300"></div>
              </div>
              <p className="text-[11px] text-slate-600">
                İstersek buraya gerçek fotoğraf ekleyebiliriz.
              </p>
            </div>
          </div>
        </section>
{/* WOMAN BLOĞU – training başlığının devamı */}
<section className="grid md:grid-cols-2 gap-10 items-center py-16">
  {/* Sol: başlık + açıklama + ok */}
  <div className="space-y-4">
    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
      Thanks for joining this training!
    </h3>
    <p className="text-sm text-slate-700 leading-relaxed max-w-md">
      Please answer this short survey so we can improve our program to support you better.
    </p>
    <div className="text-3xl text-slate-900">↓</div>
  </div>

  {/* Sağ: kadın kartı (resimsiz) */}
  <div className="flex justify-center">
    <div className="h-[360px] w-[260px] rounded-3xl border-2 border-slate-900 bg-white p-5 shadow-sm flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-lg">
            🙂
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900">
              Eğitim Katılımcısı
            </p>
            <p className="text-[11px] text-slate-500">(kadın görsel alanı)</p>
          </div>
        </div>
        <div className="mt-2 h-32 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300" />
      </div>
      <p className="text-[11px] text-slate-600">
        Buraya istersen sonra gerçek fotoğraf koyarsın. Şimdilik Canva’daki kadın kartının yerini tutuyor.
      </p>
    </div>
  </div>
</section>

{/* MAN + BÜLTEN BLOĞU */}
<section className="grid md:grid-cols-2 gap-10 items-center py-16">
  {/* Sol: erkek kartı (resimsiz) */}
  <div className="flex justify-center">
    <div className="h-[360px] w-[260px] rounded-3xl border-2 border-slate-900 bg-white p-5 shadow-sm flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-lg">
            🧑
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900">
              Atölye Sahibi
            </p>
            <p className="text-[11px] text-slate-500">(erkek görsel alanı)</p>
          </div>
        </div>
        <div className="mt-2 h-32 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300" />
      </div>
      <p className="text-[11px] text-slate-600">
        Bu alan da Canva’daki erkek kartını temsil ediyor. İleride gerçek fotoğrafla değiştirebilirsin.
      </p>
    </div>
  </div>

  {/* Sağ: bülten başlığı + mail input */}
  <div className="space-y-4">
    <h4 className="text-2xl md:text-3xl font-bold leading-snug text-slate-900">
      Fırsat ve yeniliklerden
      <br />
      haberdar olmak için
      <br />
      bültenimize abone olun!
    </h4>

    <div className="space-y-2 max-w-sm">
      <label className="text-sm font-medium text-slate-900">
        E-Posta Adresiniz
      </label>
      <input
        type="email"
        placeholder="ornek@cncitem.com"
        className="w-full rounded-full border-2 border-slate-900 bg-white px-4 py-2 text-sm placeholder:text-slate-500 outline-none"
      />
    </div>
  </div>
</section>

        {/* MAN + MAIL FORM */}
        <section className="grid md:grid-cols-2 gap-10 items-center">

          {/* MAN CARD */}
          <div className="flex justify-center">
            <div className="rounded-3xl border-2 border-slate-900 bg-white h-[360px] w-[260px] p-5 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 flex items-center justify-center bg-slate-900 text-white rounded-full text-lg">🧑</div>
                  <div>
                    <p className="text-xs font-semibold">Atölye Sahibi</p>
                    <p className="text-[11px] text-slate-500">(Erkek görsel alanı)</p>
                  </div>
                </div>
                <div className="h-32 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300"></div>
              </div>
              <p className="text-[11px] text-slate-600">
                İstersek buraya gerçek fotoğraf ekleyebiliriz.
              </p>
            </div>
          </div>

          {/* MAIL FORM */}
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl font-bold leading-snug text-slate-900">
              Fırsat ve yeniliklerden
              <br />
              haberdar olmak için
              <br />
              bültenimize abone olun!
            </h4>

            <div className="space-y-2 max-w-sm">
              <label className="text-sm font-medium text-slate-900">
                E-Posta Adresiniz
              </label>
              <input
                className="w-full rounded-full border-2 border-slate-900 bg-white px-4 py-2 text-sm placeholder:text-slate-500"
                placeholder="ornek@cncitem.com"
              />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
