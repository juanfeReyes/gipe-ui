import React, { forwardRef } from "react";
import { Slide } from "../Layout";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const title = "Clientes";
const clientsLogosPath = [
  "../../images/client-logos/logo1.jpg",
  "../../images/client-logos/logo2.jpg",
  "../../images/client-logos/logo3.jpg",
  "../../images/client-logos/logo4.jpg",
  "../../images/client-logos/logo5.jpg",
  "../../images/client-logos/logo6.jpg",
];

export const ClientsPage = forwardRef((props, ref) => {
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
    <Slide>
      <div ref={ref} className="py-4">
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
    </Slide>
  );
});
