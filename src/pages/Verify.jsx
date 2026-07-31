/* Batch verification — a stub, but a stub at the right URL.
 *
 * The QR printed on a pack should encode /verify?batch=<code>, so arriving
 * from a scan lands here with the batch already known and the camera never
 * has to open. That contract is honoured now, while the page is still under
 * construction, so codes can go to print before the lookup is built.
 */

import { useSearchParams } from "react-router-dom";
import { Btn, Reveal, SplitLine, useLang, useT } from "../ui.jsx";
import { QrMark } from "../art.jsx";
import { T } from "../data.js";

export default function Verify() {
  const { lang } = useLang();
  const t = useT();
  const te = lang === "te" ? "te" : "";
  const [params] = useSearchParams();
  const batch = (params.get("batch") || "").trim().slice(0, 32);

  return (
    <>
      <section className="wrap phead">
        <span className={`eyebrow ${te}`}>{t("verifyEyebrow")}</span>
        <h1 key={lang} className={te}>
          <SplitLine text={T.verifyH1[lang]} delay={0.1} />
        </h1>
        <div className="phead-rule" />
      </section>

      <section className="wrap sec">
        <Reveal>
          <div className="vsoon">
            <QrMark className="vsoon-qr" aria-hidden="true" />
            <div>
              <h2 className={te}>{t("verifySoonH")}</h2>
              <p className={te}>{t("verifySoonP")}</p>

              {batch && (
                <div className="vsoon-batch">
                  <span className={`k ${te}`}>{t("verifyScanned")}</span>
                  {/* the code is machine data — never restyled by language */}
                  <span className="v">{batch}</span>
                </div>
              )}

              <p className={`vsoon-meanwhile ${te}`}>{t("verifyMeanwhile")}</p>
              <Btn to="/quality" variant="line">{t("verifyQualityLink")}</Btn>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
