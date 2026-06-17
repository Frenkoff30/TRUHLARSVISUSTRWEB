import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 text-white/70 hover:text-white p-2"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 text-white/70 hover:text-white p-2"
          >
            <ChevronRight size={36} />
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt=""
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
        onClick={(e) => e.stopPropagation()}
      />

      <p className="absolute bottom-4 text-white/50 text-sm">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
