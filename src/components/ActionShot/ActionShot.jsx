import { useState } from "react";
import styles from "./ActionShot.module.css";

// One half of a split-screen banner. Shows a real action photo when
// `shot.src` is set — duotoned into the brand palette with a motion-blur
// ghost that sharpens on hover — and otherwise renders `children`
// (an animated court graphic) so the panel is never empty.
export default function ActionShot({ shot, className = "", children }) {
  const [failed, setFailed] = useState(false);
  const hasPhoto = Boolean(shot?.src) && !failed;

  return (
    <div className={[styles.shot, className].filter(Boolean).join(" ")}>
      {hasPhoto ? (
        <>
          <img
            className={styles.blurGhost}
            src={shot.src}
            alt=""
            aria-hidden="true"
          />
          <img
            className={styles.photo}
            src={shot.src}
            alt={shot.alt}
            onError={() => setFailed(true)}
          />
          <div className={styles.tint} aria-hidden="true" />
        </>
      ) : (
        children
      )}
      <div className={styles.streaks} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
