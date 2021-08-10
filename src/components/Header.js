import React from "react";
import "../styles/styles.css";

export default function Header() {
  const actualDate = new Date();

  return (
    <div className="header">
      <div className="header_top">
        <nav className="nav">
          <h1 className="head_title">Watches blog</h1>
          <ul>
            <li>
              <a href="/remotePosts">
                <span>Remote Posts</span>
              </a>
            </li>
            <li>
              <a href="/localPosts">Local Posts</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header_bottom">
        <div>
          <p>
            {actualDate
              .toLocaleString("en-us", { month: "long" })
              .toUpperCase()}
            <span> </span>
            {actualDate.getDate()}
            <span>,</span>
            <span> </span>
            {actualDate.getFullYear()}
          </p>
          <a href="/localPosts_new">Create a post</a>
        </div>
      </div>
    </div>
  );
}
