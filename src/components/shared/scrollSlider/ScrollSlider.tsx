import React from "react";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { Slide } from "./Slide";
import { ScrollNavBarContext, ScrollNavBarType, ScrollNavbar } from "./ScrollNavBar";

export interface SlideSectionProps {
  section: string;
}

const ScrollSlider = ({contextValue, children }: {contextValue: ScrollNavBarType, children: ReactNode}) => {

  return (
    <ScrollNavBarContext.Provider value={contextValue}>
      <div className="">
        {children}
      </div>
    </ScrollNavBarContext.Provider>
  );
};

ScrollSlider.Slide = Slide;
ScrollSlider.ScrollNavbar = ScrollNavbar;

export default ScrollSlider;
