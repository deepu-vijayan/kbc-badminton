import Reveal from "../Reveal/Reveal";
import Button from "../Button/Button";
import ActionShot from "../ActionShot/ActionShot";
import CopyButton from "../CopyButton/CopyButton";
import { ACTION_SHOTS, CLUB, LINKS } from "../../data/content";
import styles from "./MembershipCta.module.css";

// Split-screen banner: volt copy panel on the left, electric-blue action
// panel on the right (a photo when one is configured, otherwise the
// member price blown up with a motion-blur trail).
export default function MembershipCta() {
  return (
    <section className={styles.band} id="membership">
      <div className={styles.split}>
        <Reveal className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>04 / Membership</p>
          <h2>2026 membership is open.</h2>
          <p>
            Members play every session at $18 instead of $22 — the
            difference pays for itself within a few weeks of regular
            play. Download the form, fill it in, and bring it along or
            email it through.
          </p>
          <div className={styles.actions}>
            <Button variant="ink" href={LINKS.membershipForm} target="_blank" rel="noopener" arrow>
              Download 2026 form
            </Button>
            <div className={styles.emailGroup}>
              <Button variant="line" className={styles.lineBtn} href={LINKS.email}>
                Email {CLUB.email}
              </Button>
              <CopyButton
                value={CLUB.email}
                label="email address"
                tone="volt"
                className={styles.copyBtn}
              />
            </div>
          </div>
        </Reveal>

        <ActionShot shot={ACTION_SHOTS.membership} className={styles.shot}>
          <div className={styles.price} aria-hidden="true">
            <span className={styles.priceGhost}>$18</span>
            <span className={styles.priceGhost}>$18</span>
            <span className={styles.priceMain}>$18</span>
            <span className={`mono ${styles.priceNote}`}>Member rate / session</span>
          </div>
        </ActionShot>
      </div>
    </section>
  );
}
