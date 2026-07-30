import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, SplitLine, SplitReveal, useLang, EASE } from "../ui.jsx";
import Shot from "../shot.jsx";
import { PROTOCOL, PLANTS, CERTS, T } from "../data.js";

/* protocol rows draw a vertical progress line as you scroll past them */
function ProtocolList({ still }) {
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
              <h3>{p.t}</h3>
              <p>{p.d}</p>
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

  return (
    <>
      <section className="wrap phead">
        <span className="eyebrow">Quality &amp; manufacturing</span>
        <h1 key={lang} className={lang === "te" ? "te" : undefined} style={{ maxWidth: 900 }}>
          <SplitLine text={T.qualityH1[lang]} delay={0.1} />
        </h1>
        <Reveal delay={0.35}>
          <p className="intro">
            Every can is tested at the collection point, again at the dock, and a retained
            sample from each batch is held for the full shelf life. Rejected milk is paid
            for and returned — the farmer is never penalised for our standard.
          </p>
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
            <span className="eyebrow">Nineteen checks</span>
            <h2><SplitReveal text="The protocol, stage by stage" /></h2>
          </div>
          <ProtocolList still={reduce} />
        </div>
      </section>

      <section style={{ background: "var(--g-primary)", paddingBlock: 104 }}>
        <div className="wrap">
          <div className="head head-dark">
            <div>
              <Reveal><span className="eyebrow" style={{ color: "var(--mint)" }}>Capacity</span></Reveal>
              <h2><SplitReveal text="Plants &amp; capacity" /></h2>
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
                <h3>{p.name}</h3>
                <div className="since">{p.since}</div>
                <dl>
                  <div className="r"><dt>Capacity</dt><dd>{p.cap}</dd></div>
                  <div className="r"><dt>Lines</dt><dd>{p.lines}</dd></div>
                  <div className="r"><dt>Cold store</dt><dd>{p.cold}</dd></div>
                </dl>
              </motion.div>
            ))}
          </div>

          <div className="certs">
            {CERTS.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.08} className="cert">
                <div className="n">{c.n}</div>
                <div className="d">{c.d}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
