import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="o-nas" className="py-16 lg:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full order-1 flex justify-center"
        >
          <motion.img
            animate={{ y: [0, -16, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            src="/onas.png"
            alt="Dřevěné kostky Truhlářství Šustr"
            className="w-full max-w-[30rem] h-auto drop-shadow-[0_35px_45px_rgba(28,25,23,0.4)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="order-2"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow inline-block bg-copper text-walnut text-xs font-semibold tracking-[0.25em] uppercase px-3 py-1.5 rounded-sm">
              O nás
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-walnut leading-[1.1]">
            Rodinná firma založená v roce{" "}
            <span className="text-copper">1995</span>
          </h2>
          <p className="mt-7 text-bark text-lg leading-[1.75] max-w-xl font-semibold">
            Naše rodinná firma byla založena v roce 1995. Sídlíme v obci
            Svobodné Hamry, kterou najdete 6&nbsp;km od Hlinska v Čechách.
          </p>
          <p className="mt-5 text-bark text-lg leading-[1.75] max-w-xl font-semibold">
            Zabýváme se zakázkovou výrobou kuchyní, dveří, oken, schodů a nábytku
            z masivního dřeva a lamina, včetně zaměření, dovozu a montáže. Dále
            nabízíme pokládku podlah, montáž plastových i dřevěných palubek
            (obložení říms, štítů a stěn) a další řemeslné práce.
          </p>
          <p className="mt-5 text-bark text-lg leading-[1.75] max-w-xl font-semibold">
            Řemeslo se snažíme dělat{" "}
            <span className="accent">kvalitně a poctivě</span>. Kompletní výroba
            probíhá na CNC strojích.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
