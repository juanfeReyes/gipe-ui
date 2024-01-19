import * as React from "react";
import Layout from "../components/Layout";
import { LandingPage } from "../components/landingPage/LandingPage";
import { ServicesPage } from "../components/landingPage/ServicesPage";
import { BusinessProfilePage } from "../components/landingPage/BusinessProfilePage";
import { ClientsPage } from "../components/landingPage/ClientsPage";
import { useRef, useState } from "react";
import { initialNavBarContext } from "../components/shared/navigationBar/NavigationContext";
import ScrollSlider from "../components/shared/scrollSlider/ScrollSlider";

const initialScrollNavBar = {
  sections: {
    services: {
      label: "Servicios",
      ref: null,
    },
    businessProfile: {
      label: "Perfil Empresarial",
      ref: null,
    },
    clients: {
      label: "Clientes",
      ref: null,
    },
  },
  visibleSection: "services",
};

const IndexPage = () => {

  const [context, setScrollNavBar] = useState(initialScrollNavBar);
  const scrollSliderContext = { context, setScrollNavBar };
  const scrollMenus = Object.keys(initialScrollNavBar.sections);

  return (
    <div>
      <Layout
      >
        <ScrollSlider contextValue={scrollSliderContext}>
          <LandingPage />
          <ScrollSlider.ScrollNavbar />

          <ScrollSlider.Slide
            section={scrollMenus[0]}
          >
            <ServicesPage />
          </ScrollSlider.Slide>

          <ScrollSlider.Slide
            section={scrollMenus[1]}
          >
            <BusinessProfilePage />
          </ScrollSlider.Slide>

          <ScrollSlider.Slide
            section={scrollMenus[2]}
          >
            <ClientsPage />
          </ScrollSlider.Slide>
        </ScrollSlider>
      </Layout>
    </div>
  );
};

export default IndexPage;
