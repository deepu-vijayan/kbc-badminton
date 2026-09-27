// Shared shuttlecock geometry: a fan of feather blades pivoting from a
// cork nose at the local origin (0,0), feathers trailing in -x. Both the
// static ShuttleIcon and the animated FlightPath draw from this same
// definition so every shuttle on the site is the same shape.
export function featherPath(length = 16, halfWidth = 4) {
  const mid = -length / 2;
  return `M0,0 Q${mid},${-halfWidth} ${-length},0 Q${mid},${halfWidth} 0,0 Z`;
}

export function featherAngles(count = 5, spread = 17) {
  const mid = (count - 1) / 2;
  return Array.from({ length: count }, (_, i) => (i - mid) * spread);
}

export const CORK_HIGHLIGHT = { dx: 0.7, dy: -0.8, r: 0.7 };
