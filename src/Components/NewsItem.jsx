import news from "../assets/news.jpg";
const NewsItem = ({ title, description, imgSrc, sourceUrl }) => {
  return (
    <>
      <div
        className="card bg-dark text-light my-3 mx-3 px-2 py-2"
        style={{ maxWidth: "345px" }}
      >
        <img
          src={imgSrc ? imgSrc : news}
          className="card-img-top"  
          style={{ height: "200px", width: "328px" }}
          alt="news-image"
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50) + " ..."}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 100) + " ..."
              : "News unavailable"}
          </p>
          <a href={sourceUrl} className="btn btn-primary" target="_blank">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
