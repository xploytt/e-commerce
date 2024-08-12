import React from "react";
import FurnitureHero from "../assets/hero/big-hero.jpg";
import KitchenHero from "../assets/hero/hero-kitchen.jpg";
import ElectronicsHero from "../assets/hero/hero-electronics.jpg";
import SkincareHero from "../assets/hero/hero-skincare.jpg";
import styles from "../stylesheets/Hero.module.css";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="hero-section"
        className={`${styles.hero} hero containerWidth`}
      >
        <div id="hero-div" className={styles.gridContainer}>
          <div className={`${styles.heroGridItem}`}>
            <Link to={"#"}>
              <img src={FurnitureHero} alt="our furniture products" />
              <p>Live Comfortably</p>
            </Link>
          </div>

          <div className={`${styles.heroGridItem}`}>
            <Link to={"#"}>
              <img src={SkincareHero} alt="our skincare products" />
              <p>Skincare</p>
            </Link>
          </div>

          <div className={styles.xsHero}>
            <Link to={"#"}>
              <img src={KitchenHero} alt="our skincare products" />
              <p>Kitchen</p>
            </Link>
          </div>

          <div className={styles.xsHero}>
            <Link to={"#"}>
              <img src={ElectronicsHero} alt="our electronic products" />
              <p>Electronics</p>
            </Link>
          </div>

          <div className={styles.mdHero}>
            <div className={`${styles.heroGridItem}`}>
              <Link to={"#"}>
                <img src={KitchenHero} alt="our skincare products" />
                <p>Kitchen</p>
              </Link>
            </div>

            <div className={`${styles.heroGridItem}`}>
              <Link to={"#"}>
                <img src={ElectronicsHero} alt="our electronic products" />
                <p>Electronics</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
