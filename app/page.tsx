import Link from "next/link";

type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
};

type ItemBoxProps = {
  title: string;
  desc: string;
};

function ItemBox({ title, desc }: ItemBoxProps) {
  return (
    <div className="space-y-1 rounded-xl bg-slate-800/80 p-3">
      <p className="text-[11px] font-semibold text-slate-50">{title}</p>
      <p className="text-[11px] text-slate-300">{desc}</p>
    </div>
  );
}

function FeatureCard({ eyebrow, title, description, cta }: FeatureCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="space-y-2">
        <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
          {eyebrow}
        </p>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="text-xs text-slate-600">{description}</p>
      </div>
      <button className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-[11px] font-semibold text-slate-800 transition hover:border-sky-400 hover:text-sky-600">
        {cta}
      </button>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* HERO – CNCİTEM metinli kısım */}
      <section className="grid gap-8 md:grid-cols-[3fr,2fr] items-center">
        {/* Sol taraf */}
        <div className="space-y-5">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-slate-500 uppercase">
            CNCİTEM
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            takım tutuculardan kesici takımlara, bağlama elemanlarından yedek
            parçalara kadar ihtiyacın olan parçaları tek bir yerde toplar.
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-xl">
            Firmaları karşılaştır, fiyat iste, üretimini hızlandır.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <p className="inline-flex items-baseline gap-2 text-sm md:text-base font-semibold text-slate-900">
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600 ring-1 ring-sky-200">
                cncitem.com
              </span>
              <span className="text-slate-700">ile saniyeler içinde</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
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

        {/* Sağ bilgi kutusu */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">
            Cncitem.com’da hızlı başlangıç
          </p>
          <p className="mt-2 text-xs text-slate-600">
            CNC operatörleri, atölye sahipleri ve tedarikçiler için tek panel.
            Parça arama, ilanlar ve tedarikçi keşfi tek ekranda birleşir.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-slate-600">
            <li>• Parça tipine göre arama yap</li>
            <li>• Fason iş ve ilanları listele</li>
            <li>• Tedarikçileri konuma ve uzmanlığa göre filtrele</li>
          </ul>
        </div>
      </section>

      {/* HIZLI PARÇA ARAMA – senin mevcut card yapına benzer demo blok */}
      <section className="rounded-3xl bg-slate-900 text-slate-50 p-5 md:p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold">Hızlı parça arama</p>
          <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] text-sky-300">
            Demo
          </span>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl bg-slate-800/70 px-3 py-3 text-xs text-slate-300">
            Örn: “BT40 takım tutucu”, “ISO30 pens”, “Vidalı kompresör flanşı”
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <ItemBox
              title="Takım tutucular"
              desc="BT30, BT40, BT50, HSK, ISO"
            />
            <ItemBox
              title="Kesici takımlar"
              desc="Frezeler, uçlar, delme takımları"
            />
            <ItemBox
              title="Bağlama elemanları"
              desc="Mengene, tabla, puntalar"
            />
            <ItemBox title="Yedek parçalar" desc="Mil rulmanı, keçe, kaplin" />
          </div>
        </div>
      </section>

      {/* NELER YAPABİLİRSİNİZ + 3 KART */}
      <section id="neler-yapabilirsiniz" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">
            Cncitem.com’da neler yapabilirsiniz?
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            CNCitem; parçaları keşfetmek, fason iş bulmak ve sektörel
            gelişmeleri takip etmek için tek merkezinizdir.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <FeatureCard
            eyebrow="CNCİTEM PAZARYERİ"
            title="Parçaları tek panelden keşfet"
            description="Takım tutucu, kesici takım, bağlama elemanı ve yedek parçaları farklı tedarikçilerden tek ekranda gör. Özellik ve standartlara göre filtrele."
            cta="CNCİTEM PAZARYERİ TIKLA"
          />
          <FeatureCard
            eyebrow="CNCİTEM FASONYERİ"
            title="Fason iş ilanlarını yönet"
            description="Freze, torna, kalıp veya özel işleme ihtiyaçlarını ilan olarak paylaş. Uygun atölye ve üreticilerle hızlıca eşleş."
            cta="CNCİTEM FASONYERİ TIKLA"
          />
          <FeatureCard
            eyebrow="CNCİTEM HABERYERİ"
            title="CNC dünyasından haberdar ol"
            description="Yeni tezgahlar, kesici takım teknolojileri, kampanyalar ve sektörel gelişmeleri tek akışta takip et."
            cta="CNCİTEM HABERYERİ TIKLA"
          />
        </div>
      </section>

      {/* GERİ BİLDİRİM / EĞİTİM BLOĞU */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
        <div className="grid gap-5 md:grid-cols-[3fr,2fr] items-center">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">
              CNCitem’e katıldığınız için teşekkürler!
            </h2>
            <p className="text-sm text-slate-600">
              Deneyiminizi geliştirmek için geri bildiriminiz bizim için çok
              değerli. Kısa bir değerlendirme ile, CNCitem&apos;in atölyenize ve
              ekibinize daha iyi hizmet etmesini sağlayabilirsiniz.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-900">
              Kısa geri bildirim formu
            </p>
            <p className="text-xs text-slate-600">
              “Hangi özellikleri daha çok kullandınız?”, “Nelerin eklenmesini
              istersiniz?” gibi sorulardan oluşan kısa bir form düşünün. Buraya
              ileride gerçek bir anket linki ekleyebilirsin.
            </p>
            <button className="mt-1 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800">
              Geri bildirim formuna git (yakında)
            </button>
          </div>
        </div>
      </section>

      {/* BÜLTEN / FORM */}
      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:grid-cols-[2fr,3fr] md:p-7">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">
            Fırsat ve yeniliklerden haberdar olmak için
            bültenimize abone olun!
          </h2>
          <p className="text-sm text-slate-600">
            Yeni özellikler, kampanyalar ve CNC dünyasındaki gelişmeleri
            kaçırmamak için e-posta adresinizi bırakın.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-3 md:flex-row md:items-end"
        >
          <div className="flex-1">
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-medium text-slate-600"
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
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Bültene Abone Ol
          </button>
        </form>
      </section>
    </div>
  );
}
