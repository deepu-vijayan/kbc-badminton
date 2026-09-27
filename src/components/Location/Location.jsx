import Reveal from "../Reveal/Reveal";
import Button from "../Button/Button";
import { CLUB, LINKS } from "../../data/content";
import styles from "./Location.module.css";

export default function Location() {
  return (
    <section className={styles.location} id="location">
      <div className="wrap">
        <Reveal className={styles.info}>
          <p className="eyebrow">05 / Location</p>
          <h2>Find us in Camellia.</h2>
          <div className={`${styles.address} ${styles.addressBlock}`}>
            <p>
              {CLUB.addressLines[0]}
              <br />
              {CLUB.addressLines[1]}
            </p>
            <p className={styles.small}>
              Same address for every session — social, training, member
              and guest play.
            </p>
          </div>
          <p className={styles.parkingNote}>
            <strong>Parking:</strong> {CLUB.parkingNote}
          </p>
          <Button
            variant="line"
            className={styles.directionsBtn}
            href={LINKS.directions}
            target="_blank"
            rel="noopener"
            arrow
          >
            Get directions
          </Button>
        </Reveal>

        <Reveal className={styles.mapFrame}>
          <iframe
            src={LINKS.mapEmbed}
            title={`Map showing ${CLUB.name} at ${CLUB.addressLines.join(", ")}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
