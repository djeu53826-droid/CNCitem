import Link from "next/link";
import BillboardPreview from "../components/BillboardPreview";

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

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-[3fr,2fr] items-center">
        {/* Sol metin alanı */}
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600 ring-1 ring-sky-200">
            CNC dünyası için akıllı parça kataloğu
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            CNC parçalarını{" "}
            <span className="text-sky-500">saniyeler içinde</span> bulun.
          </h1>

          <p className="max-w-xl text-sm md:text-base text-slate-600">
            CNCitem; takım tutuculardan kesici takımlara, bağlama
            elemanlarından yedek parçalara kadar ihtiyacın olan parçaları tek
            bir yerde toplar. Firmaları karşılaştır, fiyat iste, üretimini
            hızlandır.
          </p>

          {/* Butonlar */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/firmalar"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sky-500/40 shadow hover:bg-sky-400"
            >
              Kataloğu İncele
            </Link>
            <Link
              href="/fiyatlandirma"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 hover:border-sky-400 hover:text-sky-600"
            >
              Fiyatlandırmayı Gör
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Gerçek firmalar, güncel ürünler
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              Operatör odaklı arayüz
            </div>
          </div>
        </div>

        {/* Sağ panel */}
        <div className="rounded-3xl border border-slate-200 bg-slate-900 text-slate-50 p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold">Hızlı parça arama</p>
            <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] text-sky-300">
              Demo
            </span>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl bg-slate-800/70 px-3 py-3 text-xs text-slate-300">
              Örn: “BT40 takım tutucu”, “ISO30 pens”, “Vidalı kompresör
              flanşı”
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
              <ItemBox
                title="Yedek parçalar"
                desc="Mil rulmanı, keçe, kaplin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">
            Öne çıkan kategoriler
          </h2>
          <Link
            href="/firmalar"
            className="text-xs text-sky-600 hover:text-sky-500"
          >
            Tüm firmaları gör →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Takım tutucular", desc: "BT, HSK, ISO, mandren sistemleri." },
            { title: "Kesici takımlar", desc: "Frezeler, karbür uçlar, delme takımları." },
            { title: "Bağlama elemanları", desc: "Mengeneler, tabla takımları, T kanalı setleri." },
            { title: "Makine yedek parçaları", desc: "Rulman, sensör, keçe ve daha fazlası." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-900">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BILLBOARD */}
      <BillboardPreview />
    </div>
  );
}
