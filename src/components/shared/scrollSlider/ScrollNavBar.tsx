import React, { createContext, useContext } from "react";

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

export const ScrollNavbar = ({}) => {
  const { context } = useContext(ScrollNavBarContext);
  const { sections, visibleSection } = context;

  const handleScrollIntoSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-surface flex flex-wrap gap-10 flex-row items-center px-5 py-3">
        {Object.keys(sections).map((key) => (
          <button
            className={`${visibleSection == key ? "font-bold" : "font-light"}`}
            onClick={() => handleScrollIntoSection(sections[key].ref)}
          >
            {sections[key].label}
          </button>
        ))}
      </div>
    </div>
  );
};
