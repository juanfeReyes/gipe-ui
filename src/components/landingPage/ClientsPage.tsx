import React, { forwardRef, useRef } from "react";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import ScrollSlider, {
  SlideSectionProps,
} from "../shared/scrollSlider/ScrollSlider";
import { useScrollNavBar } from "../../hooks/useScrollNavBar";

const title = "Clientes";

export const ClientsPage = (props: {} ) => {


  const data = useStaticQuery(graphql`
    query ClientLogosQuery {
      allFile(filter: { sourceInstanceName: { eq: "clientLogos" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  return (
    <div className="py-4">
      <div className="flex justify-center p-6">
        <h1>{title}</h1>
      </div>
      <div className="bg-surface p-4 grid grid-cols-4 gap-3">
        {data.allFile.edges.map((item, index) => {
          return (
            <div className="bg-secondary w-80 p-3" key={index}>
              <GatsbyImage
                image={item.node.childImageSharp.gatsbyImageData}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
