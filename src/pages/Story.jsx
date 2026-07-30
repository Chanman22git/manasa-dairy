import { motion, useReducedMotion } from "motion/react";
import { Reveal, SplitLine, SplitReveal, useLang, EASE } from "../ui.jsx";
import Shot from "../shot.jsx";
import { TIMELINE, T } from "../data.js";

export default function Story() {
  const reduce = useReducedMotion();
  const { lang } = useLang();

  return (
    <>
      <section className="wrap phead">
        <span className="eyebrow">Our story</span>
        <div className="hero-grid" style={{ alignItems: "center", marginTop: 8 }}>
          <div>
            <h1 key={lang} className={lang === "te" ? "te" : undefined}>
              <SplitLine text={T.storyH1[lang]} delay={0.1} />
            </h1>
            <Reveal delay={0.4}>
              <p className="intro">
                Everything Manasa sells is decided before sunrise, in a village shed, on a
                weighing scale that either the farmer trusts or he doesn't. We have spent
                twenty-eight years making sure he does.
              </p>
            </Reveal>
          </div>
          <Shot slot="md-about" ratio="4 / 5" parallax={26} />
        </div>
      </section>

      {/* ---------- timeline ---------- */}
      <section className="wrap sec">
        <div className="head">
          <div>
            <Reveal><span className="eyebrow">Twenty-eight years</span></Reveal>
            <h2><SplitReveal text="How the route grew" /></h2>
          </div>
        </div>

        <div className="tline">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.y}
              className="tcell"
              initial={reduce ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
            >
              <div className="y">{t.y}</div>
              <motion.div
                aria-hidden="true"
                style={{ height: 1, background: "var(--g-accent)", marginBottom: 18, transformOrigin: "left" }}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: EASE }}
              />
              <p>{t.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- what the farmer gets ---------- */}
      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="split split-rev">
          <div>
            <Reveal><span className="eyebrow">The other side of the scale</span></Reveal>
            <h2><SplitReveal text="What the farmer gets" /></h2>
            <Reveal delay={0.1}>
              <p>
                Same-day payment into the account, at a rate posted on the shed wall every
                morning. Veterinary visits twice a month, subsidised feed against the milk
                bill, and no deduction for a rejected can that fails through no fault of
                the household.
              </p>
              <p>
                Sixty-one per cent of our supplying households are headed by women. Their
                milk built this company; we do not intend to be coy about it.
              </p>
            </Reveal>
          </div>
          <Shot slot="md-farmer" ratio="4 / 3" parallax={26} />
        </div>
      </section>
    </>
  );
}
