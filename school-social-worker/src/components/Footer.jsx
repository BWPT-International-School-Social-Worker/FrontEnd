import React from "react";
import "./Footer.scss";


function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <ul>
          <li>
            <a href="https://www.facebook.com/GhanaMakeADifference/">
              <i
                className="fab fa-facebook"
                style={{ fontSize: "50px", color: "black" }}
              ></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ghana_make_a_difference/">
              <i
                className="fab fa-instagram"
                style={{ fontSize: "50px", color: "black" }}
              ></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ghanamakeadiff">
              <i
                className="fab fa-twitter"
                style={{ fontSize: "50px", color: "black" }}
              ></i>
            </a>
          </li>
        </ul>
      </footer>

      <h2>Let's Do Great Things Together</h2>
    </div>
  );
}

export default Footer;
