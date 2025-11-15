import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#dfeaff]">
      <div className="mx-auto max-w-6xl px-4 pb-24">

        {/* ---------------------------------------------------------------- */}
        {/* HEADER */}
        {/* ---------------------------------------------------------------- */}
        <header className="flex items-center justify-between py-6">
          <div className="text-2xl font-extrabold tracking-wide text-[#0537ff]">
            CNCİTEM
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full bg-[#007bff] text-white text-sm font-semibold px-5 py-2 shadow">
              Giriş Yap
            </button>
            <div className="rounded-full border border-black/20 px-3 py-1 text-sm">
              🌐
            </div>
          </div>
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* HERO */}
        {/* ---------------------------------------------------------------- */}
        <section className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-center py-10">
          {/* Sol metin */}
          <div>
            <h1 className="text-[52px] leading-[1.05] font-bold tracking-tight text-black">
              cncitem.com <br />
              ile saniyeler <br />
              içinde
            </h1>

            <p className="mt-8 text-[17px] text-black/75 max-w-xl leading-relaxed">
              takım tutuculardan kesici takımlara, bağlama elemanlarından yedek
              parçalara kadar ihtiyacın olan parçaları tek bir yerde toplar.
              Firmaları karşılaştır, fiyat iste, üretimini hızlandır.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Image
                src="/googleplay.png"
                alt="Google Play"
                width={160}
                height={50}
                className="h-[50px] w-auto"
              />
              <Image
                src="/appstore.png"
                alt="App Store"
                width={160}
                height={50}
                className="h-[50px] w-auto"
              />
            </div>
          </div>

          {/* Sağ kadın görseli */}
          <div className="flex justify-center">
            <div className="rounded-[32px] border-[3px] border-black overflow-hidden bg-white shadow-md max-w-xs">
              <Image
                src="/hero-woman.png"
                alt="Hero woman"
                width={420}
                height={520}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CNCİTEM.COM’DA NELER YAPABİLİRSİNİZ */}
        {/* ---------------------------------------------------------------- */}
        <section className="grid md:grid-cols-[1.1fr,1fr] gap-10 py-14">
          {/* Sol büyük kart */}
          <div className="bg-white rounded-[32px] border-[3px] border-black px-10 py-10 max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase text-black/60">
              CNCİTEM.COM’DA
            </p>
            <h2 className="mt-4 text-[42px] leading-tight font-bold text-black">
              Cncitem.com’da <br />
              neler <br />
              yapabilirsiniz?
            </h2>
          </div>

          {/* Sağ 3 satır */}
          <div className="space-y-8 text-sm text-black/75">
            <div>
              <p className="font-semibold text-xs tracking-[0.25em] uppercase">
                CNCİTEM{" "}
                <span className="text-[#ff2b2b] font-bold">PAZARYERİ</span> TIKLA
              </p>
              <p className="mt-2">
                Use this space to talk about your company&apos;s leadership
                program. What makes this program relevant and effective? Add
                that here.
              </p>
            </div>

            <div>
              <p className="font-semibold text-xs tracking-[0.25em] uppercase">
                CNCİTEM{" "}
                <span className="text-[#1bd76c] font-bold">FASONYERİ</span> TIKLA
              </p>
              <p className="mt-2">
                Use this space to talk about your company&apos;s leadership
                program. What makes this program relevant and effective? Add
                that here.
              </p>
            </div>

            <div>
              <p className="font-semibold text-xs tracking-[0.25em] uppercase">
                CNCİTEM{" "}
                <span className="text-[#246cff] font-bold">HABERYERİ</span> TIKLA
              </p>
              <p className="mt-2">
                Use this space to talk about your company&apos;s leadership
                program. What makes this program relevant and effective? Add
                that here.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* THANKS FOR JOINING + ORTA KADIN */}
        {/* ---------------------------------------------------------------- */}
        <section className="grid md:grid-cols-[1.1fr,1fr] gap-10 items-center py-16">
          {/* Sol metin */}
          <div>
            <h2 className="text-[52px] leading-[1.05] font-bold tracking-tight text-black">
              Thanks for <br />
              joining this <br />
              training!
            </h2>
            <p className="mt-6 text-[16px] text-black/75 max-w-xl leading-relaxed">
              Please answer this short survey so we can improve our program to
              support you better.
            </p>
            <div className="mt-8 text-3xl">↓</div>
          </div>

          {/* Sağ kadın görseli */}
          <div className="flex justify-center">
            <div className="rounded-[32px] border-[3px] border-black overflow-hidden bg-white shadow-md max-w-xs">
              <Image
                src="/actions-woman.png"
                alt="Actions woman"
                width={420}
                height={520}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* ALTTaki ERKEK + BÜLTEN FORMU */}
        {/* ---------------------------------------------------------------- */}
        <section className="grid md:grid-cols-[1fr,1.1fr] gap-10 items-center py-10">
          {/* Sol erkek görseli */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="rounded-[32px] border-[3px] border-black overflow-hidden bg-white shadow-md max-w-xs">
              <Image
                src="/actions-man.png"
                alt="Actions man"
                width={420}
                height={520}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Sağ metin + input */}
          <div className="order-1 md:order-2">
            <h3 className="text-[36px] md:text-[40px] leading-tight font-bold text-black">
              Fırsat ve yeniliklerden <br />
              haberdar olmak için <br />
              bültenimize abone olun!
            </h3>

            <div className="mt-8">
              <input
                type="email"
                placeholder="E-Posta Adresiniz"
                className="w-full max-w-md rounded-[999px] border-[3px] border-black bg-transparent px-6 py-3 text-[15px] text-black placeholder:text-black/40 outline-none"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
