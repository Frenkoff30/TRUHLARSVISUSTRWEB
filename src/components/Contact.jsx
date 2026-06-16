import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

function FacebookIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.81 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-paper scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-xs font-medium tracking-[0.3em] uppercase text-walnut/60">
              Kontakt
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-walnut leading-[1.1]">
            Domluvme si <span className="text-copper">nezávaznou</span> schůzku
          </h2>
          <p className="mt-5 text-bark text-lg leading-[1.7]">
            Ozvěte se nám telefonem, e-mailem nebo přes formulář — rádi
            s vámi projdeme vaši představu a navrhneme řešení na míru.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <ContactItem
              icon={MapPin}
              title="Adresa"
              value="Svobodné Hamry 38, 539 01 Hlinsko"
              href="https://maps.google.com/?q=Svobodné+Hamry+38,+53901+Hlinsko"
            />
            <ContactItem
              icon={Phone}
              title="Telefon"
              value="+420 607 721 016"
              href="tel:+420607721016"
            />
            <ContactItem
              icon={Mail}
              title="E-mail"
              value="truhlarstvi.sustr@seznam.cz"
              href="mailto:truhlarstvi.sustr@seznam.cz"
            />
            <ContactItem
              icon={FacebookIcon}
              title="Facebook"
              value="facebook.com/truhlarstvisustr"
              href="https://facebook.com/truhlarstvisustr"
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-cream rounded-3xl p-8 md:p-10 space-y-5"
            action="mailto:truhlarstvi.sustr@seznam.cz"
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="block text-sm font-medium text-walnut mb-2">Jméno</label>
              <input
                type="text"
                name="jmeno"
                required
                className="w-full rounded-xl border border-walnut/15 bg-white px-4 py-3 text-walnut focus:outline-none focus:border-copper"
                placeholder="Vaše jméno"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-walnut mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-walnut/15 bg-white px-4 py-3 text-walnut focus:outline-none focus:border-copper"
                placeholder="vas@email.cz"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-walnut mb-2">Zpráva</label>
              <textarea
                name="zprava"
                required
                rows={4}
                className="w-full rounded-xl border border-walnut/15 bg-white px-4 py-3 text-walnut focus:outline-none focus:border-copper resize-none"
                placeholder="Popište nám vaši poptávku..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-walnut text-cream px-8 py-4 font-medium hover:bg-copper transition-colors"
            >
              Odeslat poptávku
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-start gap-4 rounded-2xl bg-cream p-5 hover:bg-walnut hover:text-cream transition-colors group"
    >
      <div className="shrink-0 rounded-xl bg-walnut text-cream group-hover:bg-copper p-3 transition-colors">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-sm text-stone group-hover:text-cream/70">{title}</p>
        <p className="font-medium text-walnut group-hover:text-cream">{value}</p>
      </div>
    </a>
  );
}
