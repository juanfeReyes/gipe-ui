import React, { ReactNode, useState } from "react";
import { NavBar } from "./shared/navigationBar/NavBar";
import { NavBarContext, initialNavBarContext } from "./shared/navigationBar/NavigationContext";

const Layout = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [navOptions, setNavOptions] = useState(initialNavBarContext)

  return (
    <NavBarContext.Provider value={{navOptions, setNavOptions}}>
    <div className="bg-background">
      <NavBar />
      {children}
    </div>
    </NavBarContext.Provider>
  );
};

export default Layout;
