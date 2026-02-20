"use client";

import { CheckCircle, X } from "lucide-react";
import { useLanguage } from "@/i18n/context";

export default function ThankYouModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-forest-800 to-forest-600 p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={36} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">
            {t.thankYouModal.title}
          </h3>
        </div>

        {/* Body */}
        <div className="p-8 text-center space-y-4">
          <p className="text-gray-700 text-base leading-relaxed">
            {t.thankYouModal.messageEn}
          </p>
          <p className="text-gray-500 text-sm leading-relaxed italic">
            {t.thankYouModal.messageEs}
          </p>
        </div>

        {/* Close button */}
        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="w-full bg-forest-700 hover:bg-forest-600 text-white py-3 rounded-xl text-base font-semibold transition-all"
          >
            {t.thankYouModal.close}
          </button>
        </div>

        {/* X button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
