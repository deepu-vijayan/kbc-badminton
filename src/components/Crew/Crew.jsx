import Reveal from "../Reveal/Reveal";
import { GROUP_PHOTO } from "../../data/content";
import styles from "./Crew.module.css";

// The whole club in one frame. The photo sits in a diagonal-cut neon
// frame with a blurred copy of itself behind it as ambient glow, so the
// blue club banner in the shot spills light onto the page.
export default function Crew() {
  return (
    <section className={styles.crew} id="crew">
      <span className={`ghost-word ${styles.ghost}`} aria-hidden="true">
        Crew
      </span>
      <div className={`wrap ${styles.layout}`}>
        <Reveal className={styles.head}>
          <p className="eyebrow">02 / The crew</p>
          <h2>
            One club. <em>Whole crew.</em>
          </h2>
        </Reveal>
        <Reveal className={styles.intro} style={{ "--reveal-delay": "120ms" }}>
          <p>
            Regulars, first-timers, juniors and veterans — this is who
            you&rsquo;ll be sharing courts with. Rackets down, snacks out,
            everyone in the shot.
          </p>
        </Reveal>

        <Reveal as="figure" className={styles.figure} style={{ "--reveal-delay": "160ms" }}>
          <img
            className={styles.glow}
            src={GROUP_PHOTO.src}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className={styles.frame}>
            <img
              className={styles.photo}
              src={GROUP_PHOTO.src}
              alt={GROUP_PHOTO.alt}
              width={GROUP_PHOTO.width}
              height={GROUP_PHOTO.height}
              loading="lazy"
              decoding="async"
            />
            <span className={styles.sweep} aria-hidden="true" />
          </div>
          <figcaption className={styles.caption}>
            <span className="mono">{GROUP_PHOTO.caption}</span>
            <span className={`mono ${styles.date}`}>{GROUP_PHOTO.date}</span>
          </figcaption>
          <span className={styles.tape} aria-hidden="true">
            Members &amp; guests welcome
          </span>
        </Reveal>
      </div>
    </section>
  );
}
