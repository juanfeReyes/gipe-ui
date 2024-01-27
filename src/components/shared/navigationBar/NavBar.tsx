import React, { useContext } from "react";
import { CompanyLogo } from "../Logo";
import SearchBar from "../SearchBar";
import { NavBarContext, NavBarContextType, NavItem } from "./NavigationContext";
import { Link } from "gatsby";
import { Menu } from "@headlessui/react";

const DropdownNavMenu = ({ menu }: { menu: NavItem }) => {
  return (
    <div className="">
      <Menu>
        <Menu.Button className="px-4 py-2 text-sm font-medium text-gray-700">
          {menu.label}
        </Menu.Button>
        <Menu.Items className="py-2 text-sm font-medium text-gray-700">
          {menu.pathOptions?.map((opt) => (
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`block px-4 py-2 ${
                    active ? "bg-primary text-white" : "text-gray-700"
                  }`}
                  to={opt.path}
                  activeStyle={{ "font-weight": "bold" }}
                >
                  {opt.label}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export const NavigationLinks = ({}) => {
  const { navOptions, setNavOptions } = useContext(NavBarContext);

  return (
    <>
      <div className="flex flex-wrap flex-row items-center justify-start space-x-2">
        {Object.keys(navOptions).map((key) =>
          navOptions[key].path ? (
            <Link
              to={navOptions[key].path}
              activeStyle={{ "font-weight": "bold" }}
            >
              {navOptions[key].label}
            </Link>
          ) : (
            <DropdownNavMenu menu={navOptions[key]} />
          )
        )}
      </div>
    </>
  );
};

export const NavBar = () => {
  return (
    <div className="bg-surface flex flex-wrap flex-row justify-between items-center px-5">
      <CompanyLogo />

      <div>
        <NavigationLinks />
      </div>

      <SearchBar />
    </div>
  );
};
