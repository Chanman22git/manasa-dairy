import { Btn, Reveal, SplitLine, useLang, useT, useTx } from "../ui.jsx";
import Shot from "../shot.jsx";
import { GROUPS, T } from "../data.js";
import { PRODUCT_SLOTS } from "../images.js";

export default function Products() {
  const { lang } = useLang();
  const t = useT();
  const tt = useTx();
  const te = lang === "te" ? "te" : "";
  /* running index across all three groups → md-p1 … md-p9 */
  let slotIndex = -1;

  return (
    <>
      <section className="wrap phead">
        <span className={`eyebrow ${te}`}>{t("productsH1")}</span>
        <h1 key={lang} className={te}>
          <SplitLine text={T.productsH1[lang]} delay={0.1} />
        </h1>
        <Reveal delay={0.3}>
          <p className={`intro ${te}`}>{t("productsIntro")}</p>
        </Reveal>
        <div className="phead-rule" />
      </section>

      <section className="wrap sec">
        {GROUPS.map((g) => (
          <div className="pgroup" key={g.art}>
            <Reveal>
              <div className="pgroup-head">
                <h2 className={te}>{tt(g.name)}</h2>
                {lang === "en" && <span className="te">{g.te}</span>}
                <span className="rule" />
                <span className={`cnt ${te}`}>{tt(g.count)}</span>
              </div>
            </Reveal>

            <div className="pcards">
              {g.items.map((p, i) => {
                slotIndex += 1;
                return (
                  <Reveal key={p.teName} delay={i * 0.09}>
                    <article className="pcard">
                      <div className="pcard-art">
                        <Shot
                          slot={PRODUCT_SLOTS[slotIndex]}
                          ratio="1 / 1"
                          alt={`${tt(p.name)} — ${tt(p.packs)}.`}
                        />
                      </div>
                      <div className="pcard-body">
                        <h3 className={te}>{tt(p.name)}</h3>
                        {lang === "en" && <span className="te">{p.teName}</span>}
                        <dl className="specs">
                          <div className="spec-row">
                            <dt className={te}>{t("specLabel")}</dt>
                            <dd className={te}>{tt(p.spec)}</dd>
                          </div>
                          <div className="spec-row">
                            <dt className={te}>{t("packsLabel")}</dt>
                            <dd className={te}>{tt(p.packs)}</dd>
                          </div>
                          <div className="spec-row">
                            <dt className={te}>{t("shelfLabel")}</dt>
                            <dd className={te}>{tt(p.shelf)}</dd>
                          </div>
                        </dl>
                        <p className={`use ${te}`}>{tt(p.use)}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="band">
        <div className="wrap band-in">
          <div>
            <h3 className={te}>{t("privateLabelH3")}</h3>
            <p className={te}>{t("privateLabelP")}</p>
          </div>
          <Btn to="/enquiry" variant="mint">{t("talkToUs")}</Btn>
        </div>
      </section>
    </>
  );
}
