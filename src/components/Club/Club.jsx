import Reveal from "../Reveal/Reveal";
import CourtDiagram from "../CourtDiagram/CourtDiagram";
import { FEATURES } from "../../data/content";
import styles from "./Club.module.css";

export default function Club() {
  return (
    <section className={styles.club} id="club">
      <span className={`ghost-word ${styles.ghost}`} aria-hidden="true">
        Club
      </span>
      <div className={`wrap ${styles.layout}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">01 / The club</p>
          <h2>
            Built for the players who <em>keep showing up.</em>
          </h2>
          <p>
            KBC Badminton is a community club based in Camellia, Sydney —
            one home court, a regular crew, and a weekly timetable that
            mixes relaxed social games with proper training blocks.
          </p>
          <p>
            Whether you&rsquo;re chasing your first smash or your
            hundredth, there&rsquo;s a session for it: quieter daytime
            courts for steady rallies, and lit-up evening sessions when the
            pace picks up.
          </p>
        </Reveal>

        <Reveal className={styles.court}>
          <CourtDiagram />
        </Reveal>

        <ul className={styles.features}>
          {FEATURES.map((feature, i) => (
            <Reveal
              as="li"
              key={feature.title}
              className={`kcard ${i === 1 ? "kcard--blue" : ""} ${styles.feature}`}
              style={{ "--reveal-delay": `${i * 90}ms` }}
            >
              <span className={`mono ${styles.num}`}>0{i + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
