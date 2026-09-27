// Thin wrapper over the shared .btn utility classes in index.css,
// so every call site (nav, hero, footer, CTAs) stays visually consistent.
// `arrow` appends a → that nudges forward on hover.
export default function Button({
  as: Tag = "a",
  variant = "line",
  className = "",
  arrow = false,
  children,
  ...rest
}) {
  const classes = ["btn", `btn-${variant}`, className].filter(Boolean).join(" ");
  return (
    <Tag className={classes} {...rest}>
      {children}
      {arrow && (
        <span className="arrow" aria-hidden="true">
          →
        </span>
      )}
    </Tag>
  );
}
