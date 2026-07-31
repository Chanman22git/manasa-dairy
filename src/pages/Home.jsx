import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Btn, Counter, Head, Reveal, SplitLine, SplitReveal, Tr, useLang, useT, useTx, EASE,
} from "../ui.jsx";
import { Arrow } from "../art.jsx";
import Shot from "../shot.jsx";
import { CATS, STATS, STEPS, PHONE, PHONE_TEL, T } from "../data.js";

/* ---- the hero art: the farmland dissolving into the branded glass ----
 *
 * Two frames stacked in one box, cross-dissolving on a slow cycle — the
 * source (4,200 households) reading as the cause of the glass. Each frame
 * carries its own plate, on opposite sides of the picture, dissolving on
 * the same clock. Held still under prefers-reduced-motion: the farmland
 * frame simply stays.
 */
const HERO_HOLD = 4.4; // seconds a frame rests
const HERO_FADE = 1.9; // seconds of cross-dissolve

const plateFade = (entering) => ({
  duration: HERO_FADE / 2,
  delay: entering ? HERO_FADE / 2 : 0,
  ease: "easeInOut",
});

function useHeroFrame(still) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    if (still) return;
    const id = setInterval(
      () => setFrame((f) => (f === 0 ? 1 : 0)),
      (HERO_HOLD + HERO_FADE) * 1000
    );
    return () => clearInterval(id);
  }, [still]);
  return frame;
}

/* ---- the animated pipeline that heads the process band ---- */
function Pipeline({ still }) {
  return (
    <svg viewBox="0 0 1200 90" className="proc-pipe" aria-hidden="true">
      <path d="M20 45h1160" stroke="rgba(245,243,237,0.2)" strokeWidth="1" fill="none" />
      {[0, 1, 2, 3].map((i) => {
        const x = 170 + i * 290;
        return (
          <g key={i}>
            <circle cx={x} cy="45" r="7" fill="#0E3A20" stroke="#2F7D4B" strokeWidth="1.4" />
            <motion.circle
              cx={x} cy="45" r="7" fill="none" stroke="#2F7D4B" strokeWidth="1.2"
              animate={still ? {} : { r: [7, 22], opacity: [0.9, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.7, ease: "easeOut" }}
            />
          </g>
        );
      })}
      {[0, 1].map((i) => (
        <motion.circle
          key={`d${i}`} r="5" fill="#A8CDB2" cy="45"
          animate={still ? {} : { cx: [20, 1180], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: i * 3.5, ease: "linear" }}
        />
      ))}
    </svg>
  );
}

export default function Home() {
  const reduce = useReducedMotion();
  const { lang } = useLang();
  const t = useT();
  const tt = useTx();
  const te = lang === "te" ? "te" : "";
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const artOp = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.35]);
  const frame = useHeroFrame(reduce);

  const marqItems = [
    "Toned Milk", "పాలు", "Premium Cow Ghee", "నెయ్యి", "Paneer", "పనీర్",
    "Set Curd", "పెరుగు", "White Butter", "వెన్న", "Buffalo Ghee",
  ];
  const marqGroup = (
    <div className="marq-group" style={{ display: "flex" }} aria-hidden="true">
      {marqItems.map((s, i) => (
        <span key={`${s}-${i}`}>
          <i />
          <span className={/[ఀ-౿]/.test(s) ? "te" : undefined}>{s}</span>
        </span>
      ))}
    </div>
  );

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero" ref={heroRef}>
        <div className="wrap hero-grid">
          <div>
            <motion.span
              className={`eyebrow ${te}`}
              initial={reduce ? false : { opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              {t("heroEyebrow")}
            </motion.span>

            <h1 key={lang} className={te}>
              <SplitLine text={T.homeH1a[lang]} delay={0.15} />
              <span className="em">
                <SplitLine text={T.homeH1b[lang]} delay={0.45} />
              </span>
            </h1>

            <motion.p
              className={`hero-lede ${te}`}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            >
              {t("heroLede")}
            </motion.p>

            <motion.div
              className="hero-btns"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
            >
              <Btn to="/enquiry" variant="solid"><Tr k="rateCard" /></Btn>
              <Btn to="/products" variant="line"><Tr k="seeRange" /></Btn>
            </motion.div>
          </div>

          <motion.div className="hero-art" style={{ y: artY, opacity: artOp }}>
            <div className="hero-frames">
              <Shot slot="md-hero" ratio="5 / 6" priority />
              <motion.div
                className="hero-frame-top"
                initial={false}
                animate={{ opacity: frame === 1 ? 1 : 0 }}
                transition={{ duration: HERO_FADE, ease: "easeInOut" }}
                aria-hidden={frame !== 1}
              >
                <Shot slot="md-hero-glass" ratio="5 / 6" priority />
              </motion.div>
            </div>

            {/* Each plate belongs to its own frame and sits on its own side,
                so the dissolve carries the composition across the picture.
                The outer element only holds the entrance slide; the face
                inside it is the visible plate, and that is what dissolves. */}
            <motion.div
              className="stat-plate"
              initial={reduce ? false : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            >
              <motion.div
                className="plate-face"
                initial={false}
                animate={{ opacity: frame === 0 ? 1 : 0 }}
                transition={plateFade(frame === 0)}
                aria-hidden={frame !== 0}
              >
                <div className="n"><Counter to={4200} /></div>
                <div className={`l ${te}`}>{t("farmerHouseholds")}</div>
              </motion.div>
            </motion.div>

            <motion.div
              className="stat-plate right"
              initial={reduce ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            >
              <motion.div
                className="plate-face"
                initial={{ opacity: 0 }}
                animate={{ opacity: frame === 1 ? 1 : 0 }}
                transition={plateFade(frame === 1)}
                aria-hidden={frame !== 1}
              >
                <div className={`n line ${te}`}>{t("farmToGlass")}</div>
                <div className={`l ${te}`}>{t("nothingAdded")}</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <div className="marq">
        <div className="marq-track">
          {marqGroup}
          {marqGroup}
        </div>
      </div>

      {/* ---------------- STATS ---------------- */}
      <section className="stats">
        <div className="wrap stats-in">
          {STATS.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.08} className="stat">
              <div className="v">
                {s.n === 1.8
                  ? <Counter to={1.8} decimals={1} suffix=" L" />
                  : <Counter to={s.n} suffix={tt(s.suffix)} />}
              </div>
              <div className={`k ${te}`}>{tt(s.k)}</div>
              <motion.div
                className="stat-bar"
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: EASE }}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- WHAT WE SUPPLY ---------------- */}
      <section className="sec">
        <div className="wrap">
          <Head
            eyebrow={T.threeLines}
            title={T.whatWeSupply[lang]}
            right={<Link to="/products">{t("allNineSkus")}</Link>}
          />
          <div className="cats">
            {CATS.map((c, i) => (
              <Reveal key={c.key} delay={i * 0.12}>
                <Link to="/products" className="cat">
                  <div className="cat-art">
                    <Shot slot={`md-cat-${c.key}`} ratio="4 / 5" plainCredit />
                  </div>
                  <div className="cat-name">
                    <h3 className={te}>{tt(c.name)}</h3>
                    {lang === "en" && <span className="te">{c.te}</span>}
                  </div>
                  <p className={te}>{tt(c.blurb)}</p>
                  <div className={`skus ${te}`}>{tt(c.skus)}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- STORY ---------------- */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <Shot slot="md-story" ratio="4 / 5" parallax={28} />
          <div>
            <Reveal><span className={`eyebrow ${te}`}>{t("ourStory")}</span></Reveal>
            <h2 className={te} key={lang}>
              <SplitReveal text={t("homeStoryH2")} />
            </h2>
            <Reveal delay={0.1}>
              <p className={te}>{t("homeStoryP1")}</p>
              <p className={te}>{t("homeStoryP2")}</p>
              <Btn to="/story" variant="line"><Tr k="readFullStory" /></Btn>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="proc">
        <div className="wrap">
          <Head
            dark
            eyebrow={T.theRoute}
            title={T.processH2[lang]}
            right={<Link to="/quality">{t("qualityProtocolLink")}</Link>}
          />
          <Pipeline still={reduce} />
          <div className="proc-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="proc-cell">
                  <div className="n">{s.n}</div>
                  <h3 className={te}>{tt(s.t)}</h3>
                  <p className={te}>{tt(s.d)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ENQUIRY BAND ---------------- */}
      <section className="sec">
        <div className="wrap">
          <Reveal>
            <div className="enq-band">
              <div>
                <span className={`eyebrow ${te}`}>{t("enqEyebrow")}</span>
                <h2 className={te} key={lang}>
                  <SplitReveal text={t("enqBandH2")} />
                </h2>
                <p className={te}>{t("enqBandP")}</p>
              </div>
              <div className="enq-side">
                <Btn to="/enquiry" variant="solid"><Tr k="startEnquiry" /></Btn>
                <span className={`call ${te}`}>
                  {t("orCall")}{" "}
                  <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
