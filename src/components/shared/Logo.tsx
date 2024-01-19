import React, { useContext } from "react";
import { NavBarContext } from "./navigationBar/NavigationContext";
import { navigate } from "gatsby";

 export const CompanyLogo = () => {
  const {navOptions} = useContext(NavBarContext)

  const goToHome = () => {
    navigate(navOptions.home.path)
  }

  return (
    <>
      <div className="flex flex-col items-center text-primary" onClick={goToHome}>
        <div className="text-6xl font-medium">GIPE</div>
        <div className="text-sm">Ingenieria con Tecnologia</div>
      </div>
    </>
  );
};
