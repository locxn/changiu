import { motion } from "framer-motion";

function Envelope({ isOpen, onOpen }) {
  return (
    <motion.button
      type="button"
      aria-label="Open birthday envelope"
      onClick={() => !isOpen && onOpen()}
      className="relative -mt-4 h-36 w-64 rounded-xl border border-rose-taupe/35 bg-champagne/80 shadow-[0_22px_50px_rgba(47,85,38,.18)] backdrop-blur-sm sm:-mt-6 sm:h-40 sm:w-72"
      initial={{ opacity: 0, y: 34, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={
        !isOpen
          ? { y: -6, boxShadow: "0 28px 65px rgba(47,85,38,.22)" }
          : undefined
      }
      whileTap={!isOpen ? { scale: 0.98 } : undefined}
      transition={{ type: "spring", stiffness: 110, damping: 17, mass: 0.9 }}
    >
      <span className="sr-only">Open me</span>
      <motion.div
        className="absolute left-3 right-3 top-5 h-28 rounded-lg bg-ivory shadow-inner"
        initial={false}
        animate={isOpen ? { y: -66, opacity: 1 } : { y: 18, opacity: 0.86 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto mt-5 h-px w-24 bg-rose-taupe/35" />
        <p className="mt-5 font-serif text-sm italic text-forest">Hế nhô</p>
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-[72%] rounded-b-xl bg-[linear-gradient(145deg,#F8F7F4,#E8CDAA)]" />
      <div className="absolute bottom-0 left-0 h-0 w-0 border-b-[104px] border-l-[128px] border-b-ivory/75 border-l-transparent sm:border-b-[116px] sm:border-l-[144px]" />
      <div className="absolute bottom-0 right-0 h-0 w-0 border-b-[104px] border-r-[128px] border-b-ivory/75 border-r-transparent sm:border-b-[116px] sm:border-r-[144px]" />
      <motion.div
        className="absolute left-0 top-0 h-0 w-0 origin-top border-l-[128px] border-r-[128px] border-t-[82px] border-l-transparent border-r-transparent border-t-rose-taupe/70 sm:border-l-[144px] sm:border-r-[144px] sm:border-t-[90px]"
        initial={false}
        animate={isOpen ? { rotateX: 180, y: -2 } : { rotateX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p className="font-serif text-lg italic tracking-wide text-forest">
          Open me
        </p>
      </div>
      <div
        className="absolute left-1/2 top-[58%] h-8 w-8 -translate-x-1/2 rounded-full border border-rose-taupe/45 bg-ivory/90 shadow-sm"
        aria-hidden="true"
      >
        <span className="mt-1 block text-sm text-rose-taupe">✦</span>
      </div>
    </motion.button>
  );
}

export default Envelope;
