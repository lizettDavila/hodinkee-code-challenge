/* eslint-disable no-alert */
/* eslint-disable comma-dangle */
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function LocalPostForm() {
  const history = useHistory();
  const { postId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const publishedAt = new Date();
  let postsSelected = [];

  // Verify and create posts in localStorage
  if (JSON.parse(localStorage.getItem("posts") === null)) {
    const posts = [];
    localStorage.setItem("posts", JSON.stringify(posts));
  }

  if (postId && title === "" && description === "" && url === "") {
    postsSelected = postsSelected.concat(
      JSON.parse(localStorage.getItem("posts"))
    );
    postsSelected = postsSelected.filter(
      (value, index) => index === parseInt(postId, 10)
    );
    setTitle(postsSelected[0].titleCreated);
    setDescription(postsSelected[0].desCreated);
    setUrl(postsSelected[0].urlCreated);
  }

  const handleSubmit = () => {
    let postsCreated = [];

    // Clean all states
    setTitle("");
    setDescription("");
    setUrl("");

    // Verify post in localStorage
    postsCreated = postsCreated.concat(
      JSON.parse(localStorage.getItem("posts"))
    );

    if (postId && title !== "" && description !== "" && url !== "") {
      postsCreated = postsCreated.filter(
        (value, index) => index !== parseInt(postId, 10)
      );
      postsCreated = postsCreated.concat({
        titleCreated: title,
        desCreated: description,
        urlCreated: url,
        publishedAtCreated: publishedAt,
      });
      localStorage.setItem("posts", JSON.stringify(postsCreated));
      history.push("/localPosts");
    } else if (title !== "" && description !== "" && url !== "") {
      postsCreated = postsCreated.concat({
        titleCreated: title,
        desCreated: description,
        urlCreated: url,
        publishedAtCreated: publishedAt,
      });
      localStorage.setItem("posts", JSON.stringify(postsCreated));
      history.push("/localPosts");
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <div>
      <div className="title_form">
        <h1>New post</h1>
      </div>
      <form className="post_form">
        <div className="form_title">
          <label htmlFor="title">
            <p>Title:</p>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="form_description">
          <label htmlFor="description">
            <p>Description:</p>
            <textarea
              id="description"
              type="text"
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div className="form_url">
          <label htmlFor="img_url">
            <p>URL:</p>
            <input
              id="img_url"
              type="text"
              placeholder="Url image"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
        </div>
        <div className="form_button">
          <button type="submit" onClick={() => handleSubmit()}>
            <p>Create</p>
          </button>
        </div>
      </form>
    </div>
  );
}
