"use client";

import { useEffect, useState } from "react";

function isChunkLoadError(error: Error): boolean {
  return (
    error.name === "ChunkLoadError" ||
    /Loading chunk [\d]+ failed/i.test(error.message) ||
    /Failed to fetch dynamically imported module/i.test(error.message) ||
    /error loading dynamically imported module/i.test(error.message)
  );
}

const copy = {
  en: {
    title: "Something went wrong",
    message:
      "Sorry, an unexpected error occurred. Please reload the page — and if it keeps happening, you can reach us directly to book your tour.",
    reload: "Reload page",
    contact: "Or contact us directly:",
  },
  es: {
    title: "Algo salio mal",
    message:
      "Lo sentimos, ocurrio un error inesperado. Por favor recarga la pagina — y si el problema continua, puedes contactarnos directamente para reservar tu tour.",
    reload: "Recargar pagina",
    contact: "O contactanos directamente:",
  },
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [lang, setLang] = useState<"en" | "es">("en");

  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    if (saved === "es") setLang("es");

    if (isChunkLoadError(error)) {
      const KEY = "rfx-chunk-reloaded";
      if (typeof window !== "undefined" && !sessionStorage.getItem(KEY)) {
        sessionStorage.setItem(KEY, "1");
        window.location.reload();
      }
    }
    console.error("Global error boundary caught:", error);
  }, [error]);

  const c = copy[lang];

  return (
    <html lang={lang}>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f9fafb",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "420px",
            width: "100%",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <div style={{ background: "#1b4332", padding: "32px" }}>
            <div style={{ fontSize: "48px", lineHeight: 1 }}>🌿</div>
            <h1
              style={{
                color: "#fff",
                margin: "12px 0 0",
                fontSize: "22px",
              }}
            >
              {c.title}
            </h1>
          </div>
          <div style={{ padding: "32px" }}>
            <p style={{ color: "#4b5563", lineHeight: 1.6, marginTop: 0 }}>
              {c.message}
            </p>
            <button
              onClick={() => {
                try {
                  reset();
                } catch {
                  /* ignore */
                }
                window.location.reload();
              }}
              style={{
                display: "inline-block",
                background: "#2d6a4f",
                color: "#fff",
                border: "none",
                padding: "14px 24px",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "16px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              {c.reload}
            </button>
            <div
              style={{
                borderTop: "1px solid #f3f4f6",
                marginTop: "24px",
                paddingTop: "24px",
                fontSize: "14px",
              }}
            >
              <p style={{ color: "#6b7280", margin: "0 0 8px" }}>{c.contact}</p>
              <p style={{ margin: "4px 0" }}>
                <a
                  href="https://wa.me/50685104507"
                  style={{ color: "#2d6a4f", fontWeight: 600 }}
                >
                  WhatsApp: +506 8510-4507
                </a>
              </p>
              <p style={{ margin: "4px 0" }}>
                <a
                  href="mailto:info@rainforestexperiencescr.com"
                  style={{ color: "#2d6a4f", fontWeight: 600 }}
                >
                  info@rainforestexperiencescr.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
