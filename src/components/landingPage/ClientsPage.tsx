import React, { useState } from "react";
import {
  GatsbyImage,
  ImageDataLike,
  getImage,
} from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { useSpringCarousel } from "react-spring-carousel";
import { GrFormPrevious } from "@react-icons/all-files/gr/GrFormPrevious";
import { GrFormNext } from "@react-icons/all-files/gr/GrFormNext";
import { useMediaQuery } from "react-responsive";
import { mobileResponsiveConfig } from "../shared/layout/Responsive";

const title = "Clientes";

export const ClientItem = ({ image }: { image: ImageDataLike }) => {
  const clientImg = getImage(image);

  return <GatsbyImage className="rounded-full" image={clientImg} alt="" />;
};

export const ClientsPage = (props: {}) => {

  const [activeItem, setActiveItem] = useState(0)

  const data = useStaticQuery(graphql`
    query ClientLogosQuery {
      clientImgs: allFile(
        filter: { sourceInstanceName: { eq: "clientLogos" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1, transformOptions: {cropFocus: ATTENTION})
          }
        }
      }
    }
  `);

  const clients = data.clientImgs.nodes;
  const isMobile = useMediaQuery(mobileResponsiveConfig)

  const { carouselFragment, slideToPrevItem, slideToNextItem, useListenToCustomEvent } =
    useSpringCarousel({
      withLoop: true,
      itemsPerSlide: isMobile ? 2 : 5,
      gutter: 24,
      items: clients.map((client, idx) => ({
        id: idx,
        renderItem: <div><ClientItem  image={client} /></div>,
      })),
    });

  useListenToCustomEvent((event) => {
    if(event.eventName === "onSlideChange"){
      setActiveItem(event.currentItem.index)
    }
  })

  return (
    <div className="py-10">
      <div className="flex justify-center p-6 text-3xl">
        <h1>{title}</h1>
      </div>
      <div className="flex">
        <div className="w-1/12 flex items-center justify-center" onClick={slideToPrevItem}><GrFormPrevious /></div>
        <div className=" w-10/12 grow basis-0 z-20 overflow-hidden ">
          {carouselFragment}
        </div>
        <div className="w-1/12 flex items-center justify-center" onClick={slideToNextItem}><GrFormNext /></div>
      </div>
    </div>
  );
};
