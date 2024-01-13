import { RefObject, useEffect, useMemo, useState } from "react";

export function useIsVisible(ref: any){
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current)
    return () => {
      observer.disconnect();
    };
  }, [ref.current])

  return isIntersecting
}
