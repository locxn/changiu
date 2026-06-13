import { motion, useReducedMotion } from "framer-motion";

const lilyGroups = [
  { x: 120, y: 88, rotate: -18, delay: 1.05, scale: 0.94 },
  { x: 190, y: 72, rotate: 8, delay: 1.24, scale: 1.05 },
  { x: 252, y: 104, rotate: 22, delay: 1.43, scale: 0.96 },
];

const leaves = [
  { x1: 166, y1: 295, x2: 90, y2: 176, rotate: -30, delay: 0.45 },
  { x1: 174, y1: 294, x2: 268, y2: 170, rotate: 30, delay: 0.52 },
  { x1: 166, y1: 306, x2: 120, y2: 210, rotate: -44, delay: 0.65 },
  { x1: 184, y1: 306, x2: 228, y2: 206, rotate: 46, delay: 0.72 },
  { x1: 176, y1: 300, x2: 178, y2: 132, rotate: 0, delay: 0.58 },
];

function Lily({ x, y, rotate, delay, scale }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <motion.g
        initial={{ opacity: 0, scale: 0.22, rotate: -10, y: 14 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        transition={{
          delay,
          duration: 1.05,
          type: "spring",
          stiffness: 82,
          damping: 13,
        }}
      >
        <motion.path
          d="M0 0 C-34 -22 -54 -5 -36 22 C-18 18 -6 10 0 0Z"
          fill="#FDFCF8"
          stroke="#DAD7CB"
          strokeWidth="1.5"
        />
        <motion.path
          d="M0 0 C-14 -42 12 -58 28 -24 C18 -15 9 -6 0 0Z"
          fill="#FFFDF8"
          stroke="#DAD7CB"
          strokeWidth="1.5"
        />
        <motion.path
          d="M0 0 C30 -26 57 -9 40 22 C20 18 8 10 0 0Z"
          fill="#F9F6EF"
          stroke="#DAD7CB"
          strokeWidth="1.5"
        />
        <motion.path
          d="M0 0 C-13 22 0 42 21 31 C18 15 9 6 0 0Z"
          fill="#F7F1E6"
          stroke="#DAD7CB"
          strokeWidth="1.5"
        />
        <circle cx="0" cy="0" r="5" fill="#E8CDAA" />
        <path
          d="M-4 2 C-14 9 -20 15 -24 24 M3 3 C5 15 6 22 6 30 M7 1 C18 9 24 16 30 24"
          stroke="#B79F68"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="-24" cy="24" r="2.8" fill="#9C7A46" />
        <circle cx="6" cy="30" r="2.8" fill="#9C7A46" />
        <circle cx="30" cy="24" r="2.8" fill="#9C7A46" />
      </motion.g>
    </g>
  );
}

function LilyBouquet({ onComplete }) {
  const reducedMotion = useReducedMotion();
  const bloomFinishedDelay = reducedMotion ? 0.01 : 2400;

  return (
    <motion.div
      className="relative mt-7 w-full max-w-[390px] drop-shadow-[0_28px_28px_rgba(47,85,38,.13)]"
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0.01 : 1, delay: 0.35 }}
      onAnimationComplete={() => {
        window.setTimeout(() => onComplete?.(), bloomFinishedDelay);
      }}
    >
      <svg
        viewBox="25 0 330 372"
        role="img"
        aria-label="A bouquet of white lilies and eucalyptus leaves"
        className="h-auto w-full overflow-visible"
      >
        <defs>
          <linearGradient id="stem" x1="0" x2="1">
            <stop stopColor="#819B85" />
            <stop offset="1" stopColor="#2F5526" />
          </linearGradient>
          <linearGradient id="wrap" x1="0" x2="1">
            <stop stopColor="#E8CDAA" />
            <stop offset="1" stopColor="#B49D96" />
          </linearGradient>
        </defs>

        {leaves.map((leaf, index) => (
          <motion.g
            key={index}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ delay: leaf.delay, duration: 0.8 }}
          >
            <path
              d={`M${leaf.x1} ${leaf.y1} C${(leaf.x1 + leaf.x2) / 2} ${leaf.y1 - 50}, ${leaf.x2} ${leaf.y2 + 40}, ${leaf.x2} ${leaf.y2}`}
              stroke="url(#stem)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse
              cx={leaf.x2}
              cy={leaf.y2}
              rx="13"
              ry="31"
              transform={`rotate(${leaf.rotate} ${leaf.x2} ${leaf.y2})`}
              fill="#819B85"
              opacity="0.88"
            />
            <ellipse
              cx={leaf.x2 + (leaf.rotate > 0 ? 18 : -18)}
              cy={leaf.y2 + 28}
              rx="10"
              ry="24"
              transform={`rotate(${leaf.rotate} ${leaf.x2} ${leaf.y2})`}
              fill="#A3B4A5"
              opacity="0.82"
            />
          </motion.g>
        ))}

        <motion.path
          d="M176 298 C154 232 134 164 120 88"
          stroke="url(#stem)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        />
        <motion.path
          d="M176 298 C178 218 184 136 190 72"
          stroke="url(#stem)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.55, duration: 0.9 }}
        />
        <motion.path
          d="M176 298 C202 230 228 170 252 104"
          stroke="url(#stem)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        />

        {lilyGroups.map((lily) => (
          <Lily key={`${lily.x}-${lily.y}`} {...lily} />
        ))}

        <motion.path
          d="M116 282 L235 272 L220 348 L132 350 Z"
          fill="url(#wrap)"
          opacity="0.96"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        />
        <motion.path
          d="M125 292 C154 314 191 314 226 284"
          stroke="#F8F7F4"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.55, duration: 0.85, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}

export default LilyBouquet;
