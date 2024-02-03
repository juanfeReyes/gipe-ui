import React, { createContext, useContext } from "react";
import { Desktop, Mobile } from "../layout/Responsive";
import { useSpringCarousel } from "react-spring-carousel";
import { GrFormNext } from "@react-icons/all-files/gr/GrFormNext";

export interface ScrollNavBarType {
  context: {
    sections: {
      [key: string]: {
        label: string;
        ref: any | null;
      };
    };
    visibleSection: string;
  };
  setScrollNavBar: (k: any) => void;
}

export const initialScrollNavBar: ScrollNavBarType = {
  context: {
    sections: {},
    visibleSection: "",
  },
  setScrollNavBar: (o) => {},
};

export const ScrollNavBarContext = createContext(initialScrollNavBar);

const MobileScrollNavBar = ({
  handleScrollIntoSection,
}: {
  handleScrollIntoSection: any;
}) => {
  const { context } = useContext(ScrollNavBarContext);
  const { sections, visibleSection } = context;
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      itemsPerSlide: 2,
      gutter: 24,
      items: Object.keys(sections).map((key) => ({
        id: sections[key].label,
        renderItem: (
          <button
            className={`${visibleSection == key ? "font-bold" : "font-light"}`}
            onClick={() => handleScrollIntoSection(sections[key].ref)}
          >
            {sections[key].label}
          </button>
        ),
      })),
    });

  return (
    <div className="flex grow basis-0 z-20 overflow-hidden">
      <div className=" w-11/12">
        {carouselFragment}
      </div>
      <button className="w-1/12 bg-primary z-30 aspect-square rounded-full" onClick={slideToNextItem}>
        <GrFormNext />
      </button>
    </div>
  );
};

export const ScrollNavbar = ({}) => {
  const { context } = useContext(ScrollNavBarContext);
  const { sections, visibleSection } = context;

  const handleScrollIntoSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-surface flex flex-wrap gap-10 flex-row items-center px-5 py-3">
        <Mobile>
          <MobileScrollNavBar
            handleScrollIntoSection={handleScrollIntoSection}
          />
        </Mobile>
        <Desktop>
          {Object.keys(sections).map((key) => (
            <button
              className={`${
                visibleSection == key ? "font-bold" : "font-light"
              }`}
              onClick={() => handleScrollIntoSection(sections[key].ref)}
            >
              {sections[key].label}
            </button>
          ))}
        </Desktop>
      </div>
    </div>
  );
};
