import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Gdpr() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
      <Link
        to="/"
        className="flex w-fit items-center gap-2 text-bark hover:text-copper text-sm mb-10 transition-colors"
      >
        <ArrowLeft size={16} /> Zpět na hlavní stránku
      </Link>

      <h1 className="text-4xl font-semibold text-walnut mb-2">
        Ochrana osobních údajů
      </h1>
      <p className="text-stone text-sm mb-10">Zásady zpracování osobních údajů dle nařízení GDPR</p>

      <div className="space-y-8 text-bark text-lg leading-[1.75] font-semibold">
        <section>
          <h2 className="text-xl font-semibold text-walnut mb-3">Správce osobních údajů</h2>
          <p>
            Správcem vašich osobních údajů je firma Truhlářství Šustr, se sídlem Svobodné Hamry&nbsp;38,
            539&nbsp;01 Hlinsko. Kontaktovat nás můžete na e-mailu{" "}
            <a href="mailto:truhlarstvi.sustr@seznam.cz" className="text-copper hover:underline">
              truhlarstvi.sustr@seznam.cz
            </a>{" "}
            nebo na telefonu +420&nbsp;607&nbsp;721&nbsp;016.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-walnut mb-3">Jaké údaje zpracováváme</h2>
          <p>
            Prostřednictvím kontaktního formuláře zpracováváme pouze údaje, které nám sami poskytnete:
            jméno a&nbsp;příjmení, e-mailovou adresu, telefonní číslo a&nbsp;obsah vaší zprávy. Žádné
            další osobní údaje bez vašeho vědomí neshromažďujeme.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-walnut mb-3">Proč vaše údaje potřebujeme</h2>
          <p>
            Vaše kontaktní údaje používáme výhradně k&nbsp;tomu, abychom mohli odpovědět na vaši
            poptávku, domluvit schůzku nebo zaslat cenovou nabídku. Bez těchto údajů bychom vás
            nemohli kontaktovat.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-walnut mb-3">Neprodáváme vaše data třetím stranám</h2>
          <p>
            Vaše osobní údaje nepředáváme, neprodáváme ani nepronajímáme žádným třetím stranám,
            marketingovým agenturám ani jiným subjektům. Údaje jsou přístupné pouze nám a&nbsp;slouží
            výhradně pro účely vyřízení vaší poptávky.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-walnut mb-3">Jak dlouho údaje uchováváme</h2>
          <p>
            Vaše údaje uchováváme pouze po dobu nezbytně nutnou k&nbsp;vyřízení vaší poptávky,
            nejdéle však 1&nbsp;rok od jejího přijetí. Po uplynutí této doby jsou údaje vymazány.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-walnut mb-3">Vaše práva</h2>
          <p>
            Máte právo kdykoli požádat o&nbsp;přístup ke svým osobním údajům, jejich opravu nebo
            výmaz. Rovněž můžete vznést námitku proti jejich zpracování nebo požádat o&nbsp;omezení
            zpracování. Veškeré žádosti zasílejte na{" "}
            <a href="mailto:truhlarstvi.sustr@seznam.cz" className="text-copper hover:underline">
              truhlarstvi.sustr@seznam.cz
            </a>
            . V&nbsp;případě, že se domníváte, že zpracování vašich údajů porušuje právní předpisy,
            máte právo podat stížnost u&nbsp;Úřadu pro ochranu osobních údajů (uoou.cz).
          </p>
        </section>
      </div>

    </div>
  );
}
