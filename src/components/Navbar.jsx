import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/#o-nas", label: "O nás" },
  { href: "/#sluzby", label: "Služby" },
  { href: "/#reference", label: "Reference" },
  { href: "/#dotace", label: "Dotace" },
  { href: "/#kontakt", label: "Kontakt" },
];

const sectionIds = links.map((l) => l.href.split("#")[1]);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy: highlight the nav item of the section currently in view
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-black border-b border-white/10 ${
        scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-24">
        <Link to="/" className="flex items-center" aria-label="Truhlářství Šustr">
          <img
            src="/logotruhlarstvi.png"
            alt="Truhlářství Šustr"
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => {
            const id = l.href.split("#")[1];
            const isActive = active === id;
            return (
              <Link
                key={l.href}
                to={l.href}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-copper" : "text-cream hover:text-copper"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-copper transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          to="/#kontakt"
          className="hidden lg:flex items-center gap-2 rounded-sm bg-copper text-cream px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-copper-light transition-colors duration-300"
        >
          <Phone size={16} />
          Kontakt
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-cream"
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black border-t border-cream/10 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="text-cream font-medium text-lg"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-copper text-cream px-5 py-3 text-sm font-medium"
          >
            <Phone size={16} />
            Kontakt
          </Link>
        </div>
      )}
    </header>
  );
}
