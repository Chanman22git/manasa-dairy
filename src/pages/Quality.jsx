import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, SplitLine, SplitReveal, useLang, useT, useTx, EASE } from "../ui.jsx";
import Shot from "../shot.jsx";
import { PROTOCOL, PLANTS, CERTS, T } from "../data.js";

/* protocol rows draw a vertical progress line as you scroll past them */
function ProtocolList({ still, te, tt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="prot-list" ref={ref} style={{ position: "relative" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute", left: 34, top: 0, bottom: 0, width: 1,
          background: "var(--line)",
        }}
      />
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute", left: 34, top: 0, width: 1,
          height: still ? "100%" : h,
          background: "var(--g-accent)",
          transformOrigin: "top",
        }}
      />
      {PROTOCOL.map((p, i) => (
        <Reveal key={p.n} delay={i * 0.06}>
          <div className="prot-row">
            <div className="n">{p.n}</div>
            <div>
              <h3 className={te}>{tt(p.t)}</h3>
              <p className={te}>{tt(p.d)}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Quality() {
  const reduce = useReducedMotion();
  const { lang } = useLang();
  const t = useT();
  const tt = useTx();
  const te = lang === "te" ? "te" : "";

  return (
    <>
      <section className="wrap phead">
        <span className={`eyebrow ${te}`}>{t("qualityEyebrow")}</span>
        <h1 key={lang} className={te} style={{ maxWidth: 900 }}>
          <SplitLine text={T.qualityH1[lang]} delay={0.1} />
        </h1>
        <Reveal delay={0.35}>
          <p className={`intro ${te}`}>{t("qualityIntro")}</p>
        </Reveal>
      </section>

      <section className="wrap" style={{ marginTop: 64 }}>
        <Reveal>
          <Shot slot="md-plant" ratio="21 / 9" parallax={30} />
        </Reveal>
      </section>

      <section className="wrap sec">
        <div className="qgrid">
          <div className="qsticky">
            <span className={`eyebrow ${te}`}>{t("nineteenChecks")}</span>
            <h2 className={te} key={lang}>
              <SplitReveal text={t("protocolH2")} />
            </h2>
          </div>
          <ProtocolList still={reduce} te={te} tt={tt} />
        </div>
      </section>

      <section style={{ background: "var(--g-primary)", paddingBlock: 104 }}>
        <div className="wrap">
          <div className="head head-dark">
            <div>
              <Reveal>
                <span className={`eyebrow ${te}`} style={{ color: "var(--mint)" }}>
                  {t("capacity")}
                </span>
              </Reveal>
              <h2 className={te} key={lang}>
                <SplitReveal text={t("plantsH2")} />
              </h2>
            </div>
          </div>

          <div className="plants">
            {PLANTS.map((p, i) => (
              <motion.div
                key={p.name}
                className="plant"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              >
                <h3 className={te}>{lang === "te" ? p.teName : p.name}</h3>
                <div className={`since ${te}`}>{tt(p.since)}</div>
                <dl>
                  <div className="r">
                    <dt className={te}>{t("capacityLabel")}</dt>
                    <dd className={te}>{tt(p.cap)}</dd>
                  </div>
                  <div className="r">
                    <dt className={te}>{t("linesLabel")}</dt>
                    <dd className={te}>{tt(p.lines)}</dd>
                  </div>
                  <div className="r">
                    <dt className={te}>{t("coldStoreLabel")}</dt>
                    <dd>{p.cold}</dd>
                  </div>
                </dl>
              </motion.div>
            ))}
          </div>

          <div className="certs">
            {CERTS.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.08} className="cert">
                <div className="n">{c.n}</div>
                <div className={`d ${te}`}>{tt(c.d)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
