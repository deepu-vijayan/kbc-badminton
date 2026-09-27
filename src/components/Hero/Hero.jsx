import Button from "../Button/Button";
import ActionShot from "../ActionShot/ActionShot";
import FlightPath from "../FlightPath/FlightPath";
import Ticker from "../Ticker/Ticker";
import { ACTION_SHOTS, LINKS, TICKER_ITEMS } from "../../data/content";
import styles from "./Hero.module.css";

// Split-screen hero: copy on the charcoal half, an action shot (or the
// animated smash graphic until a photo is supplied) on the electric-blue
// half, cut on a diagonal so the two halves read as one fast motion.
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.split}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            Camellia, NSW / Community Badminton Club
          </p>
          <h1>
            <span className={styles.line}>Every rally</span>
            <span className={styles.line}>starts with</span>
            <span className={styles.line}>
              <em>one</em> good
            </span>
            <span className={`${styles.line} ${styles.outline}`}>session.</span>
          </h1>
          <p className={styles.lede}>
            KBC Badminton runs four sessions a week on home courts in
            Camellia — social games, focused training, members and guests
            all on the same court.
          </p>
          <div className={styles.ctas}>
            <Button variant="volt" href={LINKS.booking} target="_blank" rel="noopener" arrow>
              Book a court
            </Button>
            <Button variant="ghost" href="#sessions">
              See this week&rsquo;s sessions
            </Button>
          </div>
        </div>

        <ActionShot shot={ACTION_SHOTS.hero} className={styles.shot}>
          <span className={styles.shotWord} aria-hidden="true">
            Smash
          </span>
          <FlightPath />
        </ActionShot>

        <div className={styles.edge} aria-hidden="true" />

        <div className={styles.badge} aria-hidden="true">
          <span className="mono">Mon &amp; Thu</span>
          <b>8–11pm</b>
          <span className="mono">Evening sessions</span>
        </div>
      </div>

      <Ticker items={TICKER_ITEMS} />
    </section>
  );
}
