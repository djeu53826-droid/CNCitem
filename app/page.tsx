// app/page.tsx
import React from "react";

const stats = [
  { label: "Aktif ilan", value: "3.680+" },
  { label: "Kayıtlı firma", value: "19.900+" },
  { label: "Tamamlanan iş", value: "1.250+" },
];

const flows = [
  {
    icon: "📤",
    title: "Fason iş ver",
    desc: "Boş kapasiten için doğru atölyeleri; şehir, malzeme ve tezgah tipine göre filtreleyerek bul, teklif iste, süreci panelden takip et.",
  },
  {
    icon: "🧰",
    title: "Fason iş al",
    desc: "Tezgahına uygun ilanları listele, fiyat ver, onay ve teslim adımlarını tek akışta yönet; telefon trafiği azalırken iş trafiğin artsın.",
  },
  {
    icon: "👤",
    title: "CNC operatör süreçleri",
    desc: "Operatör ilanlarını yayınla, başvuruları kıyasla, mülakat ve başlangıç süreçlerini Excel yerine panelden yönet.",
  },
];

const steps = [
  {
    step: "1",
    title: "Profilini oluştur",
    desc: "Firma bilgilerini, tezgahlarını ve kapasite durumunu birkaç dakikada ekle. İstersen sadece e-posta ile başla.",
  },
  {
    step: "2",
    title: "İlan aç veya iş ara",
    desc: "Fason iş ilanı yayınla ya da mevcut ilanları filtreleyerek tara. Uygun olanlar için tek tıkla teklif ver.",
  },
  {
    step: "3",
    title: "Teklif, onay ve teslim",
    desc: "Teklif, revizyon, onay ve teslim adımlarını tek ekran üzerinden yönet; her şey kayıtlı kalsın.",
  },
  {
    step: "4",
    title: "Raporla ve büyüt",
    desc: "Hangi şehirde, hangi tip işlerde daha çok hareket olduğunu gör; kapasiteni ve fiyat politikanı buna göre ayarla.",
  },
];

const highlights = [
  {
    title: "Ostim’den Gebze’ye aynı ekranda",
    desc: "Sanayi bölgesi, şehir ve tezgah tipine göre filtreleme ile doğru atölye ya da tedarikçiyi bulmak saniyeler sürer.",
  },
  {
    title: "Telefon ve WhatsApp trafiği azalır",
    desc: "Teklifleri, evrakları ve teslim tarihlerini tek panelde tuttuğun için kaybolan mesaj ve aramalar ortadan kalkar.",
  },
  {
    title: "Her ölçek için sade arayüz",
    desc: "2 tezgahlı atölyeden çok lokasyonlu üretim tesisine kadar farklı ölçekler için sade ama güçlü bir arayüz.",
  },
];

const faqs = [
  {
    q: "Kullanmak için ekstra yazılım kurmam gerekiyor mu?",
    a: "Hayır. CNCitem tamamen tarayıcı üzerinden çalışır; ek bir program veya donanım gerekmez.",
  },
  {
    q: "Ücretsiz planda ne kadar kullanabilirim?",
    a: "Küçük atölyeler için tasarlanan ücretsiz planla temel ilan ve başvuru yönetimini sınırsız deneyebilirsin.",
  },
  {
    q: "Verilerimiz nerede tutuluyor?",
    a: "Teklif ve başvuru verilerin güvenli sunucularda şifreli olarak saklanır; üçüncü kişilerle paylaşılmaz.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-10 pt-4">
      {/* HERO */}
      <section className="relative py-10 lg:py-20">
        {/* Glow BG */}
        <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 flex justify-center">
          <div className="h-72 w-[900px] rounded-full bg-sky-400/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/60 px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Talaşlı İmalat · Fason İş & CNC Operatör Platformu
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Fason iş, tezgah ve{" "}
              <span className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 bg-clip-text text-transparent">
                CNC operatörünü
              </span>{" "}
              tek ekranda buluştur.
            </h1>

            <p className="max-w-xl text-sm text-slate-600 md:text-base">
              Telefon, WhatsApp ve e-posta arasında kaybolmak yerine; ilanlarını,
              tekliflerini ve operatör başvurularını tek panelden yönet. Küçük
              atölyeden orta ölçekli fabrikaya kadar üretim ekipleri için
              tasarlandı.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-300/60 transition hover:bg-sky-600">
                Ücretsiz kayıt ol
              </button>
              <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-700">
                Canlı demo iste
              </button>
            </div>

            <p className="text-[11px] text-slate-500">
              Kurulum yok · Kredi kartı gerekmez · İstediğin zaman çık
            </p>

            {/* Stats */}
            <div className="mt-6 grid max-w-lg grid-cols-3 gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-lg font-semibold text-sky-600">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Dashboard mockup */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            {/* glow effects */}
            <div className="absolute -top-6 -right-4 h-24 w-24 rounded-full bg-sky-300/40 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-cyan-300/40 blur-2xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-xl backdrop-blur">
              {/* HEADER */}
              <div className="flex items-center justify-between pb-4">
                <div>
                  <p className="text-[10px] font-semibold tracking-wide text-slate-400">
                    CANLI TAKİP
                  </p>
                  <p className="text-xs font-semibold text-slate-900">
                    Bugünkü iş trafiği
                  </p>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                  4 yeni teklif
                </span>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-3 gap-3 pb-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center"
                  >
                    <p className="text-[10px] text-slate-500">{s.label}</p>
                    <p className="mt-1 text-sm font-semibold text-sky-600">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Activity */}
              <div className="space-y-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs">
                <p className="text-[10px] font-semibold tracking-wide text-slate-400">
                  Son hareketler
                </p>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-700">
                      Axis Kalıp teklif gönderdi
                    </span>
                    <span className="text-slate-400">2 dk</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-700">
                      Beka Metal ilan güncelledi
                    </span>
                    <span className="text-slate-400">14 dk</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-700">
                      Protech prototip iş aldı
                    </span>
                    <span className="text-slate-400">37 dk</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between rounded-xl border border-dashed border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-500">
                <span>Ücretsiz hesabını aç, kendi panelini gör.</span>
                <button className="rounded-full bg-sky-500 px-3 py-1 text-[11px] font-semibold text-white hover:bg-sky-600">
                  Başla
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AKIŞLAR */}
      <section className="mx-auto max-w-6xl space-y-6 px-4">
        <div className="space-y-2 text-center">
          <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
            Tek panel, üç net akış
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {flows.map((flow) => (
            <article
              key={flow.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="text-2xl">{flow.icon}</div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {flow.title}
                </h3>
                <p className="text-xs text-slate-600">{flow.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ADIM ADIM */}
      <section className="mx-auto max-w-6xl space-y-6 px-4">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
              CNCitem sürecinize nasıl oturuyor?
            </h2>
            <p className="text-sm text-slate-500">
              Mevcut işleyişi bozmadan birkaç gün içinde denemeye
              başlayabileceğiniz basit bir akış.
            </p>
          </div>
          <span className="text-[11px] text-slate-400">
            Ortalama kuruluma başlama süresi: <b>15 dakika</b>
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white">
                  {s.step}
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {s.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEDEN CNCITEM */}
      <section className="mx-auto max-w-6xl space-y-6 px-4">
        <div className="space-y-2 text-center">
          <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
            Neden CNCitem?
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.title}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {h.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600">{h.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ + SON CTA */}
      <section className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:p-7">
        <div className="flex-1 space-y-3">
          <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
            “Biz zaten WhatsApp & Excel ile gidiyoruz” diyorsan…
          </h2>
          <p className="text-sm text-slate-600">
            CNCitem tam olarak bu dağınıklığı toplamak için var. İstersen
            sadece ilanlarını ve operatör başvurularını buradan yöneterek
            başla; işe yaramazsa hesabı kapatırsın.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <button className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600">
              15 dakikada hesap oluştur
            </button>
            <button className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-sky-500 hover:text-sky-700">
              Sadece etrafa bakınmak istiyorum
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-3 border-t border-slate-200 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700"
            >
              <summary className="cursor-pointer list-none text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                {f.q}
              </summary>
              <p className="mt-2 text-xs text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
