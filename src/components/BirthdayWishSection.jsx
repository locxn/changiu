import { motion } from "framer-motion";

function BirthdayWishSection() {
  return (
    <section className="section-shell" aria-labelledby="wish-title">
      <motion.div
        className="paper-texture mx-auto max-w-2xl rounded-[2rem] border border-champagne/70 p-7 text-left shadow-[0_24px_70px_rgba(47,85,38,.12)] sm:p-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3 font-serif text-sm italic text-eucalyptus">
          a birthday wish
        </p>
        <h2 id="wish-title" className="sr-only">
          Final Birthday Wish
        </h2>
        <div className="space-y-5 font-serif text-2xl leading-relaxed text-forest sm:text-3xl">
          <p>
            I hope this new year of your life brings you peace, happiness, love,
            and especially, alot of money.
          </p>
          <p>
            I hope you laugh more, worry less, and feel proud of the person
            you’re becoming.
          </p>
          <p>Chúc mừng sinh nhật changu.</p>
        </div>
        <div className="mt-8 text-lg italic text-ink/75">
          <p>Meow Meow,</p>
          <p>Loc</p>
        </div>
        <img
          src="/loc.jpeg"
          alt="Loc"
          className="mt-8 aspect-square w-full rounded-[1.5rem] object-cover shadow-[0_18px_45px_rgba(47,85,38,.16)]"
        />
      </motion.div>
    </section>
  );
}

export default BirthdayWishSection;
