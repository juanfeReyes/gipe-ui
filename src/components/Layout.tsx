import React, { ReactNode, useRef } from "react";
import SearchBar from "./shared/SearchBar";
import { CompanyLogo } from "./shared/Logo";

export const Slide = ({ children }: { children: ReactNode }) => {
  return <div className="snap-center snap-always">{children}</div>;
};

export const navOptions = {
  services: {
    label: "Servicios",
    handler: () => {},
  },
  businessProfile: {
    label: "Perfil Empresarial",
    handler: () => {},
  },
  clients: {
    label: "Clientes",
    handler: () => {},
  },
  news: {
    label: "Noticias",
    handler: () => {},
  },
};

export const useScrollIntoView = (option, ref) => {
  option.handler = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
};

// TODO: allow navigation link to receive label and handler
export const NavigationLinks = ({ navOptions }: { navOptions: any }) => {
  return (
    <>
      <div className="flex flex-wrap flex-row items-center justify-start space-x-2">
        {Object.keys(navOptions).map((key) => (
          <button onClick={navOptions[key].handler}>
            {navOptions[key].label}
          </button>
        ))}
      </div>
    </>
  );
};

const NavBar = ({ navigationHandler }) => {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-primary flex flex-wrap flex-row justify-between items-center px-5">
        <CompanyLogo navigationHandler={navigationHandler} />

        <div>
          <NavigationLinks navOptions={navOptions} />
        </div>

        <SearchBar />
      </div>
    </div>
  );
};

const Layout = ({
  navigationHandler,
  children,
}: {
  showNavBar: boolean;
  children: ReactNode;
  navigationHandler: () => void;
}) => {
  return (
    <div className="bg-background">
      <NavBar navigationHandler={navigationHandler} />
      {children}
    </div>
  );
};

export default Layout;
