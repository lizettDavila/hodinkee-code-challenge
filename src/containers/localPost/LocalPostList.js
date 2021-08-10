/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function LocalPostList() {
  const history = useHistory();
  const [publishDate, setPublishDate] = useState(new Date());
  let postsList = [];

  if (JSON.parse(localStorage.getItem("posts") === null)) {
    postsList = [];
  } else {
    postsList = postsList.concat(JSON.parse(localStorage.getItem("posts")));
  }

  const handleDelete = (i) => {
    postsList = postsList.filter((value, index) => index !== i);
    localStorage.setItem("posts", JSON.stringify(postsList));
    window.location.reload();
  };

  const handleEdite = (i) => {
    history.push(`/localPosts/${i}`);
  };
  return (
    <div className="article_grid">
      {postsList.length > 0 ? (
        postsList.map((article, i) => (
          <article key={i} className="article">
            <img src={article.urlCreated} alt="article_image" />
            <div className="article_text">
              <h3>{article.titleCreated}</h3>
              <p>{article.desCreated}</p>
              <div
                className="article_meta"
                onChange={() => setPublishDate(article.publishedAtCreated)}
              >
                <span>By </span>
                Watches blog ·
                {publishDate
                  .toLocaleString("en-us", { month: "long" })
                  .toUpperCase()}
                <span> </span>
                {publishDate.getDate()}
                <span>,</span>
                <span> </span>
                {publishDate.getFullYear()}
              </div>
            </div>
            <div className="actions">
              <button type="button" onClick={() => handleEdite(i)}>
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(i)}>
                Delete
              </button>
            </div>
          </article>
        ))
      ) : (
        <div className="error"> No results founded </div>
      )}
    </div>
  );
}
