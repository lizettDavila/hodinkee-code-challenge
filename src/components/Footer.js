import React from "react";
import "../styles/styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_item_1">
        <ul>
          <li>
            <span>About</span>
          </li>
          <li>
            <a href="/">Company</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Terms of use</a>
          </li>
        </ul>
      </div>
      <div className="footer_item_2">
        <ul>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <a href="/">Advertisement</a>
          </li>
          <li>
            <a href="/">Ask us anything</a>
          </li>
        </ul>
      </div>
      <div className="footer_item_3">
        <ul>
          <li>
            <span>Follow</span>
          </li>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
        </ul>
      </div>

      <div className="footer_item_4">
        <h1>Watches blog</h1>
        <p>Copyright © 2009–2021, Watches Blog All Rights Reserved.</p>
      </div>
    </div>
  );
}
