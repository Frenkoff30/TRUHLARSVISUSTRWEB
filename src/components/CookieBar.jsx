import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "sustr-cookie-consent";

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (value) => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 inset-x-4 md:left-auto md:right-6 md:max-w-md z-[60]"
        >
          <div className="rounded-2xl border border-white/10 bg-walnut text-cream p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 shrink-0 rounded-lg bg-copper/20 text-copper-light flex items-center justify-center">
                <Cookie size={18} />
              </div>
              <div>
                <p className="font-display font-semibold text-cream">Cookies</p>
                <p className="mt-1 text-sm text-cream/70 leading-relaxed">
                  Tento web používá cookies k zajištění správného fungování
                  a k analýze návštěvnosti. Souhlasíte s jejich používáním?
                </p>
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-4">
              <button
                onClick={() => decide("declined")}
                className="px-4 py-2 text-sm font-medium text-cream/70 hover:text-cream transition-colors cursor-pointer"
              >
                Odmítnout
              </button>
              <button
                onClick={() => decide("accepted")}
                className="px-5 py-2 rounded-full text-sm font-medium bg-copper text-cream hover:bg-copper-light transition-colors cursor-pointer"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
