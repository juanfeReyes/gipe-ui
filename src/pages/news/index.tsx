import React from "react";
import Layout from "../../components/Layout";
import { getAllNews } from "../../query/news/getAllNews";
import { Article } from "../../model/News";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ArticleType } from "../../components/news/ArticleIcon";
import { Link } from "gatsby";

const ArticleItemList = ({ article }: { article: Article }) => {
  const image = getImage(article.imagePath);

  return (
    <Link to={`${article.title}`}>
      <div className="flex gap-5">
        <div className="w-1/5">
          <GatsbyImage image={image} alt="" />
        </div>
        <div className="w-4/5 flex flex-col justify-around gap-8">
          <div className="flex flex-col">
            <h2>{article.title}</h2>
            <p>{article.timeToRead}</p>
          </div>
          <div className="flex flex-col">
            <p>{article.summary}</p>
            <ArticleType articleType={article.category} />
          </div>
        </div>
      </div>
    </Link>
  );
};

const NewsPage = () => {
  const newsList = getAllNews();

  return (
    <>
      <Layout>
        <div>
          <div className="flex flex-col gap-3">
            <h1>Noticias</h1>
            <p>Descripcion</p>
          </div>
          <div className="flex flex-col gap-2">
            {newsList.map((n) => (
              <ArticleItemList article={n} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NewsPage;
