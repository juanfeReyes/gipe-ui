import React, {
  Context,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useInView } from "react-intersection-observer";
import { SlideSectionProps } from "./ScrollSlider";
import { ScrollNavBarContext } from "./ScrollNavBar";

export const Slide = ({
  section,
  children,
}: {
  children: ReactNode;
} & SlideSectionProps) => {
  const { context, setScrollNavBar } = useContext(ScrollNavBarContext);
  const auxRef = useRef(null);

  const { ref } = useInView({
    threshold: 0.5,
    // triggerOnce: true,
    onChange: (inView: any, entry: { target: { id: string } }) => {
      if (inView) {
        const copySection = { ...context };
        copySection.visibleSection = section;
        setScrollNavBar(copySection);
      }
    },
  });

  useEffect(() => {
    const copySection = { ...context };
    copySection.sections[section].ref = auxRef;
    setScrollNavBar(copySection);
  }, [auxRef]);

  return (
    <div ref={auxRef}>
      <section id={section} ref={ref} className="">
        {children}
      </section>
    </div>
  );
};
