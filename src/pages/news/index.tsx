import React from "react";
import Layout from "../../components/shared/layout/Layout";
import { getAllNews } from "../../query/news/getAllNews";
import { Article } from "../../model/News";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ArticleType } from "../../components/news/ArticleIcon";
import { Link } from "gatsby";
import { Desktop, Mobile } from "../../components/shared/layout/Responsive";

const ArticleItemList = ({ article }: { article: Article }) => {
  const image = getImage(article.imagePath);

  return (
    <Link to={`${article.title}`}>
      <div className="flex gap-5">
        <Desktop>
          <div className="w-1/5">
            <GatsbyImage image={image} alt="" />
          </div>
        </Desktop>
        <div className="md:w-4/5 flex flex-col justify-around gap-8">
          <div className="flex flex-col">
            <h2 className="text-xl font-medium">{article.title}</h2>
            <p className="font-light">{article.timeToRead}</p>
          </div>
          <Mobile>
            <div>
              <GatsbyImage image={image} alt="" />
            </div>
          </Mobile>
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
        <div className="p-5 divide-y-2">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl py-5">Noticias</h1>
          </div>
          <div className="flex flex-col gap-5 py-5">
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
