import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../stylesheets/ShopNow.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

interface Img {
  src: string;
  alt: string;
}

interface Content {
  title: string;
  desc: string;
}

export interface IShopeNow {
  reverse?: boolean;
  image: Img;
  content: Content;
}

const ShopNow: React.FC<IShopeNow> = ({ image, reverse = false, content }) => {
  return (
    <>
      <Container className={styles.shopNowContainer}>
        <Row className="styles.shopNowRow">
          {reverse && (
            <Col className={`${styles.imgCol} content-col`}>
              <img
                className={styles.imgBanner}
                src={image.src}
                alt={image.alt}
              />
            </Col>
          )}
          <Col
            className={`${styles.contentCol} flex-and-align content-col ${
              reverse ? "second-col" : ""
            }`}
          >
            <div
              className={`${
                reverse ? styles.secondBanner + " second-banner" : ""
              }`}
            >
              <h2>{content.title}</h2>
              <p>{content.desc}</p>
              <Link to={"/categories"}>SHOP NOW</Link>
            </div>
          </Col>
          {!reverse && (
            <Col className={`${styles.imgCol} content-col`}>
              <img
                className={styles.imgBanner}
                src={image.src}
                alt={image.alt}
              />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default ShopNow;
