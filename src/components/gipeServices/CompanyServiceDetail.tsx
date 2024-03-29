import React from "react";
import {
  CompanyServiceProps,
  nodeToCompanyService,
} from "../../model/Services";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ServiceBranchHeader } from "./ServiceBranchHeader";
import Layout from "../shared/layout/Layout";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Desktop, Mobile } from "../shared/layout/Responsive";

const CompanyServiceDetail = ({
  service,
}: {
  service: CompanyServiceProps;
}) => {
  const serviceImage = getImage(service.imagePath);

  return (
    <div className="flex flex-wrap odd:flex-row-reverse w-full justify-evenly">
      <div className="prose flex flex-col justify-start items-center">
        <h2 className="w-full">{service.title}</h2>
        <Mobile>
          <GatsbyImage
            className="aspect-video w-full"
            image={serviceImage}
            alt=""
          />
        </Mobile>
        <p>{service.description}</p>
      </div>
      <Desktop>
        <div className="md:w-1/3 flex justify-between items-center">
          <GatsbyImage
            className="aspect-video w-full"
            image={serviceImage}
            alt=""
          />
        </div>
      </Desktop>
    </div>
  );
};

const CompanyServiceDetailPage = ({ data, children }: any) => {
  const service = nodeToCompanyService(data.mdx);

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-10 p-5">
          <div className="w-full">
            <ServiceBranchHeader serviceBranch={service} />
          </div>

          {service.services.map((s) => (
            <CompanyServiceDetail service={s} />
          ))}
          <MDXProvider>{children}</MDXProvider>
        </div>
      </Layout>
    </>
  );
};

export default CompanyServiceDetailPage;

export const query = graphql`
  query serviceDetail($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        source
        timeToRead {
          text
        }
      }
      frontmatter {
        title
        description
        imagePath {
          childImageSharp {
            gatsbyImageData(transformOptions: { fit: COVER })
          }
        }
        services {
          title
          description
          imagePath {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
