import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section className="relative pt-28 lg:pt-32 pb-14 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="aurora-blob aurora-blob-1 -top-32 -left-32 w-[34rem] h-[34rem]"
          style={{ background: "radial-gradient(circle, rgba(214,64,44,0.22), transparent 70%)" }}
        />
        <div
          className="aurora-blob aurora-blob-2 top-1/3 right-[-12rem] w-[30rem] h-[30rem]"
          style={{ background: "radial-gradient(circle, rgba(214,64,44,0.14), transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-xs font-medium tracking-[0.35em] uppercase text-walnut/60">
              Truhlářská firma z Hlinska
            </span>
          </div>

          <h1 className="text-walnut text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.04] font-semibold">
            Nábytek na míru,
            <br />
            <span className="text-copper">
              který vydrží generace
            </span>
          </h1>

          <p className="mt-8 text-bark text-lg md:text-xl leading-relaxed max-w-xl">
            Rodinná dílna ze Svobodných Hamrů. Navrhneme a vyrobíme vám kuchyně, nábytek
            i celé interiéry z&nbsp;masivu, dýhy nebo lamina. Vše na vlastních
            CNC strojích.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="/#kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-walnut text-cream px-8 py-4 font-medium tracking-wide shadow-[0_10px_30px_rgba(28,25,23,0.25)] hover:shadow-[0_14px_40px_rgba(214,64,44,0.3)] hover:bg-copper transition-all duration-300 cursor-pointer"
            >
              Nezávazná poptávka
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="/#sluzby"
              className="inline-flex items-center gap-2 text-walnut font-medium tracking-wide border-b-2 border-transparent hover:border-copper transition-colors duration-300 cursor-pointer"
            >
              Prohlédnout služby
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative max-w-sm w-full mx-auto lg:ml-auto"
        >
          <div className="absolute -inset-2.5 rounded-[1.6rem] border border-copper/30 -z-10" />
          <div
            ref={imgRef}
            className="aspect-[4/5] overflow-hidden rounded-[1.4rem] shadow-[0_30px_80px_-20px_rgba(28,25,23,0.45)]"
          >
            <motion.img
              style={{ y: imgY }}
              src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&w=1000&q=80"
              alt="Moderní kuchyň na míru od Truhlářství Šustr"
              className="w-full h-[106%] object-cover"
            />
          </div>

          {/* floating glass credential card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute -left-4 bottom-8 rounded-xl border border-white/50 bg-white/75 backdrop-blur-xl px-4 py-3 shadow-[0_16px_40px_-15px_rgba(28,25,23,0.35)]"
          >
            <p className="font-display text-base font-semibold leading-tight text-walnut">
              Pro vás <span className="text-copper">již od roku 1995</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
