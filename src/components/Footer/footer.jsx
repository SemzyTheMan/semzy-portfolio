import React from "react";
import "./footer.scss";
import { useNavigate } from "react-router";
const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <div className="Footer">
      <h1>MS</h1>
      <img
        className="Footer_logo"
        src="/images/icons/logo-white.svg"
        alt="logo"
      />
      <ul className="Footer_list">
        <li onClick={() => navigate("/")} className="Footer_list-item">
          HOME
        </li>
        <li onClick={() => navigate("/portfolio")} className="Footer_list-item">
          PORTFOLIO
        </li>
        <li onClick={() => navigate("/contact")} className="Footer_list-item">
          CONTACT ME
        </li>
      </ul>
      <a
        className="Footer_twitter"
        href="https://github.com/SemzyTheMan"
        target={"_blank"}
      >
        <img src="/images/icons/github-1.svg" alt="github" />
      </a>
      <a
        className="Footer_git"
        href="https://twitter.com/semzy17"
        target={"_blank"}
      >
        <img src="/images/icons/twitter-white.svg" alt="twitter" />
      </a>
    </div>
  );
};
export default Footer;
