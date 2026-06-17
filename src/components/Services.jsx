import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="sluzby" className="py-16 lg:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow inline-block bg-copper text-walnut text-xs font-semibold tracking-[0.25em] uppercase px-3 py-1.5 rounded-sm">
              Co umíme
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-walnut leading-[1.1]">
            Naše <span className="text-copper">služby</span>
          </h2>
          <p className="mt-5 text-bark text-lg leading-[1.7] font-semibold">
            Podívejte se na detailní popis a ukázky naší práce.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.07 }}
            >
              <Link
                to={`/sluzby/${s.slug}`}
                className="group relative block h-[280px] rounded-2xl overflow-hidden shadow-[0_10px_28px_rgba(23,19,17,0.14)] hover:shadow-[0_18px_42px_rgba(23,19,17,0.26)] hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={s.cardImg}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-[800ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/45 to-walnut/5" />

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-cream text-lg font-semibold tracking-tight leading-tight">
                    {s.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-copper-light text-xs font-semibold tracking-wide">
                    Zjistit více
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </span>
                </div>

                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-copper/40 transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://facebook.com/truhlarstvisustr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-walnut/15 bg-cream px-6 py-3.5 text-walnut font-medium hover:bg-walnut hover:text-cream transition-colors group"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-copper group-hover:text-cream transition-colors">
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.81 8.44-4.94 8.44-9.94Z" />
            </svg>
            Aktuální galerie našich výrobků na Facebooku
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
