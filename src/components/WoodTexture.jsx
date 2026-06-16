import { useEffect, useRef } from "react";

// Clean white backdrop with subtle red glows (logo palette), a fine paper grain,
// and a real wood-grain texture that pans with scroll — as if you're moving along
// a wooden plank. Kept low-opacity so content stays crisp and premium.
export default function WoodTexture() {
  const woodRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      if (woodRef.current) {
        // pan the (seamlessly tileable) grain opposite to scroll for depth
        woodRef.current.style.backgroundPositionY = `${-window.scrollY * 0.55}px`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* clean white base */}
      <div className="absolute inset-0" style={{ background: "#fcfbfa" }} />

      {/* soft red glows, very diffuse */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[75vw] h-[75vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(214,64,44,0.07), transparent 62%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(214,64,44,0.05), transparent 62%)",
          filter: "blur(40px)",
        }}
      />

      {/* faux-bois line-art wood grain across the whole page — slowly drifting */}
      <div
        ref={woodRef}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/background-tile.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
          opacity: 0.5,
        }}
      />
      {/* soft white wash so text stays crisp over the grain */}
      <div className="absolute inset-0" style={{ background: "rgba(252,251,250,0.45)" }} />

      {/* ultra-fine paper grain */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
        <filter id="paper">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper)" />
      </svg>

      {/* gentle top light for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 65% at 50% -10%, rgba(255,255,255,0.85), transparent 55%)",
        }}
      />
    </div>
  );
}
