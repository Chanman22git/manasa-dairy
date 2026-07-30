import { useState } from "react";
import { motion } from "motion/react";
import { Btn, Reveal, SplitLine, useLang, useT, useTx, EASE } from "../ui.jsx";
import { Check } from "../art.jsx";
import { BUSINESS_TYPES, NEXT_STEPS, PHONE, EMAIL, T } from "../data.js";

const REQUIRED = ["business", "person", "phone"];

export default function Enquiry() {
  const { lang } = useLang();
  const t = useT();
  const tt = useTx();
  const te = lang === "te" ? "te" : "";
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next = {};
    REQUIRED.forEach((k) => {
      if (!String(fd.get(k) || "").trim()) next[k] = t("fRequired");
    });
    setErrors(next);
    if (Object.keys(next).length) {
      const first = e.currentTarget.querySelector(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const field = (name, labelKey, type = "text", required = false) => (
    <div className="field">
      <label htmlFor={name} className={te}>
        {t(labelKey)} {required && <span className="req">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={
          name === "phone" ? "tel" : name === "email" ? "email" : name === "person" ? "name" : "off"
        }
        inputMode={type === "tel" ? "tel" : undefined}
        aria-invalid={errors[name] ? "true" : undefined}
        aria-describedby={errors[name] ? `${name}-err` : undefined}
      />
      {errors[name] && (
        <span className={`err ${te}`} id={`${name}-err`} role="alert">{errors[name]}</span>
      )}
    </div>
  );

  return (
    <section className="wrap phead" style={{ paddingBottom: 110 }}>
      <span className={`eyebrow ${te}`}>{t("enquiryEyebrow")}</span>
      <div className="eq-grid" style={{ marginTop: 8 }}>
        <div>
          <h1 key={lang} className={te}>
            <SplitLine text={T.enquiryH1[lang]} delay={0.1} />
          </h1>

          {sent ? (
            <motion.div
              className="sent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              role="status"
            >
              <Check className="tick" aria-hidden="true" />
              <h2 className={te}>{t("sentH2")}</h2>
              <p className={te}>
                {t("sentPa")}{" "}
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} style={{ color: "var(--g-accent)" }}>{PHONE}</a>.
              </p>
            </motion.div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              {field("business", "fBusiness", "text", true)}
              {field("person", "fPerson", "text", true)}
              {field("phone", "fPhone", "tel", true)}
              {field("email", "fEmail", "email")}

              <div className="field">
                <label htmlFor="type" className={te}>{t("fType")}</label>
                <select id="type" name="type" defaultValue="" className={te}>
                  <option value="" disabled>{t("fSelect")}</option>
                  {BUSINESS_TYPES.map((b) => (
                    <option key={b.en} value={b.en}>{tt(b)}</option>
                  ))}
                </select>
              </div>

              {field("city", "fCity")}

              <div className="field full">
                <label htmlFor="qty" className={te}>{t("fQty")}</label>
                <textarea
                  id="qty"
                  name="qty"
                  className={te}
                  placeholder={t("fQtyPlaceholder")}
                />
              </div>

              <div className="form-foot">
                <Btn type="submit" variant="solid">{t("sendEnquiry")}</Btn>
                <span className={`note ${te}`}>{t("replyNote")}</span>
              </div>
            </form>
          )}
        </div>

        <Reveal delay={0.2}>
          <aside className="aside">
            <h2 className={te}>{t("whatHappensNext")}</h2>
            <ol>
              {NEXT_STEPS.map((s) => (
                <li key={s.n}>
                  <span className="n">{s.n}</span>
                  <p className={te}>{tt(s.d)}</p>
                </li>
              ))}
            </ol>
            <div className="direct">
              <div className={`lbl ${te}`}>{t("reachDirectly")}</div>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
