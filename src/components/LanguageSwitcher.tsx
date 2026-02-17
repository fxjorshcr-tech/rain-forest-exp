"use client";

import Image from "next/image";
import { useLanguage, type Locale } from "@/i18n/context";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLocale("en")}
        className={`relative w-7 h-7 rounded-full overflow-hidden transition-all border-2 ${
          locale === "en"
            ? "border-forest-400 scale-110 shadow-md"
            : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
        }`}
        aria-label="Switch to English"
        title="English"
      >
        <Image
          src="https://flagcdn.com/w40/us.png"
          alt="English"
          fill
          className="object-cover"
          sizes="28px"
        />
      </button>
      <button
        onClick={() => setLocale("es")}
        className={`relative w-7 h-7 rounded-full overflow-hidden transition-all border-2 ${
          locale === "es"
            ? "border-forest-400 scale-110 shadow-md"
            : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
        }`}
        aria-label="Cambiar a Espanol"
        title="Espanol"
      >
        <Image
          src="https://flagcdn.com/w40/cr.png"
          alt="Espanol"
          fill
          className="object-cover"
          sizes="28px"
        />
      </button>
    </div>
  );
}
