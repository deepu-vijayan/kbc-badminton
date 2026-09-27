import styles from "./Ticker.module.css";

// Rendered twice back-to-back so the marquee can loop seamlessly at -50%.
export default function Ticker({ items }) {
  const loop = [...items, ...items];

  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {loop.map((item, i) => (
          <span className={styles.item} key={`${item.label}-${i}`}>
            <b>{item.label}</b>
            {item.detail}
          </span>
        ))}
      </div>
    </div>
  );
}
