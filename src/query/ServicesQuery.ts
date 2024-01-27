import { graphql, useStaticQuery } from "gatsby";

export const getAllServices = () =>
  useStaticQuery(graphql`
    query servicesData {
      allService {
        nodes {
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
    }
  `);
