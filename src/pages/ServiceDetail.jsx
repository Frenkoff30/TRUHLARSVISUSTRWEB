import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { services, getServiceBySlug } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/" replace />;

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.heroImg} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/75 to-walnut/30" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full"
        >
          <Link
            to="/#sluzby"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-cream text-sm mb-4"
          >
            <ArrowLeft size={16} /> Zpět na služby
          </Link>
          <span className="text-copper-light uppercase tracking-[0.25em] text-sm font-medium">
            {service.tagline}
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl text-cream font-medium leading-tight">
            {service.title}
          </h1>
        </motion.div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.4fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {service.paragraphs.map((p, i) => (
              <p key={i} className="text-ink text-lg leading-[1.75] mb-5">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-4 mt-10">
              {service.gallery.map((src, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={src}
                    alt={`${service.title} – ukázka ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="bg-paper rounded-3xl p-8">
              <h2 className="font-display text-2xl text-walnut mb-5">Co je v ceně</h2>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-walnut">
                    <span className="mt-0.5 shrink-0 rounded-full bg-copper/15 text-copper p-1">
                      <Check size={14} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/#kontakt"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full rounded-full bg-walnut text-cream px-6 py-4 font-medium hover:bg-copper transition-colors"
              >
                Nezávazná poptávka <ArrowRight size={18} />
              </Link>
            </div>

            <div>
              <h2 className="font-display text-xl text-walnut mb-4">Další služby</h2>
              <div className="space-y-3">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    to={`/sluzby/${o.slug}`}
                    className="flex items-center justify-between rounded-2xl bg-cream border border-walnut/10 px-5 py-4 hover:bg-walnut hover:text-cream transition-colors group"
                  >
                    <span className="flex items-center gap-3 font-medium text-walnut group-hover:text-cream">
                      <o.icon size={18} className="text-copper" />
                      {o.title}
                    </span>
                    <ArrowRight size={16} className="text-stone group-hover:text-cream" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
