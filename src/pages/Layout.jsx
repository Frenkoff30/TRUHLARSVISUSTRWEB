import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WoodTexture from "../components/WoodTexture";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <WoodTexture />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
