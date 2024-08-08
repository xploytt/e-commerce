import React, { useState } from "react";
import { ProductType } from "../supabase/supabase";
import ToTitleCase from "../utilities/toTitleCase";
import ProductGrid from "../Components/ProductGrid";
import styles from "../stylesheets/Category.module.css";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductGridItem from "../Components/ProductGridItem";

const Category: React.FC = () => {
  const [category, setCategory] = useState<ProductType | "all">("all");
  const { products } = useFetch(category);
  // const { products, loading, error } = useFetch(category); for loading and error implementation
  const categories: (ProductType | "all")[] = [
    "all",
    "furnitures",
    "electronics",
    "chairs",
    "kitchen",
    "lamps",
    "skin-care",
  ];

  return (
    <section className={`${styles.categorySection}`}>
      <div className={`${styles.title} flex-and-align`}>
        <Link to={"/"}>Home</Link>
        <h3>{category.toUpperCase()}</h3>
      </div>

      <div className={`${styles.categoriesBtns} flex-and-align`}>
        {categories.map((val) => (
          <button key={val} onClick={() => setCategory(val)}>
            {ToTitleCase(val === "skin-care" ? "skincare" : val)}
          </button>
        ))}
      </div>

      <div className={`${styles.outerGridContainer}`}>
        <ProductGrid>
          {products.map((product) => (
            <ProductGridItem
              key={product.name}
              img={product.imgs.img1}
              name={product.name}
              price={product.price}
            />
          ))}
        </ProductGrid>
      </div>
    </section>
  );
};

export default Category;
