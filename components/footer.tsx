// components/footer.tsx
import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-semibold text-slate-800">CNCitem</span>{" "}
          <span>· Talaşlı imalat & fason iş platformu</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="hover:text-sky-600">Gizlilik</button>
          <button className="hover:text-sky-600">Kullanım Şartları</button>
          <button className="hover:text-sky-600">İletişim</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
