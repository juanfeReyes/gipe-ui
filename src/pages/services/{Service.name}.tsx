import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { ServiceBranchHeader } from "../../components/gipeServices/ServiceBranchHeader";
import { CompanyServiceDetail } from "../../components/gipeServices/CompanyServiceDetail";

const ServicesPage = (props) => {
  const { service } = props.data;

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
        </div>
      </Layout>
    </>
  );
};

export default ServicesPage;

export const query = graphql`
  query ($id: String!) {
    service(id: { eq: $id }) {
      name
      description
      imagePath {
        childImageSharp {
          gatsbyImageData
        }
      }
      servicePath: gatsbyPath(filePath: "/services/{Service.name}")
      services {
        name
        summary
        description
        imagePath {
          childImageSharp {
            gatsbyImageData
          }
        }
        backgroundImage
      }
    }
  }
`;
