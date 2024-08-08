import React from "react";
import Newsletter from "./Newsletter";
import { NavLink } from "react-router-dom";
import styles from "../stylesheets/Footer.module.css";

const footerPagePath = [
  "About",
  "Store Locator",
  "FAQs",
  "News",
  "Careers",
  "Contact Us",
];

const Footer: React.FC = () => {
  return (
    <>
      <Newsletter />
      <footer className={styles.footer}>
        <nav className="flex-and-align">
          {footerPagePath.map((path) => (
            <NavLink key={path} to={"#"}>
              {path}
            </NavLink>
          ))}
        </nav>

        <small>
          Developed by{" "}
          <a
            style={{ color: "#b7a9b7f2" }}
            target="_blank"
            href="https://github.com/xploytt"
          >
            xploytt
          </a>
        </small>
      </footer>
    </>
  );
};

export default Footer;
