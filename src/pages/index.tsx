import * as React from "react";
import Layout, { navOptions, useScrollIntoView } from "../components/Layout";
import { LandingPage } from "../components/landingPage/LandingPage";
import { ServicesPage } from "../components/landingPage/ServicesPage";
import { BusinessProfilePage } from "../components/landingPage/BusinessProfilePage";
import { ClientsPage } from "../components/landingPage/ClientsPage";
import { useRef } from "react";
import { useIsVisible } from "../hooks/useIsVisible";

/**
 * Fix layout to match the image size
 * Hide navbar if scroll on top page
 * Implement scroll snap
 */

const IndexPage = () => {
  const landingSectionRef = useRef(null)
  const servicesRef = useRef(null);
  const businessProfileRef = useRef(null);
  const clientRef = useRef(null);

  // TODO: Refactor this mess to work better
  const homeNavigationHandler = () => {landingSectionRef.current?.scrollIntoView({ behavior: "smooth" })}
  useScrollIntoView(navOptions.services, servicesRef)
  useScrollIntoView(navOptions.businessProfile, businessProfileRef)
  useScrollIntoView(navOptions.clients, clientRef)

  console.log(homeNavigationHandler)

  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-p-6">
      <Layout navigationHandler={homeNavigationHandler}>
        <>
          <LandingPage ref={landingSectionRef} />
          <ServicesPage ref={servicesRef} />
          <BusinessProfilePage ref={businessProfileRef} />
          <ClientsPage ref={clientRef} />
        </>
      </Layout>
    </div>
  );
};

export default IndexPage;
