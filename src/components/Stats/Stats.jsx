import Reveal from "../Reveal/Reveal";
import { STATS } from "../../data/content";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={`wrap ${styles.grid}`}>
        {STATS.map((stat, i) => (
          <Reveal
            className={`kcard ${i % 2 ? "kcard--blue" : ""} ${styles.stat}`}
            key={stat.label}
            style={{ "--reveal-delay": `${i * 80}ms` }}
          >
            <span className={`mono ${styles.index}`}>0{i + 1}</span>
            <div className={styles.num} data-value={stat.value}>
              {stat.value}
            </div>
            <div className={styles.label}>{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
