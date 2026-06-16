import { motion } from "framer-motion";
import { Hammer, Ruler, Sparkles } from "lucide-react";

const points = [
  {
    icon: Hammer,
    title: "Ruční dokončení",
    desc: "Každý kus prochází finální úpravou v naší dílně.",
  },
  {
    icon: Ruler,
    title: "Přesné CNC",
    desc: "Moderní technologie pro milimetrovou přesnost.",
  },
  {
    icon: Sparkles,
    title: "Poctivé materiály",
    desc: "Masiv, dýha a kvalitní laminované desky.",
  },
];

export default function WoodBand() {
  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] sm:aspect-[5/4] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1600&q=80"
              alt="Ruční práce se dřevem v dílně Truhlářství Šustr"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-3 border border-copper/20 rounded-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-xs font-medium tracking-[0.3em] uppercase text-walnut/60">
              Naše řemeslo
            </span>
          </div>
          <h2 className="text-walnut text-4xl md:text-5xl font-semibold leading-[1.1]">
            Skutečné dřevo,
            <br />
            <span className="text-copper">poctivé řemeslo</span>
          </h2>
          <p className="mt-6 text-bark text-lg leading-[1.75] max-w-lg">
            Každý kus prochází rukama našich truhlářů — od výběru materiálu
            přes přesnou CNC výrobu až po ruční dokončení a finální detaily.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="flex flex-col gap-3 rounded-2xl border border-walnut/10 bg-white/60 backdrop-blur-sm p-5 hover:border-copper/30 hover:shadow-[0_8px_30px_rgba(226,86,43,0.10)] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-copper/10 text-copper flex items-center justify-center">
                  <p.icon size={20} />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-walnut">{p.title}</p>
                  <p className="mt-1.5 text-sm text-bark leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
