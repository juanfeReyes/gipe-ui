import { StaticImage } from "gatsby-plugin-image";
import React, { forwardRef } from "react";
import { ContactInformation } from "../shared/ContactInformation";
import { Slide } from "../Layout";
import { SocialNetworkList } from "../shared/SocialNetworkList";

export const LandingPage = forwardRef((props, ref) => {
  return (
    <Slide>
      <div ref={ref} className="grid grid-cols-4">
        <StaticImage
          className="col-span-4 col-start-1 row-start-1"
          layout="fullWidth"
          src="../../images/landing-page-background.jpg"
          alt="city-from-space"
        />
        <div className="text-background relative grid col-span-4 col-start-1 row-start-1">
          <div className="h-full grid">
            <div className="flex justify-center w-full p-2">
              <ContactInformation />
            </div>

            <div className="h-full grid grid-cols-10">
              <div className="flex flex-col justify-center w-full col-start-2 col-span-9">
                <p className="w-2/3 text-6xl pr-24">
                  DISEÑO Y CONSTRUCCION DE REDES CONTRA INCENDIOS
                </p>
              </div>

              <div className="flex justify-end items-start col-start-2 col-span-9 p-3">
                <div className="w-full">
                </div>
                <SocialNetworkList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
});
