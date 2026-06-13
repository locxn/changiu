import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function LetterDialog({ onClose, onContinue }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-forest/30 px-4 py-6 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      role="presentation"
    >
      <motion.article
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="letter-title"
        className="paper-texture max-h-[88svh] w-full max-w-lg overflow-y-auto rounded-[2rem] border border-champagne/70 p-6 text-left shadow-[0_30px_90px_rgba(38,49,33,.28)] sm:p-8"
        initial={{ opacity: 0, scale: 0.96, y: 42, rotate: -0.8 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 18 }}
        transition={{ type: "spring", stiffness: 92, damping: 20, mass: 0.9 }}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-serif text-sm italic text-eucalyptus">June 14</p>
            <h2 id="letter-title" className="font-serif text-3xl text-forest">
              Happy Birthday, Chang
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close birthday letter"
            className="rounded-full bg-champagne/55 px-3 py-1 text-forest shadow-sm transition hover:bg-champagne"
          >
            ×
          </button>
        </div>

        <div className="space-y-4 text-[15px] leading-7 text-ink/90 sm:text-base">
          <p>
            I know I’m far away, but I still wanted to make something small just
            for you. Something you can open today or anyday, and hopefully smile
            at, even if I can’t be there in person.
          </p>
          <p>
            I hope your birthday feels happy and is full of love. You deserve a
            day that makes you feel special.
          </p>
          <p>
            Even from the other side of the world, I wanted to send you
            something small to show you how much I appreciate you.
          </p>
          <p>
            It has been great getting to know you, and I hope I can always be
            your number one supporter.
          </p>
        </div>

        <div className="mt-7 border-t border-champagne/70 pt-5 font-serif text-lg italic text-forest">
          <p>Love,</p>
          <p>Loc</p>
        </div>

        <motion.button
          type="button"
          onClick={onContinue}
          className="mt-7 w-full rounded-full bg-forest px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_14px_30px_rgba(47,85,38,.22)]"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          continue
        </motion.button>
      </motion.article>
    </motion.div>
  );
}

export default LetterDialog;
