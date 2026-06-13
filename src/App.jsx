import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import LilyBouquet from "./components/LilyBouquet";
import Envelope from "./components/Envelope";
import LetterDialog from "./components/LetterDialog";
import ChangDaySection from "./components/ChangDaySection";
import BirthdayWishSection from "./components/BirthdayWishSection";
import EndingSection from "./components/EndingSection";
import FloatingParticles from "./components/FloatingParticles";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [introKey, setIntroKey] = useState(0);
  const [bouquetReady, setBouquetReady] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [musicRequested, setMusicRequested] = useState(false);
  const changDayRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const showLetter = useCallback(() => {
    setEnvelopeOpened(true);
    setMusicRequested(true);
    window.setTimeout(
      () => setLetterOpen(true),
      prefersReducedMotion ? 80 : 1500,
    );
  }, [prefersReducedMotion]);

  const continueToPage = useCallback(() => {
    setLetterOpen(false);
    window.setTimeout(() => {
      changDayRef.current?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }, 120);
  }, [prefersReducedMotion]);

  const replayMagic = useCallback(() => {
    setLetterOpen(false);
    setEnvelopeOpened(false);
    setMusicRequested(false);
    setBouquetReady(false);
    setIntroKey((key) => key + 1);
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion]);

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#F8F7F4_0%,#F4E7D4_42%,#E8CDAA_100%)] text-ink">
      <section
        className="relative flex min-h-[100svh] items-center justify-center px-5 py-10 text-center"
        aria-label="Opening birthday gift"
      >
        <FloatingParticles key={`particles-${introKey}`} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,247,244,.52),rgba(232,205,170,.36))]" />
        <motion.div
          key={introKey}
          className="relative z-10 flex w-full max-w-xl flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="mb-3 font-serif text-lg italic text-eucalyptus"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            For Nguyen Thi Huyen Trang
          </motion.p>
          <motion.h1
            className="max-w-sm font-serif text-4xl leading-tight text-forest drop-shadow-sm sm:text-6xl"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            A little birthday flower for you
          </motion.h1>
          <LilyBouquet onComplete={() => setBouquetReady(true)} />
          <AnimatePresence>
            {bouquetReady && (
              <Envelope isOpen={envelopeOpened} onOpen={showLetter} />
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {letterOpen && (
          <LetterDialog
            onClose={() => setLetterOpen(false)}
            onContinue={continueToPage}
          />
        )}
      </AnimatePresence>

      {(musicRequested || letterOpen) && (
        <MusicPlayer shouldPlay={musicRequested} />
      )}

      <div ref={changDayRef}>
        <ChangDaySection />
      </div>
      <BirthdayWishSection />
      <EndingSection onReplay={replayMagic} />
    </main>
  );
}

export default App;
