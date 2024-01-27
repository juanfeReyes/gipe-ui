import React from "react";
import { getAllNewsPreview } from "../../query/NewsQuery";
import { BackgroundImage } from "../shared/BackgroundImage";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Article } from "../../model/News";
import { ArticleIcon } from "./ArticleIcon";

const newsPosition = [
  "col-start-1 col-end-3 row-start-1 row-end-4",
  "col-start-3 col-end-4 row-start-1 row-end-3",
  "col-start-4 col-end-5 row-start-1 row-end-2",
  "col-start-4 col-end-5 row-start-2 row-end-3",
];

const NewsItem = ({ article }: { article: Article }) => {
  const image = getImage(article.imagePath);

  return (
      <BackgroundImage
        image={<GatsbyImage image={image} alt="" />}
        content={
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-1">
              <ArticleIcon articleType={article.category} />
              {article.category}
            </div>
            <div>
              <p>{article.timeToRead}</p>
              <h2>{article.title}</h2>
            </div>
          </div>
        }
      />
  );
};

/**
 * build news item
 * Layout should be a 4x3 grid
 * fix typography
 * fix styling
 *
 */
export const NewsPreview = () => {
  const news = getAllNewsPreview();
  console.log(news);

  return (
    <div>
      <h1>Noticias</h1>
      <div className="grid grid-cols-4 grid-rows-3 gap-3">
        {news.map((n, idx) => (
          <div className={newsPosition[idx]}>
            <NewsItem article={n} />
          </div>
        ))}
      </div>
    </div>
  );
};
