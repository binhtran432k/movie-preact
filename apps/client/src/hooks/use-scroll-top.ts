import { useCallback, useEffect, useState } from "preact/hooks";

export function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = useCallback(() => setScrollTop(window.scrollY), []);

  useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollTop;
}
