import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "1995", label: "rok založení firmy" },
  { value: "100%", label: "vlastní výroba na CNC" },
  { value: "5", label: "oblastí zakázkové výroby" },
];

export default function About() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="o-nas" className="py-16 lg:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xs w-full mx-auto lg:mx-0 order-1"
        >
          <div className="relative">
            <div className="absolute -inset-2.5 rounded-[1.6rem] border border-copper/25 -z-10" />
            <div
              ref={imgRef}
              className="aspect-[4/5] overflow-hidden rounded-[1.4rem] shadow-[0_30px_70px_-25px_rgba(28,25,23,0.4)]"
            >
              <motion.img
                style={{ y: imgY }}
                src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1000&q=80"
                alt="Detail práce truhláře se dřevem"
                className="w-full h-[110%] object-cover"
              />
            </div>
          </div>
          <p className="mt-4 eyebrow text-[0.7rem] tracking-[0.15em] uppercase text-stone text-center lg:text-left">
            Svobodné Hamry 38, 539 01 Hlinsko
          </p>
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
            <span className="eyebrow text-xs font-medium tracking-[0.3em] uppercase text-walnut/60">
              O nás
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-walnut leading-[1.1]">
            Rodinná firma založená v roce{" "}
            <span className="text-copper">1995</span>
          </h2>
          <p className="mt-7 text-bark text-lg leading-[1.75] max-w-xl">
            Zabýváme se zakázkovou výrobou kuchyní a nábytku z lamino desek,
            dýhy a masivu. Zajišťujeme i zaměření, dopravu a montáž — a kromě
            nábytku zvládneme také pokládku podlah a obklady z plastu i dřeva.
          </p>
          <p className="mt-5 text-bark text-lg leading-[1.75] max-w-xl">
            Řemeslo se snažíme dělat{" "}
            <span className="accent">kvalitně a poctivě</span>.
            Naše výrobky jsou kvalitní, dodané v termínu a za uspokojivou cenu.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-walnut/10 pt-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                <p className="font-display text-3xl md:text-4xl font-semibold text-copper">
                  {s.value}
                </p>
                <p className="mt-1.5 text-sm text-bark leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
