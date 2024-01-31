import { graphql, useStaticQuery } from "gatsby";
import { nodeToCompanyService } from "../model/Services";

export const getAllServices = () => {
  const data = useStaticQuery(graphql`
    query servicesPreviews {
      services: allMdx(filter: { fields: { source: { eq: "services" } } }) {
        nodes {
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
                gatsbyImageData(transformOptions: {fit: FILL})
              }
            }
            services {
              title
              description
              summary
              imagePath {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.services.nodes.map(n => nodeToCompanyService(n))
};
