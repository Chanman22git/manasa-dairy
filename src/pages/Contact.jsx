import { Btn, Reveal, SplitLine, useLang, useT, useTx } from "../ui.jsx";
import Shot from "../shot.jsx";
import { OFFICES, T, EMAIL } from "../data.js";

export default function Contact() {
  const { lang } = useLang();
  const t = useT();
  const tt = useTx();
  const te = lang === "te" ? "te" : "";

  return (
    <>
      <section className="wrap phead">
        <span className={`eyebrow ${te}`}>{t("contactEyebrow")}</span>
        <h1 key={lang} className={te}>
          <SplitLine text={T.contactH1[lang]} delay={0.1} />
        </h1>
        <div className="phead-rule" />
      </section>

      <section className="wrap sec">
        <div className={`offices ${OFFICES.length === 1 ? "offices-one" : ""}`}>
          {OFFICES.map((o, i) => (
            <Reveal key={o.phone} delay={i * 0.1}>
              <article className="office">
                <div className={`kind ${te}`}>{tt(o.kind)}</div>
                <h3 className={te}>{tt(o.city)}</h3>
                {/* address stays literal in both languages — it is postal data */}
                <p className="addr">
                  {o.addrLines.map((line) => (
                    <span key={line}>{line}<br /></span>
                  ))}
                </p>
                <div className="meta">
                  <a href={`tel:${o.phoneTel}`}>{o.phone}</a>
                  <a href={`mailto:${o.email}`}>{o.email}</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <figure className="belt">
            <Shot slot="md-map" ratio="21 / 9" parallax={24} />
            <figcaption className={te}>
              {t("beltCaption")}
              <span>{t("mapTodo")}</span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="band">
        <div className="wrap band-in">
          <div>
            <h3 className={te}>{t("fasterThroughForm")}</h3>
          </div>
          <Btn to="/enquiry" variant="mint">{t("ftrBulk")}</Btn>
        </div>
      </section>
    </>
  );
}
