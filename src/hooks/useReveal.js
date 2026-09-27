import { useEffect, useRef, useState } from "react";

const DEFAULT_OPTIONS = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" };

export default function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(node);
      }
    }, DEFAULT_OPTIONS);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
