import React from "react";
import { getAllNewsPreview } from "../../query/news/getAllNewsPreviews";
import { BackgroundImage } from "../shared/BackgroundImage";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Article } from "../../model/News";
import { ArticleType } from "./ArticleIcon";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { Link } from "gatsby";

const newsPosition = [
  "col-start-1 col-end-3 row-start-1 row-end-5",
  "col-start-3 col-end-4 row-start-1 row-end-5",
  "col-start-4 col-end-5 row-start-1 row-end-3",
  "col-start-4 col-end-5 row-start-3 row-end-5",

  "col-start-1 col-end-2 row-start-5 row-end-6",
  "col-start-2 col-end-3 row-start-5 row-end-6",
  "col-start-3 col-end-4 row-start-5 row-end-6",
  "col-start-4 col-end-5 row-start-5 row-end-6",
];

const NewsItem = ({
  article,
  layout,
}: {
  article: Article;
  layout: string;
}) => {
  const image = getImage(article.imagePath);

  return (
    <Link to={`news/${article.title}`}>
      {layout === "background" ? (
        <BackgroundImage
          image={<GatsbyImage className="h-full w-full" image={image} alt="" />}
          content={
            <div className="flex flex-col justify-between m-2">
              <ArticleType articleType={article.category} />
              <div>
                <p>{article.timeToRead}</p>
                <h2 className="text-2xl font-bold">{article.title}</h2>
              </div>
            </div>
          }
        />
      ) : (
        <div className="flex">
          <GatsbyImage
            className="w-1/2 m-1 rounded-full"
            image={image}
            alt=""
          />
          <div className="flex w-1/2 p-1 flex-col justify-between">
            <p>{article.timeToRead}</p>
            <div>
              <h2 className="text-xl font-bold">{article.title}</h2>
              <ArticleType articleType={article.category} />
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};




export const NewsPreview = () => {
  const news = getAllNewsPreview();

  return (
    <div className="py-5">
      <div className="flex justify-between">
        <h1 className="text-3xl">Noticias</h1>
        <Link to="/news" className="flex gap-1 items-center">
          <FaPlus /> Ver mas
        </Link>
      </div>
      <div className="grid grid-cols-4 grid-rows-5 gap-5 p-10">
        {news.map((n, idx) => (
          <div className={newsPosition[idx]}>
            <NewsItem article={n} layout={idx < 4 ? "background" : "circle"} />
          </div>
        ))}
      </div>
    </div>
  );
};
