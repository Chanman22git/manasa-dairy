import { useState } from "react";
import { motion } from "motion/react";
import { Btn, Reveal, SplitLine, useLang, EASE } from "../ui.jsx";
import { Check } from "../art.jsx";
import { BUSINESS_TYPES, NEXT_STEPS, PHONE, EMAIL, T } from "../data.js";

const REQUIRED = ["business", "person", "phone"];

export default function Enquiry() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next = {};
    REQUIRED.forEach((k) => {
      if (!String(fd.get(k) || "").trim()) next[k] = "This field is required.";
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

  const field = (name, label, type = "text", required = false) => (
    <div className="field">
      <label htmlFor={name}>
        {label} {required && <span className="req">*</span>}
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
        <span className="err" id={`${name}-err`} role="alert">{errors[name]}</span>
      )}
    </div>
  );

  return (
    <section className="wrap phead" style={{ paddingBottom: 110 }}>
      <span className="eyebrow">Bulk &amp; distributor enquiry</span>
      <div className="eq-grid" style={{ marginTop: 8 }}>
        <div>
          <h1 key={lang} className={lang === "te" ? "te" : undefined}>
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
              <h2>Received — thank you.</h2>
              <p>
                A rate card and route availability for your area will reach you within two
                working days. For anything urgent, call{" "}
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} style={{ color: "var(--g-accent)" }}>{PHONE}</a>.
              </p>
            </motion.div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              {field("business", "Business name", "text", true)}
              {field("person", "Contact person", "text", true)}
              {field("phone", "Phone", "tel", true)}
              {field("email", "Email", "email")}

              <div className="field">
                <label htmlFor="type">Business type</label>
                <select id="type" name="type" defaultValue="">
                  <option value="" disabled>Select…</option>
                  {BUSINESS_TYPES.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              {field("city", "City / area")}

              <div className="field full">
                <label htmlFor="qty">Products &amp; approximate daily quantity</label>
                <textarea
                  id="qty"
                  name="qty"
                  placeholder="e.g. 120 L toned milk, 15 kg paneer, 5 L ghee weekly"
                />
              </div>

              <div className="form-foot">
                <Btn type="submit" variant="solid">Send enquiry</Btn>
                <span className="note">We reply within two working days.</span>
              </div>
            </form>
          )}
        </div>

        <Reveal delay={0.2}>
          <aside className="aside">
            <h2>What happens next</h2>
            <ol>
              {NEXT_STEPS.map((s) => (
                <li key={s.n}>
                  <span className="n">{s.n}</span>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
            <div className="direct">
              <div className="lbl">Or reach us directly</div>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
