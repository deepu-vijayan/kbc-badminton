import Reveal from "../Reveal/Reveal";
import Button from "../Button/Button";
import { LINKS, PRICING, TIMETABLE } from "../../data/content";
import styles from "./Sessions.module.css";

export default function Sessions() {
  return (
    <section className={styles.sessions} id="sessions">
      <span className={`ghost-word ${styles.ghost}`} aria-hidden="true">
        On court
      </span>
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">03 / Sessions &amp; pricing</p>
          <h2>This week on court.</h2>
          <p>
            Four sessions a week, same courts. Book ahead online or pay on
            the day at member or guest rates.
          </p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.tableWrap}>
            <table className={styles.table}>
              <caption>Weekly timetable</caption>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Session</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {TIMETABLE.map((row, i) => (
                  <tr key={`${row.day}-${row.session}-${i}`}>
                    <td>
                      <span className={styles.dayTag}>{row.day}</span>
                    </td>
                    <td>{row.session}</td>
                    <td className={`${styles.time} mono`}>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <div className={styles.side}>
            <div className={styles.priceCards}>
              {PRICING.map((price, i) => (
                <Reveal
                  key={price.who}
                  style={{ "--reveal-delay": `${i * 90}ms` }}
                  className={[
                    "kcard",
                    price.highlight ? "" : "kcard--blue",
                    styles.priceCard,
                    price.highlight ? styles.highlight : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {price.highlight && <span className={styles.tag}>Best value</span>}
                  <div className={styles.who}>
                    {price.who}
                    <span>{price.note}</span>
                  </div>
                  <div className={styles.amount}>
                    {price.amount}
                    <sub className="mono">/session</sub>
                  </div>
                </Reveal>
              ))}
            </div>
            <Button
              variant="volt"
              className={styles.bookBtn}
              href={LINKS.booking}
              target="_blank"
              rel="noopener"
              arrow
            >
              Book your session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
