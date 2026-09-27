import { featherAngles, featherPath, CORK_HIGHLIGHT } from "../ShuttleIcon/shuttleGeometry";
import styles from "./FlightPath.module.css";

const ARC = "M 18 236 Q 300 24 606 208";
const FEATHER_D = featherPath(16, 4);
const FEATHER_ANGLES = featherAngles(5, 17);

// Motion-blur ghosts: copies of the shuttle that run the same keyframes a
// few frames behind, each fainter and more smeared along the direction of
// travel, so the shuttle reads as moving fast rather than sliding.
const GHOSTS = [
  { lag: "0.14s", opacity: 0.18, filter: "kbc-blur-far" },
  { lag: "0.09s", opacity: 0.3, filter: "kbc-blur-mid" },
  { lag: "0.045s", opacity: 0.45, filter: "kbc-blur-near" },
];

function Shuttle({ className, style }) {
  return (
    <g className={className} style={style}>
      {FEATHER_ANGLES.map((angle) => (
        <path
          key={angle}
          d={FEATHER_D}
          transform={`rotate(${angle.toFixed(2)})`}
          fill="#F3F5F0"
          fillOpacity="0.95"
          stroke="rgba(11, 13, 16, 0.45)"
          strokeWidth="0.4"
          strokeLinejoin="round"
        />
      ))}
      <circle r="2.6" fill="#D4FF1F" />
      <circle
        cx={CORK_HIGHLIGHT.dx}
        cy={CORK_HIGHLIGHT.dy}
        r={CORK_HIGHLIGHT.r}
        fill="#ffffff"
        opacity="0.7"
      />
    </g>
  );
}

// The hero's signature moment: a shuttle flown along a real smash
// trajectory — steep off the back court, dropping across the net — with
// a glowing trail that lights up in sync.
//
// The shuttle is drawn as a <g> *inside the same viewBox* as the arc,
// and animated with plain CSS transform keyframes sampled straight off
// the curve's own quadratic-bezier formula (not `offset-path`, whose
// pixel coordinates don't rescale with the SVG's responsive viewBox
// scaling and end up drifting off the visible line). transform-origin
// sits at the cork (this group's local 0,0), so it stays pinned to the
// curve through every rotation.
export default function FlightPath() {
  return (
    <div className={styles.flight} aria-hidden="true">
      <svg className={styles.scene} viewBox="0 0 620 260" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="kbc-blur-near" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5 0.6" />
          </filter>
          <filter id="kbc-blur-mid" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4 0.8" />
          </filter>
          <filter id="kbc-blur-far" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6 1" />
          </filter>
        </defs>

        <line className={styles.netLine} x1="300" y1="30" x2="300" y2="240" />
        <g className={styles.netMesh}>
          <line x1="300" y1="34" x2="300" y2="240" strokeDasharray="1 5" />
          <line x1="280" y1="34" x2="280" y2="60" />
          <line x1="320" y1="34" x2="320" y2="60" />
        </g>
        <line className={styles.netLine} x1="0" y1="240" x2="620" y2="240" />
        <path className={styles.path} d={ARC} />
        <path className={styles.pathLit} d={ARC} />

        {GHOSTS.map((ghost) => (
          <g
            key={ghost.lag}
            opacity={ghost.opacity}
            filter={`url(#${ghost.filter})`}
          >
            <Shuttle
              className={styles.shuttleGroup}
              style={{ animationDelay: ghost.lag }}
            />
          </g>
        ))}
        <Shuttle className={`${styles.shuttleGroup} ${styles.lead}`} />
      </svg>
    </div>
  );
}
