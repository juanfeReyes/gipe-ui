import { ImageDataLike } from "gatsby-plugin-image";

export interface Article {
  title: string;
  imagePath: ImageDataLike;
  publishDate: string;
  summary: string;
  category: string;
  timeToRead: string;
  body: string;
}

export const nodeToArticle = (n) => {
  return {
    ...n.frontmatter,
    body: n.body,
    timeToRead: n.fields.timeToRead.text,
  };
};

export const mapToArticles = (data: any) => {
  return data.news.nodes.map((n) => nodeToArticle(n));
};
