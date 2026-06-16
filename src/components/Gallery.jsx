import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&w=900&q=80",
];

export default function Gallery() {
  return (
    <section id="realizace" className="py-16 lg:py-24 scroll-mt-24">
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
            <span className="eyebrow text-xs font-medium tracking-[0.3em] uppercase text-walnut/60">
              Galerie
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-walnut leading-[1.1]">
            Naše <span className="text-copper">realizace</span>
          </h2>
          <p className="mt-5 text-bark text-lg leading-[1.7]">
            Výběr z dokončených zakázek — kuchyně, nábytek a interiéry na míru.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img
                src={src}
                alt="Realizace truhlářství Šustr"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
