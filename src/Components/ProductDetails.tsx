import React, { useEffect, useRef, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { useLocation, useParams } from "react-router-dom";
import { fetchProductByName, Product } from "../supabase/supabase";
import { kebabToTitleCase } from "../utilities/toKebab";
import getRandomElements from "../utilities/getRandomElements";
import styles from "../stylesheets/ProductPage.module.css";

const ProductDetails: React.FC = () => {
  type IRouteParams = {
    productName?: string;
  };

  const defaultProduct: Product = {
    created_at: "",
    desc: "",
    details: { size: "", weight: "", texture: "" },
    id: 0,
    imgs: { img1: "", img2: "", img3: "" },
    name: "",
    price: 0,
    productType: "",
  };

  const { productName } = useParams<IRouteParams>();
  const { trendingProducts } = useProductContext();
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [largeImg, setLargeImg] = useState(product?.imgs?.img1);
  const location = useLocation();
  const topRef = useRef<HTMLElement>(null);

  //scroll to up
  useEffect(() => {
    if (topRef?.current) topRef?.current.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    setLargeImg(product?.imgs?.img1);
  }, [product]);

  useEffect(() => {
    const getProduct = async () => {
      let fetchedItem, selectedItem;
      if (productName) {
        fetchedItem = await fetchProductByName(kebabToTitleCase(productName));
      } else {
        selectedItem = getRandomElements(trendingProducts, 1)[0];
      }
      setProduct(fetchedItem ?? selectedItem!);
    };

    getProduct();

    // return () => setProduct(defaultProduct);
  }, [productName, trendingProducts]);

  return (
    <section ref={topRef} className={`${styles.productSection}`}>
      <div style={{ position: "relative" }}>
        <h2>{product?.name}</h2>

        <div className={`productImages ${styles.productImages}`}>
          <div className={`${styles.largeImgWrapper}`}>
            <img src={largeImg} alt={product?.name} />
          </div>

          <div className={`${styles.hoverImgsContainer} flex-and-align`}>
            {(Object.values(product?.imgs || {}) as string[]).map((img, i) => (
              <div key={`${i}${img}`} className={`${styles.hoverImgs}`}>
                <img
                  onMouseEnter={(e) =>
                    setLargeImg(e.currentTarget.getAttribute("src") || "")
                  }
                  src={img}
                  alt={`${product?.name} pic-variation`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={`productDesc ${styles.productDesc}`}>
          <p>{product?.desc}</p>

          <div className={`${styles.cartDetailsWrapper} flex-and-align`}>
            <p>Quantity</p>

            <div className={`${styles.controlCart} flex-and-align`}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <p className={`${styles.price}`}>${product?.price}</p>
          </div>

          <div className={`${styles.addToCart}`}>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className={`${styles.productDetails}`}>
        {(Object.entries(product?.details || {}) as [string, string][]).map(
          ([key, value], i) => (
            <div key={`${i}${key}${value}`}>
              <h3>{key}:</h3>
              <p>{value}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
