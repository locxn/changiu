import { motion } from "framer-motion";

const requirements = [
  { icon: "🍽️", text: "always eat something good, and drink alot of water" },
  { icon: "🤍", text: "smile a lot, even on your worst days" },
  { icon: "📷", text: "take cute pictures, and send them to me" },
  { icon: "🌿", text: "don’t be stressed, pet the cats" },
];

function ChangDaySection() {
  return (
    <section
      className="section-shell text-center"
      aria-labelledby="chang-day-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-serif text-xl italic text-eucalyptus">June 14</p>
        <h2
          id="chang-day-title"
          className="mt-2 font-serif text-4xl text-forest sm:text-5xl"
        >
          Pushing 30
        </h2>
        <p className="mx-auto mt-4 max-w-md leading-7 text-ink/75">
          You've lived about 25% of your life, friendly reminder to...
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {requirements.map((item, index) => (
          <motion.div
            key={item.text}
            className="paper-texture rounded-3xl border border-champagne/65 p-5 text-left shadow-[0_18px_45px_rgba(47,85,38,.09)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
          >
            <span className="text-2xl" aria-hidden="true">
              {item.icon}
            </span>
            <p className="mt-3 font-serif text-xl text-forest">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ChangDaySection;
