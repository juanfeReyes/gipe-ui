import { graphql, useStaticQuery } from "gatsby";

export const getAllNewsPreview = () => {
  const data = useStaticQuery(graphql`
    query newsPreviews {
      allMdx(filter: { fields: { source: { eq: "news" } } }) {
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
                gatsbyImageData(width: 1000, height: 1000, transformOptions: {fit: COVER, cropFocus: ATTENTION})
              }
            }
          }
          body
        }
      }
    }
  `);

  const news = data.allMdx.nodes.map((n) => ({
    ...n.frontmatter,
    body: n.body,
    timeToRead: n.fields.timeToRead.text
  }));

  return news;
};
