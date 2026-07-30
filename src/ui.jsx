/* Shared motion primitives and chrome. */

import {
  createContext, Fragment, useContext, useEffect, useRef, useState,
} from "react";
import {
  motion, useAnimationFrame, useInView, useMotionValue,
  useReducedMotion, useSpring, useScroll, useTransform,
} from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { CowMark, Arrow } from "./art.jsx";
import { T, PHONE } from "./data.js";

export const EASE = [0.22, 1, 0.36, 1];

/* ---------------- language ---------------- */
const LangCtx = createContext({ lang: "en", setLang: () => {} });
export const useLang = () => useContext(LangCtx);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("manasa-lang") || "en"; } catch { return "en"; }
  });
  useEffect(() => {
    try { localStorage.setItem("manasa-lang", lang); } catch { /* ignore */ }
  }, [lang]);
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

/** Translated string for a key in data.T */
export function Tr({ k }) {
  const { lang } = useLang();
  const v = T[k];
  if (!v) return null;
  return <span className={lang === "te" ? "te" : undefined}>{v[lang]}</span>;
}
export function useT() {
  const { lang } = useLang();
  return (k) => (T[k] ? T[k][lang] : "");
}

/* ---------------- reveal helpers ---------------- */
export function Reveal({ children, delay = 0, y = 30, className, once = true }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Word spans are separated by real space text nodes, not CSS margin —
   otherwise the heading is announced and copied as one run-on word. */
function Words({ words, duration }) {
  return words.map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      <span className="wordmask">
        <motion.span
          className="word"
          variants={{
            hidden: { y: "110%", opacity: 0 },
            show: { y: "0%", opacity: 1, transition: { duration, ease: EASE } },
          }}
        >
          {w}
        </motion.span>
      </span>
      {i < words.length - 1 ? " " : null}
    </Fragment>
  ));
}

/** Headline that reveals word-by-word from behind a mask. */
export function SplitLine({ text, className, delay = 0, el = "span" }) {
  const reduce = useReducedMotion();
  const words = String(text).split(" ");
  const El = motion[el] || motion.span;
  if (reduce) return <span className={className}>{text}</span>;
  return (
    <El
      className={className}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
    >
      <Words words={words} duration={0.85} />
    </El>
  );
}

/** Same reveal, but triggered on scroll into view. */
export function SplitReveal({ text, className, delay = 0 }) {
  const reduce = useReducedMotion();
  const words = String(text).split(" ");
  if (reduce) return <span className={className}>{text}</span>;
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: delay } } }}
    >
      <Words words={words} duration={0.8} />
    </motion.span>
  );
}

/* ---------------- counter ---------------- */
export function Counter({ to, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);
  const start = useRef(null);

  useAnimationFrame((t) => {
    if (!inView || reduce || val >= to) return;
    if (start.current === null) start.current = t;
    const p = Math.min((t - start.current) / 1600, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    setVal(to * eased);
  });

  const shown = decimals > 0
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString("en-IN");

  return <span ref={ref}>{shown}{suffix}</span>;
}

/* ---------------- magnetic button ---------------- */
export function Magnetic({ children, className, strength = 0.32, ...rest }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });

  const onMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-flex" }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- custom cursor ---------------- */
export function Cursor() {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(false);
  const [hot, setHot] = useState(false);
  const x = useSpring(useMotionValue(-100), { stiffness: 700, damping: 40, mass: 0.35 });
  const y = useSpring(useMotionValue(-100), { stiffness: 700, damping: 40, mass: 0.35 });

  useEffect(() => {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    setOn(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target;
      setHot(!!(t.closest && t.closest("a,button,[data-hot],input,select,textarea")));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  if (!on) return null;
  return (
    <motion.div className="cursor" style={{ x, y }} aria-hidden="true">
      <motion.span
        className="cursor-dot"
        animate={{ scale: hot ? 3.4 : 1, opacity: hot ? 0.25 : 1 }}
        transition={{ duration: 0.28, ease: EASE }}
      />
    </motion.div>
  );
}

/* ---------------- scroll progress ---------------- */
export function ScrollRail() {
  const { scrollYProgress } = useScroll();
  const sy = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });
  return <motion.div className="rail" style={{ scaleX: sy }} aria-hidden="true" />;
}

/* ---------------- parallax wrapper ---------------- */
export function Parallax({ children, amount = 60, className }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/* ---------------- buttons ---------------- */
export function Btn({ to, href, children, variant = "solid", onClick, type }) {
  const cls = `btn btn-${variant}`;
  const inner = (
    <>
      <span>{children}</span>
      <Arrow className="btn-arrow" aria-hidden="true" />
    </>
  );
  if (to) return <Magnetic><Link className={cls} to={to}>{inner}</Link></Magnetic>;
  if (href) return <Magnetic><a className={cls} href={href}>{inner}</a></Magnetic>;
  return (
    <Magnetic>
      <button className={cls} onClick={onClick} type={type || "button"}>{inner}</button>
    </Magnetic>
  );
}

/* ---------------- section heading ---------------- */
export function Head({ eyebrow, title, right, dark }) {
  return (
    <div className={`head ${dark ? "head-dark" : ""}`}>
      <div>
        <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
        <h2><SplitReveal text={title} delay={0.08} /></h2>
      </div>
      {right && <Reveal delay={0.15} className="head-right">{right}</Reveal>}
    </div>
  );
}

/* ---------------- header ---------------- */
const NAV = [
  { to: "/products", k: "navProducts" },
  { to: "/quality", k: "navQuality" },
  { to: "/story", k: "navStory" },
  { to: "/contact", k: "navContact" },
];

export function Header() {
  const { lang, setLang } = useLang();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 10);
    s();
    window.addEventListener("scroll", s, { passive: true });
    return () => window.removeEventListener("scroll", s);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.header
      className={`hdr ${scrolled ? "is-scrolled" : ""}`}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {/* floating translucent bar */}
      <div className="hdr-shell">
        <div className="hdr-in">
          <Link to="/" className="lockup" aria-label="Manasa Dairy, home">
            <span className="lockup-mark">
              {/* BASE_URL, not "/" — the site is served from a repo subpath */}
              <img
                src={`${import.meta.env.BASE_URL}manasa-logo.jpeg`}
                alt=""
                width="44"
                height="44"
              />
            </span>
            <span className="lockup-txt">
              <span className="l1">Taste the best</span>
              <span className="l2">EST. 1998 · TELANGANA</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`nav-a ${pathname === n.to ? "is-active" : ""}`}
              >
                <Tr k={n.k} />
              </Link>
            ))}
          </nav>

          <div className="hdr-right">
            <div className="pill" role="group" aria-label="Language">
              <button
                className={lang === "en" ? "on" : ""}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
              >EN</button>
              <button
                className={`te ${lang === "te" ? "on" : ""}`}
                onClick={() => setLang("te")}
                aria-pressed={lang === "te"}
              >తెలుగు</button>
            </div>
            <Magnetic>
              <Link to="/enquiry" className="hdr-cta"><Tr k="bulkEnquiry" /></Link>
            </Magnetic>
            <button
              className="burger"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span /><span />
            </button>
          </div>
        </div>

        {/* CSS-only open/close (grid-template-rows) so the mobile nav never
            depends on an animation frame to become usable */}
        <div className={`drawer ${open ? "is-open" : ""}`} inert={!open}>
          <div className="drawer-clip">
            <div className="drawer-in">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="drawer-a"><Tr k={n.k} /></Link>
              ))}
              <Link to="/enquiry" className="drawer-a drawer-cta"><Tr k="bulkEnquiry" /></Link>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

/* ---------------- footer ---------------- */
export function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr-in">
        <div className="ftr-grid">
          <div className="ftr-brand">
            <CowMark className="ftr-mark" aria-hidden="true" />
            <p className="ftr-name">Manasa Dairy</p>
            <p className="ftr-addr">Toopran, Medak District,<br />Telangana 502334</p>
          </div>
          <div className="ftr-col">
            <h4>Range</h4>
            <Link to="/products">Milk</Link>
            <Link to="/products">Ghee</Link>
            <Link to="/products">Fresh dairy</Link>
          </div>
          <div className="ftr-col">
            <h4>Company</h4>
            <Link to="/story">Our story</Link>
            <Link to="/quality">Quality &amp; plants</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="ftr-col">
            <h4>Trade</h4>
            <Link to="/enquiry">Bulk enquiry</Link>
            <Link to="/enquiry">Become a distributor</Link>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
          </div>
        </div>
        <div className="ftr-bot">
          <span>© 2026 Manasa Dairy Products Pvt. Ltd.</span>
          <span>FSSAI 10014042000123 · ISO 22000:2018</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- page transition curtain ---------------- */
export function PageShell({ children }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
