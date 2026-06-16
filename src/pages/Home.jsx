import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Reference from "../components/Reference";
import Subsidies from "../components/Subsidies";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Reference />
      <Subsidies />
      <Contact />
    </>
  );
}
