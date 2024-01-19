import React, { useContext, useEffect } from "react";
import { CompanyLogo } from "../Logo";
import SearchBar from "../SearchBar";
import { NavBarContext } from "./NavigationContext";
import { Link, navigate } from "gatsby";

// TODO: allow navigation link to receive label and handler
export const NavigationLinks = ({}) => {
  const { navOptions, setNavOptions } = useContext(NavBarContext);

  return (
    <>
      <div className="flex flex-wrap flex-row items-center justify-start space-x-2">
        {Object.keys(navOptions).map((key) => (
          <Link
            to={navOptions[key].path}
            activeStyle={{ "font-weight": "bold" }}
          >
            {navOptions[key].label}
          </Link>
        ))}
      </div>
    </>
  );
};

export const NavBar = () => {
  return (
    // <div className="sticky top-0 z-50">
    <div className="bg-surface flex flex-wrap flex-row justify-between items-center px-5">
      <CompanyLogo />

      <div>
        <NavigationLinks />
      </div>

      <SearchBar />
    </div>
    // </div>
  );
};
