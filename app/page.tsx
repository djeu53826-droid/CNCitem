import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* HERO – CNCİTEM metinli kısım */}
      <section className="grid gap-8 md:grid-cols-[3fr,2fr] items-start">
        {/* Sol taraf */}
        <div className="space-y-5">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-slate-500 uppercase">
            CNCİTEM
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            takım tutuculardan kesici takımlara, bağlama elemanlarından yedek
            parçalara kadar ihtiyacın olan parçaları tek bir yerde toplar.
            Firmaları karşılaştır, fiyat iste, üretimini hızlandır.
          </h1>

          <p className="inline-flex items-baseline gap-2 text-sm md:text-base font-semibold text-slate-900">
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600 ring-1 ring-sky-200">
              cncitem.com
            </span>
            <span className="text-slate-700">ile saniyeler içinde</span>
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Giriş Yap
            </button>
            <Link
              href="#neler-yapabilirsiniz"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-800 hover:border-sky-400 hover:text-sky-600"
            >
              Cncitem.com’u keşfet
            </Link>
          </div>
        </div>

        {/* Sağ bilgi bloğu (pdf’teki boş metin alanı gibi) */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-900 mb-2">
            CNCİTEM
          </p>
          <p className="text-xs text-slate-600">
            Use this space to talk about your company&apos;s platform. What makes
            CNCİTEM relevant and effective for CNC operatörleri, atölyeler ve
            tedarikçiler? Buraya, ileride gerçek açıklama metnini
            ekleyebilirsin.
          </p>
        </div>
      </section>

      {/* NELER YAPABİLİRSİNİZ + 3 KART */}
      <section id="neler-yapabilirsiniz" className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Cncitem.com’da
          </p>
          <h2 className="text-2xl font-bold text-slate-900">
            neler yapabilirsiniz?
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {/* Pazaryeri kartı */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-900">
                CNCİTEM PAZARYERİ TIKLA
              </p>
              <p className="text-[11px] text-slate-600">
                Use this space to talk about your company&apos;s leadership
                program. What makes this program relevant and effective? Add
                that here.
              </p>
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-[11px] font-semibold text-slate-800 hover:border-sky-400 hover:text-sky-600">
              CNCİTEM PAZARYERİ TIKLA
            </button>
          </div>

          {/* Fasonyeri kartı */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-900">
                CNCİTEM FASONYERİ TIKLA
              </p>
              <p className="text-[11px] text-slate-600">
                Use this space to talk about your company&apos;s leadership
                program. What makes this program relevant and effective? Add
                that here.
              </p>
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-[11px] font-semibold text-slate-800 hover:border-sky-400 hover:text-sky-600">
              CNCİTEM FASONYERİ TIKLA
            </button>
          </div>

          {/* Haberyeri kartı */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-900">
                CNCİTEM HABERYERİ TIKLA
              </p>
              <p className="text-[11px] text-slate-600">
                Use this space to talk about your company&apos;s leadership
                program. What makes this program relevant and effective? Add
                that here.
              </p>
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-[11px] font-semibold text-slate-800 hover:border-sky-400 hover:text-sky-600">
              CNCİTEM HABERYERİ TIKLA
            </button>
          </div>
        </div>
      </section>

      {/* ALT BLOK: Thanks for joining + E-posta alanı */}
      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-5 md:grid-cols-[3fr,2fr] md:p-7">
        {/* Solda "Thanks for joining this training!" */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            Thanks for joining this training!
          </h2>
          <p className="text-sm text-slate-600">
            Please answer this short survey so we can improve our program to
            support you better. CNCitem üzerinde eğitimler, ürün tanıtımları ve
            atölye içerikleri için bu alanı kullanabilirsin.
          </p>
        </div>

        {/* Sağda E-posta + metin */}
        <div className="space-y-4 rounded-2xl bg-slate-50 p-4 border border-slate-200">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="text-xs font-semibold text-slate-700"
            >
              E-Posta Adresiniz
            </label>
            <input
              id="email"
              type="email"
              placeholder="ornek@cncitem.com"
              className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-900">
              Fırsat ve yeniliklerden haberdar olmak için
              bültenimize abone olun!
            </p>
            <p className="text-xs text-slate-600">
              Yeni özellikler, kampanyalar ve CNC dünyasındaki gelişmeleri
              e-posta adresin üzerinden paylaşacağız.
            </p>
          </div>

          <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Bültene Abone Ol
          </button>
        </div>
      </section>
    </div>
  );
}
