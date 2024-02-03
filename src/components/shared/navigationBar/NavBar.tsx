import React, { useContext, useState } from "react";
import { CompanyLogo } from "../Logo";
import { NavBarContext, NavItem } from "./NavigationContext";
import { Link } from "gatsby";
import { Desktop, Mobile } from "../layout/Responsive";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";

/**
 * Refactor this madness looks horrible
 * Uninstall headless ui
 * @returns
 */

const PageNavMenu = ({
  menu,
  setSubMenu,
}: {
  menu: NavItem;
  setSubMenu: any;
}) => {
  return (
    <>
      <div className="p-5 divide-y-2">
        <Mobile>
          <button
            onClick={() =>
              setSubMenu(
                "mobile",
                <div>
                  <NavigationLinks setSubMenu={setSubMenu} />
                </div>
              )
            }
          >
            atras
          </button>
        </Mobile>

        <h6 className="font-light">{menu.label}</h6>
        <div className="flex flex-col items-start justify-start gap-2">
          {menu.pathOptions?.map((opt) => (
            <Link to={opt.path}>{opt.label}</Link>
          ))}
        </div>
      </div>
    </>
  );
};

export const NavigationLinks = ({ setSubMenu }: { setSubMenu: any }) => {
  const { navOptions, setNavOptions } = useContext(NavBarContext);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-start space-x-2 gap-4">
        {Object.keys(navOptions).map((key) =>
          navOptions[key].path ? (
            <Link
              to={navOptions[key].path}
              activeStyle={{ "font-weight": "bold" }}
            >
              {navOptions[key].label}
            </Link>
          ) : (
            <button
              onClick={() =>
                setSubMenu(
                  navOptions[key].label,
                  <PageNavMenu setSubMenu={setSubMenu} menu={navOptions[key]} />
                )
              }
            >
              <div className="flex items-center">
                {navOptions[key].label} <MdKeyboardArrowDown />
              </div>
            </button>
          )
        )}
      </div>
    </>
  );
};

export const NavBar = () => {
  const [subMenu, setSubMenu] = useState({ id: null, elem: null });
  const setMenuByElement = (label, elem) => {
    if (subMenu.id == label) {
      setSubMenu({ id: null, elem: null });
      return;
    }

    setSubMenu({
      id: label,
      elem: elem,
    });
  };

  return (
    <>
      <div className="bg-surface flex flex-wrap flex-row items-center gap-10 px-5 h-20">
        <Mobile>
          <div>
            <button
              onClick={() =>
                setMenuByElement(
                  "mobile",
                  <div>
                    <NavigationLinks setSubMenu={setMenuByElement} />
                  </div>
                )
              }
            >
              <MdMenu />
            </button>
          </div>
        </Mobile>

        <div className="">
          <CompanyLogo />
        </div>

        <Desktop>
          <div className="">
            <NavigationLinks setSubMenu={setMenuByElement} />
          </div>
        </Desktop>
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
