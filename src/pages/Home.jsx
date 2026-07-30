import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Btn, Counter, Head, Reveal, SplitLine, SplitReveal, Tr, useLang, EASE,
} from "../ui.jsx";
import { Arrow } from "../art.jsx";
import Shot from "../shot.jsx";
import { CATS, STATS, STEPS, PHONE, T } from "../data.js";

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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const artOp = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.35]);

  const marqItems = [
    "Toned Milk", "పాలు", "Premium Cow Ghee", "నెయ్యి", "Paneer", "పనీర్",
    "Set Curd", "పెరుగు", "White Butter", "వెన్న", "Buffalo Ghee",
  ];
  const marqGroup = (
    <div className="marq-group" style={{ display: "flex" }} aria-hidden="true">
      {marqItems.map((t, i) => (
        <span key={`${t}-${i}`}>
          <i />
          <span className={/[ఀ-౿]/.test(t) ? "te" : undefined}>{t}</span>
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
              className="eyebrow"
              initial={reduce ? false : { opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              Institutional dairy supply · Telangana
            </motion.span>

            <h1 key={lang}>
              <SplitLine text={T.homeH1a[lang]} delay={0.15} />
              <span className={`em ${lang === "te" ? "te" : ""}`}>
                <SplitLine text={T.homeH1b[lang]} delay={0.45} />
              </span>
            </h1>

            <motion.p
              className="hero-lede"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            >
              Twenty-eight years of collection from 4,200 farmer households across Medak
              and Siddipet — processed, tested and cold-chained for hotels, bakeries and
              sweet houses that cannot afford a variable batch.
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
            <Shot slot="md-hero" ratio="5 / 6" priority />
            <motion.div
              className="stat-plate"
              initial={reduce ? false : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            >
              <div className="n"><Counter to={4200} /></div>
              <div className="l">farmer households</div>
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
            <Reveal key={s.k} delay={i * 0.08} className="stat">
              <div className="v">
                {s.n === 1.8
                  ? <Counter to={1.8} decimals={1} suffix=" L" />
                  : <Counter to={s.n} suffix={s.suffix} />}
              </div>
              <div className="k">{s.k}</div>
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
            eyebrow="Three lines"
            title={T.whatWeSupply[lang]}
            right={<Link to="/products">All 9 SKUs →</Link>}
          />
          <div className="cats">
            {CATS.map((c, i) => {
              return (
                <Reveal key={c.key} delay={i * 0.12}>
                  <Link to="/products" className="cat">
                    <div className="cat-art">
                      <Shot slot={`md-cat-${c.key}`} ratio="4 / 5" plainCredit />
                    </div>
                    <div className="cat-name">
                      <h3>{c.name}</h3>
                      <span className="te">{c.te}</span>
                    </div>
                    <p>{c.blurb}</p>
                    <div className="skus">{c.skus}</div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- STORY ---------------- */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <Shot slot="md-story" ratio="4 / 5" parallax={28} />
          <div>
            <Reveal><span className="eyebrow">Our story</span></Reveal>
            <h2>
              <SplitReveal text="Two cans of milk, one bicycle, and a route that never missed a morning." />
            </h2>
            <Reveal delay={0.1}>
              <p>
                Manasa began in 1998 in Toopran, buying from eleven households and selling
                to the tea shops on the highway. The rule then is the rule now: pay the
                farmer the same day, and refuse the can that fails the test — however
                short the morning.
              </p>
              <p>
                Today three plants run the same discipline at 1.8 lakh litres a day, and
                the chefs who buy from us have, in many cases, been buying for a decade.
              </p>
              <Btn to="/story" variant="line">Read the full story</Btn>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="proc">
        <div className="wrap">
          <Head
            dark
            eyebrow="The route"
            title={T.processH2[lang]}
            right={<Link to="/quality">Quality protocol →</Link>}
          />
          <Pipeline still={reduce} />
          <div className="proc-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="proc-cell">
                  <div className="n">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
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
                <span className="eyebrow">For hotels, bakeries, sweet houses and caterers</span>
                <h2>
                  <SplitReveal text="Tell us your daily volume. We'll send a rate card in two working days." />
                </h2>
                <p>
                  Contract pricing, dedicated route slots, and a named account manager from
                  the first delivery. Minimum order 50 litres or equivalent.
                </p>
              </div>
              <div className="enq-side">
                <Btn to="/enquiry" variant="solid">Start a bulk enquiry</Btn>
                <span className="call">
                  or call <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
