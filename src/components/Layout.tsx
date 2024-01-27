import React, { ReactNode, useEffect, useState } from "react";
import { NavBar } from "./shared/navigationBar/NavBar";
import {
  NavBarContext,
  initialNavBarContext,
} from "./shared/navigationBar/NavigationContext";
import { getAllServices } from "../query/ServicesQuery";
import { ServiceBranchProps } from "../model/Services";

const Layout = ({ children }: { children: ReactNode }) => {
  const services = getAllServices();

  const [navOptions, setNavOptions] = useState(initialNavBarContext);

  useEffect(() => {
    const aux = { ...navOptions };
    aux.services.pathOptions = services.allService.nodes.map(
      (service: ServiceBranchProps) => ({
        label: service.name,
        path: service.servicePath,
      })
    );
    setNavOptions(aux)
  }, []);

  return (
    <NavBarContext.Provider value={{ navOptions, setNavOptions }}>
      <div className="bg-background">
        <NavBar />
        {children}
      </div>
    </NavBarContext.Provider>
  );
};

export default Layout;
