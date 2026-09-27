import Reveal from "../Reveal/Reveal";
import Button from "../Button/Button";
import CopyButton from "../CopyButton/CopyButton";
import { CLUB, FOOTER_PLAY_LINKS, LINKS, NAV_LINKS } from "../../data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="wrap">
        <Reveal className={styles.cta}>
          <p className={`eyebrow ${styles.eyebrow}`}>Ready when you are</p>
          <h2>
            Ready to <em>rally?</em>
          </h2>
          <p>
            Book a court, or get in touch if you&rsquo;ve got questions
            about sessions, membership, or where to park.
          </p>
          <Button variant="volt" href={LINKS.booking} target="_blank" rel="noopener" arrow>
            Book a court
          </Button>
        </Reveal>

        <div className={styles.grid}>
          <div>
            <h4>{CLUB.name}</h4>
            <p className={styles.muted}>
              {CLUB.addressLines[0]}, {CLUB.addressLines[1]}
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li className={styles.emailRow}>
                <a href={LINKS.email}>{CLUB.email}</a>
                <CopyButton value={CLUB.email} label="email address" />
              </li>
              <li>
                <span className={styles.muted}>WeChat: {CLUB.wechat}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {NAV_LINKS.filter((l) => l.href !== "#contact").map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Play</h4>
            <ul>
              {FOOTER_PLAY_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener" : undefined}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 {CLUB.name}, Camellia NSW.</span>
          <span>Concept redesign for {CLUB.name} — not the club&rsquo;s official website.</span>
        </div>
      </div>
    </footer>
  );
}
