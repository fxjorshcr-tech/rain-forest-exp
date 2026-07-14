"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { useLanguage } from "@/i18n/context";

function isChunkLoadError(error: Error): boolean {
  return (
    error.name === "ChunkLoadError" ||
    /Loading chunk [\d]+ failed/i.test(error.message) ||
    /Failed to fetch dynamically imported module/i.test(error.message) ||
    /error loading dynamically imported module/i.test(error.message)
  );
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();
  const eb = t.errorBoundary;

  useEffect(() => {
    // A common cause of a client-side exception is a stale page loading a
    // JS chunk that no longer exists after a new deployment. Recover
    // automatically by reloading once (guarded so we never loop).
    if (isChunkLoadError(error)) {
      const KEY = "rfx-chunk-reloaded";
      if (typeof window !== "undefined" && !sessionStorage.getItem(KEY)) {
        sessionStorage.setItem(KEY, "1");
        window.location.reload();
      }
    }
    // Log for observability.
    console.error("Client error boundary caught:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-forest-900 p-8 text-center">
            <AlertTriangle size={56} className="mx-auto text-amber-300 mb-3" />
            <h1 className="text-2xl font-bold text-white">{eb.title}</h1>
          </div>
          <div className="p-8 space-y-6 text-center">
            <p className="text-gray-600">{eb.message}</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-600 text-white px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer"
              >
                <RefreshCw size={18} />
                {eb.tryAgain}
              </button>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer"
              >
                {eb.reload}
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors"
              >
                <Home size={16} />
                {eb.backToHome}
              </Link>
            </div>

            <div className="border-t border-gray-100 pt-6 text-sm">
              <p className="text-gray-500 mb-2">{eb.contactUs}</p>
              <div className="flex flex-col gap-1">
                <a
                  href="https://wa.me/50685104507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-600 hover:text-forest-700 font-medium"
                >
                  WhatsApp: +506 8510-4507
                </a>
                <a
                  href="mailto:info@rainforestexperiencescr.com"
                  className="text-forest-600 hover:text-forest-700 font-medium"
                >
                  info@rainforestexperiencescr.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
