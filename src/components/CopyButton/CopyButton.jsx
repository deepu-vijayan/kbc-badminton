import { useEffect, useRef, useState } from "react";
import styles from "./CopyButton.module.css";

// Copies `value` to the clipboard. Falls back to a hidden textarea +
// execCommand for browsers/contexts without the async Clipboard API
// (e.g. plain-http previews). `tone` picks the colourway: "dark" for
// charcoal backgrounds, "volt" for the volt membership panel.
async function writeClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through to the legacy path
    }
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  area.remove();
  return ok;
}

export default function CopyButton({ value, label = value, tone = "dark", className = "" }) {
  const [status, setStatus] = useState("idle"); // idle | copied | failed
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function handleClick() {
    const ok = await writeClipboard(value);
    setStatus(ok ? "copied" : "failed");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 1800);
  }

  const classes = [
    styles.copy,
    styles[tone],
    status === "copied" ? styles.copied : "",
    status === "failed" ? styles.failed : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
        aria-label={`Copy ${label}`}
        title={`Copy ${label}`}
      >
        <svg className={styles.iconCopy} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="8.5" y="8.5" width="11" height="11" />
          <path d="M15.5 8.5V4.5h-11v11h4" />
        </svg>
        <svg className={styles.iconCheck} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </button>
      <span className={styles.toast} role="status" aria-live="polite">
        {status === "copied" ? "Copied" : status === "failed" ? "Press ⌘/Ctrl+C" : ""}
      </span>
    </span>
  );
}
