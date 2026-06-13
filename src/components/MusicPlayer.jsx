import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function MusicPlayer({ shouldPlay }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    audio.loop = true;

    if (shouldPlay) {
      audio
        .play()
        .then(() => setAvailable(true))
        .catch(() => setAvailable(false));
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [shouldPlay]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  return (
    <>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/birthday-song.mp3`}
        preload="none"
        onError={() => setAvailable(false)}
      />
      <motion.div
        className="fixed bottom-4 right-4 z-30 rounded-full border border-champagne/70 bg-ivory/85 px-3 py-2 text-xs text-forest shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          type="button"
          onClick={() => setMuted((value) => !value)}
          aria-label={
            muted ? "Turn birthday music on" : "Turn birthday music off"
          }
          className="flex items-center gap-2 rounded-full px-2 py-1 font-medium"
        >
          <span aria-hidden="true">{available && !muted ? "♪" : "♡"}</span>
          {available ? (muted ? "music off" : "music on") : "music optional"}
        </button>
      </motion.div>
    </>
  );
}

export default MusicPlayer;
