import { motion } from "framer-motion";

function EndingSection({ onReplay }) {
  return (
    <section
      className="section-shell pb-28 text-center"
      aria-labelledby="ending-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2
          id="ending-title"
          className="font-serif text-4xl text-forest sm:text-6xl"
        >
          See ya soon
        </h2>
        <p className="mt-4 text-eucalyptus">Made by Loc</p>
        <motion.button
          type="button"
          onClick={onReplay}
          className="mt-9 rounded-full border border-forest/20 bg-ivory px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-forest shadow-[0_16px_35px_rgba(47,85,38,.14)]"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
        >
          restart
        </motion.button>
      </motion.div>
    </section>
  );
}

export default EndingSection;
