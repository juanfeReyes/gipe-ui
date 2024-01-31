import React from "react";
import { CompanyServiceProps, nodeToCompanyService } from "../../model/Services";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ServiceBranchHeader } from "./ServiceBranchHeader";
import Layout from "../Layout";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

const CompanyServiceDetail = ({
  service,
}: {
  service: CompanyServiceProps;
}) => {
  const serviceImage = getImage(service.imagePath);

  return (
    <div className="flex w-screen justify-between">
      <div className="prose flex flex-col justify-start items-center">
        <h2 className="w-full">{service.title}</h2>
        <p>{service.description}</p>
      </div>
      <div className="w-1/3 flex justify-between items-center">
        <GatsbyImage image={serviceImage} alt="" />
      </div>
    </div>
  );
};

const CompanyServiceDetailPage = ({ data, children }: any) => {
  const service = nodeToCompanyService(data.mdx);

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-10">
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
query serviceDetail ($id: String!) {
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
          gatsbyImageData
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
