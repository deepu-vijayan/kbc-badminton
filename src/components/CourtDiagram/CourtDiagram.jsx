import styles from "./CourtDiagram.module.css";

// A real doubles badminton court, drawn to true proportion (6.1m × 13.4m)
// on an electric-blue mat with white court lines — not just an abstract line
// drawing. Markings: doubles sidelines + back boundary (outer edge),
// singles sidelines inset 0.46m, short service lines 1.98m from the net,
// doubles long service lines 0.76m in from each back boundary, and the
// centre line splitting the service courts.
export default function CourtDiagram() {
  return (
    <figure className={styles.card}>
      <svg viewBox="0 0 220 460" role="img" aria-label="Diagram of a doubles badminton court, blue mat with white lines">
        {/* apron beyond the boundary lines */}
        <rect x="0" y="0" width="220" height="460" fill="#0A2A78" />
        {/* the mat itself */}
        <rect x="10" y="10" width="200" height="440" fill="#1F6FFF" />

        <g fill="none" stroke="#FFFFFF" strokeLinecap="square">
          {/* doubles sidelines + back boundaries */}
          <rect x="10" y="10" width="200" height="440" strokeWidth="3" />
          {/* singles sidelines */}
          <line x1="25" y1="10" x2="25" y2="450" strokeWidth="1.6" opacity="0.85" />
          <line x1="195" y1="10" x2="195" y2="450" strokeWidth="1.6" opacity="0.85" />
          {/* short service lines */}
          <line x1="10" y1="165" x2="210" y2="165" strokeWidth="1.6" opacity="0.9" />
          <line x1="10" y1="295" x2="210" y2="295" strokeWidth="1.6" opacity="0.9" />
          {/* doubles long service lines */}
          <line x1="10" y1="35" x2="210" y2="35" strokeWidth="1.6" opacity="0.6" />
          <line x1="10" y1="425" x2="210" y2="425" strokeWidth="1.6" opacity="0.6" />
          {/* centre line, each half */}
          <line x1="110" y1="10" x2="110" y2="165" strokeWidth="1.6" opacity="0.9" />
          <line x1="110" y1="295" x2="110" y2="450" strokeWidth="1.6" opacity="0.9" />
          {/* net */}
          <line x1="10" y1="230" x2="210" y2="230" strokeWidth="3" stroke="#D4FF1F" />
        </g>

        <circle cx="4" cy="230" r="3.2" fill="var(--volt)" />
        <circle cx="216" cy="230" r="3.2" fill="var(--volt)" />

        <g transform="translate(110 230)">
          <rect x="-16" y="-9" width="32" height="15" fill="#D4FF1F" />
          <text x="0" y="1.5" textAnchor="middle" fontSize="8" fontWeight="700" letterSpacing="1" fill="#0B0D10">
            NET
          </text>
        </g>
      </svg>
      <figcaption>
        Doubles court · 6.1m × 13.4m · true proportion
      </figcaption>
    </figure>
  );
}
