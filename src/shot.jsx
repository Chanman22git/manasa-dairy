/* <Shot> — a photography slot.
 *
 * Reserves its box via aspect-ratio (no CLS), lazy-loads below the fold,
 * fades in on decode, and keeps the site's motion: a reveal on scroll and a
 * slow zoom on hover. Renders the Unsplash credit the handoff requires;
 * the credit disappears automatically once a slot has no `credit` field
 * (i.e. once real photography replaces it).
 */

import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { IMAGES } from "./images.js";

const EASE = [0.22, 1, 0.36, 1];

export default function Shot({
  slot,
  ratio = "4 / 3",
  className = "",
  priority = false,
  parallax = 0,
  alt,
  /* set when the shot sits inside a link — an <a> inside an <a> is invalid
     HTML and swallows the card's own click, so the credit drops to text */
  plainCredit = false,
}) {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  const img = IMAGES[slot];
  if (!img) return null;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [parallax, -parallax]
  );

  return (
    <figure className={`shot ${className}`} ref={ref} style={{ aspectRatio: ratio }}>
      <motion.div
        className="shot-inner"
        style={!reduce && parallax ? { y } : undefined}
      >
        <motion.img
          src={img.src}
          alt={alt ?? img.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          draggable="false"
          style={img.pos ? { objectPosition: img.pos } : undefined}
          onLoad={() => setLoaded(true)}
          initial={false}
          animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.04 }}
          transition={{ duration: reduce ? 0 : 0.9, ease: EASE }}
        />
      </motion.div>

      {img.credit && (
        <figcaption className="shot-credit">
          {plainCredit ? (
            img.credit
          ) : (
            <a href={img.href} target="_blank" rel="noopener noreferrer nofollow">
              {img.credit}
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
