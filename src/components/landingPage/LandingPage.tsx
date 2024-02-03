import { StaticImage } from "gatsby-plugin-image";
import React, { forwardRef, useContext, useRef } from "react";
import { ContactInformation } from "../shared/ContactInformation";
import { SocialNetworkList } from "../shared/SocialNetworkList";
import { BackgroundImage } from "../shared/BackgroundImage";

const companySlogan = "DISEÑO Y CONSTRUCCION DE REDES CONTRA INCENDIOS";

export const LandingPage = () => {
  return (
    <BackgroundImage
      image={
        <StaticImage
          className="col-span-4 col-start-1 row-start-1 aspect-video max-h-min"
          src="../../images/landing-page-background.jpg"
          alt="city-from-space"
        />
      }
      content={
        <div className="text-background relative grid col-span-4 col-start-1 row-start-1">
          <div className="h-full grid">
            <div className="flex justify-center items-center w-full p-2">
              <ContactInformation />
            </div>

            <div className="h-full grid grid-cols-10">
              <div className="flex flex-col justify-center w-full col-start-2 col-span-9">
                <p className="w-2/3 md:text-6xl pr-24">{companySlogan}</p>
              </div>

              <div className="flex justify-end items-start col-start-2 col-span-9">
                <div className="w-2/3"></div>
                <div className=" flex w-1/3 justify-center items-center">
                  <SocialNetworkList />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};
