import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Vizualizace zakázky a přímý export do strojů přes CAD/CAM software",
  "Řezání materiálů na CNC velkoplošné pile",
  "Obrábění dílů s vysokou přesností na CNC vrtacím a frézovacím centru",
  "Olepování hran PUR lepidlem, voděodolný spoj hrany a desky",
  "Lakování moderní technologií pro trvanlivý a čistý povrch",
  "Kování od předních značek Blum a Hettich",
  "Plošné materiály Egger, Fundermax a Kronospan",
  "V projektech používáme HPL desky, technistone i keramiku",
];

export default function Craft() {
  return (
    <section className="py-16 lg:py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow inline-block bg-copper text-walnut text-xs font-semibold tracking-[0.25em] uppercase px-3 py-1.5 rounded-sm">
              Naše řemeslo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-walnut leading-[1.1] mb-10">
            Jdeme s <span className="text-copper">dobou</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-12">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 rounded-full bg-copper/15 text-copper p-1">
                  <Check size={14} />
                </span>
                <span className="text-ink font-semibold leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
