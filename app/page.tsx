"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-[3fr,2fr] items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400 ring-1 ring-sky-500/30">
            CNC dünyası için akıllı parça kataloğu
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            CNC parçalarını{" "}
            <span className="text-sky-400">saniyeler içinde</span> bulun.
          </h1>

          <p className="max-w-xl text-sm md:text-base text-slate-300">
            CNCitem; takım tutuculardan kesici takımlara, bağlama elemanlarından
            yedek parçalara kadar ihtiyacın olan parçaları tek bir yerde
            toplar. Firmaları karşılaştır, fiyat iste, üretimini hızlandır.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/firmalar"
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              Kataloğu İncele
            </Link>
            <Link
              href="/fiyatlandirma"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-500/70 hover:text-sky-200"
            >
              Fiyatlandırmayı Gör
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Gerçek firmalar, güncel ürünler
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Operatör odaklı arayüz
            </div>
          </div>
        </div>

        {/* Sağ kutu */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-sky-950/60">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-100">
              Hızlı parça arama
            </p>
            <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-sky-300">
              Demo
            </span>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl bg-slate-950/60 px-3 py-2.5 text-xs text-slate-400 ring-1 ring-slate-800">
              Örn: “BT40 takım tutucu”, “ISO30 pens”, “Vidalı kompresör bağlantı
              flanşı”
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1 rounded-xl bg-slate-950/70 p-3 ring-1 ring-slate-800">
                <p className="text-[11px] font-semibold text-slate-200">
                  Takım tutucular
                </p>
                <p className="text-[11px] text-slate-400">
                  BT30, BT40, BT50, HSK, ISO serileri
                </p>
              </div>
              <div className="space-y-1 rounded-xl bg-slate-950/70 p-3 ring-1 ring-slate-800">
                <p className="text-[11px] font-semibold text-slate-200">
                  Kesici takımlar
                </p>
                <p className="text-[11px] text-slate-400">
                  Frezeler, uçlar, delme takımları
                </p>
              </div>
              <div className="space-y-1 rounded-xl bg-slate-950/70 p-3 ring-1 ring-slate-800">
                <p className="text-[11px] font-semibold text-slate-200">
                  Bağlama elemanları
                </p>
                <p className="text-[11px] text-slate-400">
                  Mengene, tabla, puntalar, cıvata setleri
                </p>
              </div>
              <div className="space-y-1 rounded-xl bg-slate-950/70 p-3 ring-1 ring-slate-800">
                <p className="text-[11px] font-semibold text-slate-200">
                  Yedek parçalar
                </p>
                <p className="text-[11px] text-slate-400">
                  Mil rulmanı, keçe, sensör, kaplin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-slate-100 md:text-xl">
            Neden CNCitem?
          </h2>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Operatörler, atölye sahipleri ve tedarikçiler için tasarlandı.
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-sm font-semibold text-slate-100 mb-1.5">
              Tek ekranda tüm parçalar
            </p>
            <p className="text-xs text-slate-400">
              Farklı firmaların ürünlerini tek katalogda gör, tedarikçileri
              karşılaştır, doğru parçaya hızlıca ulaş.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-sm font-semibold text-slate-100 mb-1.5">
              Net ve temiz bilgiler
            </p>
            <p className="text-xs text-slate-400">
              Bağlantı tipi, ölçüler, standart, stok durumu gibi kritik
              bilgileri karmaşa olmadan gör.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-sm font-semibold text-slate-100 mb-1.5">
              Operatör dostu arayüz
            </p>
            <p className="text-xs text-slate-400">
              Telefon, tablet veya bilgisayardan; atölyede, ofiste veya evde
              rahatça kullan.
            </p>
          </div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-slate-100 md:text-xl">
            Öne çıkan kategoriler
          </h2>
          <Link
            href="/firmalar"
            className="text-xs font-medium text-sky-400 hover:text-sky-300"
          >
            Tüm firmaları gör →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Takım tutucular",
              desc: "BT, HSK, ISO, mandren ve pens sistemleri.",
            },
            {
              title: "Kesici takımlar",
              desc: "Frezeler, karbür uçlar, delik delme takımları.",
            },
            {
              title: "Bağlama elemanları",
              desc: "Tabla ekipmanları, mengeneler, T kanalı setleri.",
            },
            {
              title: "Makine yedek parçaları",
              desc: "Sensör, mil rulmanı, keçe ve daha fazlası.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
            >
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-slate-400">{item.desc}</p>
              </div>
              <div className="mt-3 text-[11px] text-sky-300">
                Detayları görmek için firmalara göz at →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NASIL ÇALIŞIR + HIZLI LİNKLER */}
      <section className="grid gap-8 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-100 md:text-xl">
            CNCitem nasıl çalışır?
          </h2>
          <ol className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[11px] font-bold text-white">
                1
              </span>
              <span>
                İhtiyacın olan parçayı belirle: takım tutucu, kesici takım,
                bağlama elemanı veya yedek parça.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[11px] font-bold text-white">
                2
              </span>
              <span>
                CNCitem üzerindeki firmaları ve ürünleri incele, teknik
                detayları karşılaştır.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[11px] font-bold text-white">
                3
              </span>
              <span>
                Uygun gördüğün tedarikçiden fiyat iste veya sipariş sürecini
                başlat.
              </span>
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-100 md:text-xl">
            Sık kullanılan sayfalar
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/firmalar"
              className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900"
            >
              <p className="text-sm font-semibold text-slate-100">
                Firma kataloğu
              </p>
              <p className="mt-1 text-xs text-slate-400">
                CNC tedarikçilerini listele, iletişim bilgilerini gör.
              </p>
              <span className="mt-2 inline-block text-[11px] text-sky-300 group-hover:text-sky-200">
                Firmalara git →
              </span>
            </Link>

            <Link
              href="/operatorler"
              className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900"
            >
              <p className="text-sm font-semibold text-slate-100">
                Operatör paneli
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Operatörler için notlar, ayarlar ve sık kullanılan parçalar.
              </p>
              <span className="mt-2 inline-block text-[11px] text-sky-300 group-hover:text-sky-200">
                Operatörlere git →
              </span>
            </Link>

            <Link
              href="/fiyatlandirma"
              className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900 sm:col-span-2"
            >
              <p className="text-sm font-semibold text-slate-100">
                Fiyatlandırma ve planlar
              </p>
              <p className="mt-1 text-xs text-slate-400">
                CNCitem&apos;in senin için nasıl konumlanacağını; ücretsiz
                kullanım ve ileri seviye çözümleri incele.
              </p>
              <span className="mt-2 inline-block text-[11px] text-sky-300 group-hover:text-sky-200">
                Fiyatlandırmayı aç →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
