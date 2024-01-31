import React from "react";
import Layout from "../Layout";
import { Article, nodeToArticle } from "../../model/News";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import { ArticleType } from "./ArticleIcon";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ArticleDetailPage = ({ data, children }: any) => {
  const article: Article = nodeToArticle(data.mdx);
  const image = getImage(article.imagePath);

  return (
    <>
      <Layout>
        <div className="flex gap-7">
          <div className="w-1/5 flex-col divide-y-2 divide-primary">
            <p>{article.timeToRead}</p>
            <ArticleType articleType={article.category} />
          </div>
          <div className="w-4/5 prose">
            <h1>{article.title}</h1>
            <GatsbyImage className="w-full" image={image} alt="" />
            <MDXProvider>{children}</MDXProvider>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query newsDetail ($id: String!) {
    mdx(id: { eq: $id }) {
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
            gatsbyImageData( 
              transformOptions: { fit: COVER, cropFocus: ATTENTION }
            )
          }
        }
      }
    }
  }
`;

export default ArticleDetailPage;
