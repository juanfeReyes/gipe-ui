import React, { ReactNode, useEffect, useState } from "react";
import { NavBar } from "../navigationBar/NavBar";
import {
  NavBarContext,
  initialNavBarContext,
} from "../navigationBar/NavigationContext";
import { getAllServices } from "../../../query/ServicesQuery";
import { ServiceBranchProps } from "../../../model/Services";
import { Footer } from "../Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const services = getAllServices();

  const [navOptions, setNavOptions] = useState(initialNavBarContext);

  useEffect(() => {
    const aux = { ...navOptions };
    aux.services.pathOptions = services.map(
      (service: ServiceBranchProps) => ({
        label: service.title,
        path: `/services/${service.title}`,
      })
    );
    setNavOptions(aux)
  }, []);

  return (
    <NavBarContext.Provider value={{ navOptions, setNavOptions }}>
      <div className="bg-background container ">
        <NavBar />
        {children}
        <Footer />
      </div>
    </NavBarContext.Provider>
  );
};

export default Layout;
