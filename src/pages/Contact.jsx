import { Btn, Reveal, SplitLine, useLang } from "../ui.jsx";
import Shot from "../shot.jsx";
import { OFFICES, T } from "../data.js";

export default function Contact() {
  const { lang } = useLang();

  return (
    <>
      <section className="wrap phead">
        <span className="eyebrow">Contact</span>
        <h1 key={lang} className={lang === "te" ? "te" : undefined}>
          <SplitLine text={T.contactH1[lang]} delay={0.1} />
        </h1>
        <div className="phead-rule" />
      </section>

      <section className="wrap sec">
        <div className="offices">
          {OFFICES.map((o, i) => (
            <Reveal key={o.city} delay={i * 0.1}>
              <article className="office">
                <div className="kind">{o.kind}</div>
                <h3>{o.city}</h3>
                <p className="addr">{o.addr}</p>
                <div className="meta">
                  <a href={`tel:${o.phone.replace(/\s/g, "")}`}>{o.phone}</a>
                  <span className="hrs">{o.hours}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <figure className="belt">
            <Shot slot="md-map" ratio="21 / 9" parallax={24} />
            <figcaption>
              The collection belt — 46 bulk coolers across Medak and Siddipet.
              <span> An interactive map goes here once the plant coordinates are confirmed.</span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="band">
        <div className="wrap band-in">
          <div>
            <h3>Supply enquiries move faster through the form.</h3>
          </div>
          <Btn to="/enquiry" variant="mint">Bulk enquiry</Btn>
        </div>
      </section>
    </>
  );
}
