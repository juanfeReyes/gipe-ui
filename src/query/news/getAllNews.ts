import { graphql, useStaticQuery } from "gatsby";
import { mapToArticles } from "../../model/News";

export const getAllNews = () => {
  const data = useStaticQuery(graphql`
    query allNews {
      news: allMdx(filter: { fields: { source: { eq: "news" } } }) {
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
            summary
            imagePath {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
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