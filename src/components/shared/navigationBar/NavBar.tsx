import React, { useContext, useState } from "react";
import { CompanyLogo } from "../Logo";
import SearchBar from "../SearchBar";
import { NavBarContext, NavItem } from "./NavigationContext";
import { Link } from "gatsby";

/**
 *
 * Uninstall headless ui
 * @returns
 */

const DropdownNavMenu = ({
  menu,
  setSubMenu,
  subMenu,
}: {
  menu: NavItem;
  setSubMenu: any;
  subMenu: any;
}) => {
  const setMenuByElement = () => {
    if (subMenu.id == menu.label) {
      setSubMenu({id: null, elem: null});
      return;
    }

    setSubMenu({
      id: menu.label,
      elem: (
        <div className="flex flex-col items-center gap-2">
          {menu.pathOptions?.map((opt) => (
            <Link to={opt.path}>{opt.label}</Link>
          ))}
        </div>
      ),
    });
  };

  const clearMenu = () => {
    setSubMenu(null);
  };

  return (
    <div className="">
      <button onClick={setMenuByElement}>{menu.label}</button>
    </div>
  );
};

export const NavigationLinks = ({
  setSubMenu,
  subMenu,
}: {
  setSubMenu: any;
  subMenu: any;
}) => {
  const { navOptions, setNavOptions } = useContext(NavBarContext);

  return (
    <>
      <div className="flex flex-wrap flex-row items-center justify-start space-x-2 gap-4">
        {Object.keys(navOptions).map((key) =>
          navOptions[key].path ? (
            <Link
              to={navOptions[key].path}
              activeStyle={{ "font-weight": "bold" }}
            >
              {navOptions[key].label}
            </Link>
          ) : (
            <DropdownNavMenu
              subMenu={subMenu}
              setSubMenu={setSubMenu}
              menu={navOptions[key]}
            />
          )
        )}
      </div>
    </>
  );
};

export const NavBar = () => {
  const [subMenu, setSubMenu] = useState({id: null, elem: null});

  return (
    <>
      <div className="bg-surface flex flex-wrap flex-row justify-between items-center px-5">
        <CompanyLogo />

        <div>
          <NavigationLinks subMenu={subMenu} setSubMenu={setSubMenu} />
        </div>

        <SearchBar />
      </div>
      <div
        className={`z-50 absolute block bg-background w-full ${
          !subMenu.elem && "hidden"
        }`}
      >
        {subMenu.elem}
      </div>
    </>
  );
};
