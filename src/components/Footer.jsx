import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.81 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

// TODO: doplnit skutečný odkaz na Instagram
const socials = [
  { icon: FacebookIcon, href: "https://facebook.com/truhlarstvisustr", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/truhlarstvi.sustr/", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-walnut text-cream/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* brand */}
          <div>
            <img src="/logotruhlarstvi.png" alt="Truhlářství Šustr" className="h-14 w-auto" />
          </div>

          {/* contact */}
          <div className="space-y-3 text-sm">
            <p className="eyebrow text-cream font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              Kontakt
            </p>
            <a href="https://maps.google.com/?q=Svobodné+Hamry+38,+53901+Hlinsko" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-copper-light transition-colors">
              <MapPin size={16} className="shrink-0 text-copper-light" /> Svobodné Hamry 38, 539 01 Hlinsko
            </a>
            <a href="tel:+420607721016" className="flex items-center gap-3 hover:text-copper-light transition-colors">
              <Phone size={16} className="shrink-0 text-copper-light" /> +420 607 721 016
            </a>
            <a href="mailto:truhlarstvi.sustr@seznam.cz" className="flex items-center gap-3 hover:text-copper-light transition-colors">
              <Mail size={16} className="shrink-0 text-copper-light" /> truhlarstvi.sustr@seznam.cz
            </a>
          </div>

          {/* socials */}
          <div>
            <p className="eyebrow text-cream font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              Sledujte nás
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl border border-cream/15 flex items-center justify-center text-cream hover:bg-copper hover:border-copper transition-colors"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-xs text-cream/50 text-center flex flex-col sm:flex-row justify-center gap-3">
          <span>&copy; {new Date().getFullYear()} Truhlářství Šustr.</span>
          <Link to="/gdpr" className="hover:text-copper-light transition-colors">
            Ochrana osobních údajů
          </Link>
        </div>
      </div>
    </footer>
  );
}
