import { Btn, Reveal, SplitLine, useLang } from "../ui.jsx";
import Shot from "../shot.jsx";
import { GROUPS, T } from "../data.js";
import { PRODUCT_SLOTS } from "../images.js";

export default function Products() {
  const { lang } = useLang();
  /* running index across all three groups → md-p1 … md-p9 */
  let slotIndex = -1;

  return (
    <>
      <section className="wrap phead">
        <span className="eyebrow">The range</span>
        <h1 key={lang} className={lang === "te" ? "te" : undefined}>
          <SplitLine text={T.productsH1[lang]} delay={0.1} />
        </h1>
        <Reveal delay={0.3}>
          <p className="intro">
            Nine SKUs across three lines, all available in institutional pack sizes.
            Specifications below are batch guarantees, not typical values — every tanker
            carries its own analysis sheet.
          </p>
        </Reveal>
        <div className="phead-rule" />
      </section>

      <section className="wrap sec">
        {GROUPS.map((g) => {
          return (
            <div className="pgroup" key={g.name}>
              <Reveal>
                <div className="pgroup-head">
                  <h2>{g.name}</h2>
                  <span className="te">{g.te}</span>
                  <span className="rule" />
                  <span className="cnt">{g.count}</span>
                </div>
              </Reveal>

              <div className="pcards">
                {g.items.map((p, i) => {
                  slotIndex += 1;
                  return (
                  <Reveal key={p.name} delay={i * 0.09}>
                    <article className="pcard">
                      <div className="pcard-art">
                        <Shot slot={PRODUCT_SLOTS[slotIndex]} ratio="1 / 1" alt={`${p.name} — ${p.packs}.`} />
                      </div>
                      <div className="pcard-body">
                        <h3>{p.name}</h3>
                        <span className="te">{p.te}</span>
                        <dl className="specs">
                          <div className="spec-row"><dt>Spec</dt><dd>{p.spec}</dd></div>
                          <div className="spec-row"><dt>Packs</dt><dd>{p.packs}</dd></div>
                          <div className="spec-row"><dt>Shelf</dt><dd>{p.shelf}</dd></div>
                        </dl>
                        <p className="use">{p.use}</p>
                      </div>
                    </article>
                  </Reveal>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <section className="band">
        <div className="wrap band-in">
          <div>
            <h3>Need a private-label or custom fat profile?</h3>
            <p>We run dedicated batches from 500 litres upward.</p>
          </div>
          <Btn to="/enquiry" variant="mint">Talk to us</Btn>
        </div>
      </section>
    </>
  );
}
