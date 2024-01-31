import { graphql, useStaticQuery } from "gatsby";
import { mapToArticles } from "../../model/News";

export const getAllNewsPreview = () => {
  const data = useStaticQuery(graphql`
    query newsPreviews {
      news: allMdx(limit: 8, filter: { fields: { source: { eq: "news" } } }) {
        nodes {
          fields {
            source
            timeToRead {
              text
            }
          }
          frontmatter {
            title
            publishDate
            category
            imagePath {
              childImageSharp {
                gatsbyImageData(
                  transformOptions: { fit: COVER, cropFocus: ATTENTION }
                )
              }
            }
          }
        }
      }
    }
  `);

  const news = mapToArticles(data);

  return news;
};


