import Hero from "../components/Hero";
import Services from "../components/Services";
import WoodBand from "../components/WoodBand";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Subsidies from "../components/Subsidies";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WoodBand />
      <Gallery />
      <Subsidies />
      <Contact />
    </>
  );
}
