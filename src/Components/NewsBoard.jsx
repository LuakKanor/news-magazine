import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, debouncedKeyword, country }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLatestNews = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?q=${debouncedKeyword}&country=${country}&category=${category}&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`;
    try {
      const response = await axios.get(url);
      if (response && response.data) {
        setArticles(response.data.articles);
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLatestNews();
  }, [category, debouncedKeyword, country]);

  if (loading === true) {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h2 className="text-center my-2">
          Latest <span className="badge bg-danger">News</span>
        </h2>
        <div className="d-flex justify-content-center align-items-center align-items-md-end flex-md-row flex-wrap flex-column gap-md-2">
          {articles.map((news, index) => {
            return (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                imgSrc={news.urlToImage}
                sourceUrl={news.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsBoard;
