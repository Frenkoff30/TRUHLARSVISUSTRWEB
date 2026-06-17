import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// TODO: nahradit skutečnými recenzemi zákazníků
const reviews = [
  {
    text: "Kuchyň přesně podle našich představ, nic jsme nemuseli řešit. Přijeli, zaměřili, odvezli a pak přivezli hotovou. Jsme nadšení.",
    name: "Petra N.",
    place: "Hlinsko",
  },
  {
    text: "Skříně do půdy, které jsme nechali udělat na míru, sedí dokonale. Rychle, bez problémů, cena odpovídala. Určitě se vrátíme.",
    name: "Martin K.",
    place: "Skuteč",
  },
  {
    text: "Dali jsme jim volnou ruku a nelitujeme. Jídelní stůl z masivu je nádherný a vypadá líp, než jsme čekali. Skvělá práce.",
    name: "Jana a Tomáš H.",
    place: "Chrudim",
  },
];

export default function Reference() {
  return (
    <section id="reference" className="py-16 lg:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow inline-block bg-copper text-walnut text-xs font-semibold tracking-[0.25em] uppercase px-3 py-1.5 rounded-sm">
              Reference
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-walnut leading-[1.1]">
            Co říkají naši <span className="text-copper">zákazníci</span>
          </h2>
          <p className="mt-5 text-bark text-lg leading-[1.7] font-semibold">
            Spokojenost zákazníků je pro nás nejlepší vizitkou. Přečtěte si, jak hodnotí naši práci.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-walnut/10 bg-white/70 backdrop-blur-sm p-7 shadow-[0_10px_30px_rgba(23,19,17,0.06)] hover:shadow-[0_16px_40px_rgba(214,64,44,0.12)] hover:border-copper/30 transition-all duration-300"
            >
              <Quote className="text-copper/30 mb-4" size={32} />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} className="fill-copper text-copper" />
                ))}
              </div>
              <p className="text-ink leading-[1.7] font-semibold">{r.text}</p>
              <div className="mt-6 pt-5 border-t border-walnut/10">
                <p className="font-display font-semibold text-walnut">{r.name}</p>
                <p className="text-sm text-stone">{r.place}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
