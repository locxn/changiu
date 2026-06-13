import { motion, useReducedMotion } from "framer-motion";

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 37) % 84)}%`,
  top: `${10 + ((index * 23) % 72)}%`,
  size: 3 + (index % 4),
  delay: (index % 8) * 0.35,
  duration: 5 + (index % 5),
}));

function FloatingParticles() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-ivory shadow-[0_0_18px_rgba(248,247,244,.95)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0, scale: 0.4, y: 0 }}
          animate={
            reducedMotion
              ? { opacity: 0.55, scale: 1 }
              : {
                  opacity: [0, 0.75, 0],
                  scale: [0.4, 1, 0.6],
                  y: [-4, -42, -70],
                }
          }
          transition={{
            duration: reducedMotion ? 0.01 : particle.duration,
            delay: particle.delay,
            repeat: reducedMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default FloatingParticles;
