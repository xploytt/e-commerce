import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "../stylesheets/Trending.module.css";
import ProductGridItem from "./ProductGridItem";
import { useProductContext } from "../context/ProductContext";

const Trending: React.FC = () => {
  const { trendingProducts } = useProductContext();

  return (
    <>
      <section className={`${styles.trending} containerWidth`}>
        <div>
          <h3>Trending Now</h3>
          <div>
            <button className="swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-arrow-left"
              >
                <path d="M5 12l14 0"></path>
                <path d="M5 12l6 6"></path>
                <path d="M5 12l6 -6"></path>
              </svg>
            </button>
            <button className="swiper-button-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-arrow-right"
              >
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="trending-swiper"
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            340: {
              slidesPerView: 1.2,
            },
            400: {
              slidesPerView: 1.5,
            },
            470: {
              slidesPerView: 2,
            },
            620: {
              slidesPerView: 2.4,
            },
            740: {
              slidesPerView: 3,
            },
            860: {
              slidesPerView: 3.4,
            },
            1000: {
              slidesPerView: 4,
            },
            1080: {
              slidesPerView: 4.4,
            },
            1300: {
              slidesPerView: 5,
            },
          }}
        >
          {trendingProducts.map((product) => (
            <SwiperSlide key={product.name}>
              <ProductGridItem
                key={product.name}
                img={product.imgs.img1}
                name={product.name}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Trending;
