import { useEffect, useState } from "react";

export default function Counter({ value, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const target = parseInt(value, 10) || 0;

  useEffect(() => {
    const duration = 1400;
    const stepMs = 20;
    const start = Date.now();

    const interval = setInterval(() => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress >= 1) clearInterval(interval);
    }, stepMs);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}
