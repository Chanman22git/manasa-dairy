import { motion, useReducedMotion } from "motion/react";
import { Reveal, SplitLine, SplitReveal, useLang, useT, useTx, EASE } from "../ui.jsx";
import Shot from "../shot.jsx";
import { TIMELINE, T } from "../data.js";

export default function Story() {
  const reduce = useReducedMotion();
  const { lang } = useLang();
  const t = useT();
  const tt = useTx();
  const te = lang === "te" ? "te" : "";

  return (
    <>
      <section className="wrap phead">
        <span className={`eyebrow ${te}`}>{t("ourStory")}</span>
        <div className="hero-grid" style={{ alignItems: "center", marginTop: 8 }}>
          <div>
            <h1 key={lang} className={te}>
              <SplitLine text={T.storyH1[lang]} delay={0.1} />
            </h1>
            <Reveal delay={0.4}>
              <p className={`intro ${te}`}>{t("storyLede")}</p>
            </Reveal>
          </div>
          <Shot slot="md-about" ratio="4 / 5" parallax={26} />
        </div>
      </section>

      {/* ---------- timeline ---------- */}
      <section className="wrap sec">
        <div className="head">
          <div>
            <Reveal><span className={`eyebrow ${te}`}>{t("twentyEightYears")}</span></Reveal>
            <h2 className={te} key={lang}><SplitReveal text={t("timelineH2")} /></h2>
          </div>
        </div>

        <div className="tline">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.y}
              className="tcell"
              initial={reduce ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
            >
              <div className="y">{item.y}</div>
              <motion.div
                aria-hidden="true"
                style={{ height: 1, background: "var(--g-accent)", marginBottom: 18, transformOrigin: "left" }}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: EASE }}
              />
              <p className={te}>{tt(item.d)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- what the farmer gets ---------- */}
      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="split split-rev">
          <div>
            <Reveal><span className={`eyebrow ${te}`}>{t("otherSide")}</span></Reveal>
            <h2 className={te} key={lang}><SplitReveal text={t("farmerGetsH2")} /></h2>
            <Reveal delay={0.1}>
              <p className={te}>{t("farmerP1")}</p>
              <p className={te}>{t("farmerP2")}</p>
            </Reveal>
          </div>
          <Shot slot="md-farmer" ratio="4 / 3" parallax={26} />
        </div>
      </section>
    </>
  );
}
