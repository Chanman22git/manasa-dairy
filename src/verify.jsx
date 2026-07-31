/* <VerifyFloater> — the persistent route into batch verification.
 *
 * Sits in the bottom-right corner on every page. It starts as a labelled
 * pill and collapses to the glyph alone once you have scrolled past the
 * first screen, the same move the header makes at .hdr.is-scrolled. Tapping
 * it opens a card that says what verification is before sending you to the
 * page — a bare QR glyph on its own explains nothing.
 *
 * Bottom-right, not an edge tab: on a phone this is a one-handed action, and
 * the QR on the pack is the primary way in.
 */

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Arrow, Close, QrMark } from "./art.jsx";
import { useLang, useT, EASE } from "./ui.jsx";

export default function VerifyFloater() {
  const reduce = useReducedMotion();
  const { lang } = useLang();
  const t = useT();
  const te = lang === "te" ? "te" : "";
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const rootRef = useRef(null);

  /* collapse to the glyph once the first screen is behind you */
  useEffect(() => {
    const s = () => setCompact(window.scrollY > 320);
    s();
    window.addEventListener("scroll", s, { passive: true });
    return () => window.removeEventListener("scroll", s);
  }, []);

  /* close on route change, on Escape, and on a click outside the card */
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const key = (e) => { if (e.key === "Escape") setOpen(false); };
    const away = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("keydown", key);
    window.addEventListener("pointerdown", away);
    return () => {
      window.removeEventListener("keydown", key);
      window.removeEventListener("pointerdown", away);
    };
  }, [open]);

  /* the floater is the way in to the page — no point offering it on the page */
  if (pathname === "/verify") return null;

  const label = t("verifyFloat");

  return (
    <div className="vfl" ref={rootRef}>
      <AnimatePresence>
        {open && (
          <motion.div
            className="vfl-card"
            id="vfl-card"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.32, ease: EASE }}
          >
            <button
              className="vfl-x"
              onClick={() => setOpen(false)}
              aria-label={t("verifyClose")}
            >
              <Close width="14" height="14" aria-hidden="true" />
            </button>
            <span className={`eyebrow ${te}`}>{t("verifyEyebrow")}</span>
            <h3 className={te}>{t("verifyCardH")}</h3>
            <p className={te}>{t("verifyCardP")}</p>
            <Link to="/verify" className={`vfl-go ${te}`}>
              {t("verifyCta")}
              <Arrow width="14" height="14" aria-hidden="true" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`vfl-btn ${compact && !open ? "is-compact" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="vfl-card"
        aria-label={open ? t("verifyClose") : t("verifyOpen")}
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4, ease: EASE }}
      >
        <QrMark className="vfl-qr" width="21" height="21" aria-hidden="true" />
        {/* the label collapses by width, so the glyph never moves */}
        <span className={`vfl-label ${te}`}>{label}</span>
      </motion.button>
    </div>
  );
}
