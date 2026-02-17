"use client";

import { useLanguage, type Locale } from "@/i18n/context";

const flags: Record<Locale, { label: string; flag: string }> = {
  en: { label: "English", flag: "US" },
  es: { label: "Espanol", flag: "CR" },
};

function FlagIcon({ code }: { code: string }) {
  if (code === "US") {
    return (
      <svg viewBox="0 0 36 36" className="w-5 h-5 rounded-full" aria-hidden="true">
        <rect width="36" height="36" rx="18" fill="#B22234" />
        <rect y="2.77" width="36" height="2.77" fill="white" />
        <rect y="8.31" width="36" height="2.77" fill="white" />
        <rect y="13.85" width="36" height="2.77" fill="white" />
        <rect y="19.38" width="36" height="2.77" fill="white" />
        <rect y="24.92" width="36" height="2.77" fill="white" />
        <rect y="30.46" width="36" height="2.77" fill="white" />
        <rect width="14.4" height="19.38" fill="#3C3B6E" />
      </svg>
    );
  }
  // Costa Rica flag
  return (
    <svg viewBox="0 0 36 36" className="w-5 h-5 rounded-full" aria-hidden="true">
      <rect width="36" height="36" rx="18" fill="#002B7F" />
      <rect y="4" width="36" height="28" fill="white" />
      <rect y="8" width="36" height="20" fill="#CE1126" />
      <rect y="12" width="36" height="12" fill="white" />
      <rect y="14" width="36" height="8" fill="#002B7F" />
    </svg>
  );
}

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const other: Locale = locale === "en" ? "es" : "en";

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLocale("en")}
        className={`p-1 rounded-full transition-all ${
          locale === "en"
            ? "ring-2 ring-forest-400 scale-110"
            : "opacity-60 hover:opacity-100"
        }`}
        aria-label="Switch to English"
        title="English"
      >
        <FlagIcon code="US" />
      </button>
      <button
        onClick={() => setLocale("es")}
        className={`p-1 rounded-full transition-all ${
          locale === "es"
            ? "ring-2 ring-forest-400 scale-110"
            : "opacity-60 hover:opacity-100"
        }`}
        aria-label="Cambiar a Espanol"
        title="Espanol"
      >
        <FlagIcon code="CR" />
      </button>
    </div>
  );
}
