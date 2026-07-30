/* Brand mark and utility glyphs. Photography lives in shot.jsx / images.js. */

import { motion } from "motion/react";

const L = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  vectorEffect: "non-scaling-stroke",
};

/* ---------- the cow mark, redrawn from the logo ---------- */
export function CowMark(props) {
  return (
    <svg viewBox="0 0 64 52" {...props}>
      <path {...L} d="M12 8l6 5c4-2 8-3 14-3s10 1 14 3l6-5-1 12c0 12-8 21-19 21S13 32 13 20L12 8Z" />
      <path {...L} d="M13 14c-4-1-7 1-8 4s1 6 5 6M51 14c4-1 7 1 8 4s-1 6-5 6" />
      <path {...L} d="M26 22c0 1.5-1 2.5-2.5 2.5S21 23.5 21 22M43 22c0 1.5-1 2.5-2.5 2.5S38 23.5 38 22" />
      <path {...L} d="M25 33h14c0 4-3 6.5-7 6.5S25 37 25 33Z" />
      <path {...L} d="M29 33v-2M35 33v-2" opacity="0.6" />
    </svg>
  );
}

/* ---------- small utility glyphs ---------- */
export const Arrow = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...p}>
    <path {...L} d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const Drop = (p) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path {...L} d="M12 3s7 8 7 12a7 7 0 0 1-14 0c0-4 7-12 7-12Z" />
  </svg>
);

export const Check = (p) => (
  <svg viewBox="0 0 24 24" {...p}>
    <motion.path
      d="M4 12.5l5.5 5.5L20 7"
      fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    />
  </svg>
);
