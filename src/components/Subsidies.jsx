import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Subsidies() {
  return (
    <section id="dotace" className="py-16 lg:py-24 bg-walnut text-cream relative overflow-hidden scroll-mt-24">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(214,64,44,0.18), transparent 60%)",
          filter: "blur(20px)",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Award className="mx-auto text-gold mb-6" size={40} />
          <span className="eyebrow text-gold font-medium tracking-[0.3em] uppercase text-xs">
            Získané dotace
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-[1.1]">
            Investujeme do rozvoje naší dílny
          </h2>
          <p className="mt-7 text-cream/85 text-lg leading-[1.8] text-balance">
            Díky podpoře z&nbsp;evropských a&nbsp;národních dotačních programů jsme mohli modernizovat naše CNC vybavení a&nbsp;technologické zázemí. To se přímo promítá do přesnosti, rychlosti a&nbsp;kvality každé zakázky.
          </p>
          <p className="mt-4 text-cream/85 text-lg leading-[1.8] text-balance">
            Více informací o&nbsp;konkrétních projektech a&nbsp;podpoře vám rádi poskytneme osobně. Neváhejte nás kontaktovat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
