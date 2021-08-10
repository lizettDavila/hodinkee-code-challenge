/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRemotePosts } from "../../redux/actions/fetchRemotePosts";

export default function RemotePostList() {
  const remotePostState = useSelector((state) => state.remotePostReducer);
  const dispatch = useDispatch();
  const [publishDate, setPublishDate] = useState(new Date());

  useEffect(() => {
    dispatch(fetchRemotePosts());
  }, [dispatch]);

  return (
    <div className="article_grid">
      {remotePostState.remotePosts.articles &&
      remotePostState.remotePosts.articles.length > 0 ? (
        remotePostState.remotePosts.articles.map((article, i) => (
          <article key={i} className="article">
            <img src={article.image} alt="article_image" />
            <div className="article_text">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div
                onChange={() => setPublishDate(article.publishedAt)}
                className="article_meta"
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
          </article>
        ))
      ) : (
        <div className="error"> No results founded </div>
      )}
    </div>
  );
}
