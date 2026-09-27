import { featherAngles, featherPath, CORK_HIGHLIGHT } from "./shuttleGeometry";

// A real shuttlecock has two parts: a rounded cork/leather nose, and a
// conical skirt of overlapping feathers flared out behind it. This draws
// exactly that — a fan of feather blades pivoting from the cork — rather
// than an abstract starburst. The cork sits at the local +x tip, so when
// this is placed on a CSS `offset-path` with `offset-rotate: auto`, the
// nose leads the flight the way a real shuttle's heavier cork end does.
const PIVOT = [34, 13];
const FEATHER_D = featherPath(30, 7);

export default function ShuttleIcon({
  size = 28,
  feathers = 5,
  spread = 17,
  cork = "#D4FF1F",
  className,
  style,
  title = "Shuttlecock",
}) {
  const angles = featherAngles(feathers, spread);

  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={(size * 26) / 40}
      viewBox="0 0 40 26"
      role="img"
      aria-label={title}
    >
      <g transform={`translate(${PIVOT[0]} ${PIVOT[1]})`}>
        {angles.map((angle) => (
          <path
            key={angle}
            d={FEATHER_D}
            transform={`rotate(${angle.toFixed(2)})`}
            fill="currentColor"
            fillOpacity="0.9"
            stroke="rgba(11, 13, 16, 0.5)"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        ))}
        <circle r="4.4" fill={cork} />
        <circle
          cx={CORK_HIGHLIGHT.dx * 1.6}
          cy={CORK_HIGHLIGHT.dy * 1.6}
          r={CORK_HIGHLIGHT.r * 1.6}
          fill="#ffffff"
          opacity="0.55"
        />
      </g>
    </svg>
  );
}
