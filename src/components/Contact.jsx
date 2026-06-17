import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";

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

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
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
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow inline-block bg-copper text-walnut text-xs font-semibold tracking-[0.25em] uppercase px-3 py-1.5 rounded-sm">
              Kontakt
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-walnut leading-[1.1] lg:whitespace-nowrap">
            Domluvme si <span className="text-copper">nezávaznou</span> schůzku
          </h2>
          <p className="mt-5 text-bark text-lg leading-[1.7] font-semibold">
            Ozvěte se nám telefonem, e-mailem nebo přes formulář. Rádi
            s vámi projdeme vaši představu a navrhneme řešení na míru.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between h-full"
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
            <ContactItem
              icon={InstagramIcon}
              title="Instagram"
              value="instagram.com/truhlarstvisustr"
              href="https://www.instagram.com/truhlarstvi.sustr/"
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-cream rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_-25px_rgba(28,25,23,0.3)]"
            action="mailto:truhlarstvi.sustr@seznam.cz"
            method="post"
            encType="text/plain"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Jméno a příjmení" name="jmeno" placeholder="Jan Novák" required />
              <Field label="Telefon" name="telefon" type="tel" placeholder="+420 …" />
            </div>
            <div className="mt-5">
              <Field label="E-mail" name="email" type="email" placeholder="vas@email.cz" required />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold text-walnut mb-2">
                O jakou službu máte zájem?
              </label>
              <select
                name="sluzba"
                className="w-full rounded-xl border border-walnut/15 bg-white px-4 py-3 text-walnut focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/20 transition cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Vyberte…</option>
                <option>Kuchyně na míru</option>
                <option>Nábytek na míru</option>
                <option>Vestavné spotřebiče</option>
                <option>Olepování hran</option>
                <option>CNC obrábění</option>
                <option>Něco jiného</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold text-walnut mb-2">Zpráva</label>
              <textarea
                name="zprava"
                required
                rows={5}
                className="w-full rounded-xl border border-walnut/15 bg-white px-4 py-3 text-walnut focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/20 transition resize-none"
                placeholder="Popište nám vaši představu, rozměry, termín…"
              />
            </div>
            <div className="mt-5 flex items-start gap-3">
              <input
                type="checkbox"
                id="gdpr"
                name="gdpr"
                required
                className="mt-1 shrink-0 w-4 h-4 accent-copper cursor-pointer"
              />
              <span className="text-sm text-stone leading-relaxed">
                <label htmlFor="gdpr">Souhlasím se{" "}</label>
                <Link to="/gdpr" className="text-copper hover:underline">
                  zpracováním osobních údajů
                </Link>
                <label htmlFor="gdpr">{" "}za účelem vyřízení mé poptávky.</label>
              </span>
            </div>
            <button
              type="submit"
              className="mt-6 group w-full inline-flex items-center justify-center gap-2 rounded-full bg-walnut text-cream px-8 py-4 font-medium hover:bg-copper transition-colors cursor-pointer"
            >
              Odeslat poptávku
              <Send size={17} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-walnut mb-2">
        {label}
        {required && <span className="text-copper"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-walnut/15 bg-white px-4 py-3 text-walnut placeholder:text-stone/50 focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/20 transition"
      />
    </div>
  );
}

function ContactItem({ icon: Icon, title, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-start gap-4 rounded-2xl bg-cream p-6 hover:bg-walnut hover:text-cream transition-colors group"
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
