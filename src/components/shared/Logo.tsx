import React from "react";



 /**
  * TODOs
  * Set text size correctly to fit the current space
  */
 export const CompanyLogo = ({navigationHandler}) => {
  return (
    <>
      <div onClick={navigationHandler}>
        <div>GIPE</div>
        <div>Ingenieria con Tecnologia</div>
      </div>
    </>
  );
};
