import { useState } from "react";
import Button from "../Button/Button";
import useScrollHeader from "../../hooks/useScrollHeader";
import { CLUB, LINKS, LOGO, NAV_LINKS } from "../../data/content";
import styles from "./Header.module.css";

export default function Header() {
  const scrolled = useScrollHeader(40);
  const [navOpen, setNavOpen] = useState(false);

  const headerClasses = [
    styles.header,
    scrolled ? styles.scrolled : "",
    navOpen ? styles.navOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <a className={styles.brand} href="#top">
        <span className={styles.logoBadge}>
          <img
            src={LOGO.src}
            alt={LOGO.alt}
            width={LOGO.width}
            height={LOGO.height}
            decoding="async"
          />
        </span>
        <span className={styles.brandText}>
          <b>KBC</b>
          <span>{CLUB.name} · {CLUB.suburb.split(",")[0]}</span>
        </span>
      </a>

      <nav className={styles.links} id="navLinks">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            className={styles.navLink}
            href={link.href}
            onClick={() => setNavOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Button
          variant="volt"
          className={styles.mobileCta}
          href={LINKS.booking}
          target="_blank"
          rel="noopener"
          onClick={() => setNavOpen(false)}
        >
          Book a court
        </Button>
      </nav>

      <div className={styles.navActions}>
        <Button
          variant="volt"
          className={styles.desktopCta}
          href={LINKS.booking}
          target="_blank"
          rel="noopener"
        >
          Book a court
        </Button>
        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          aria-controls="navLinks"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
