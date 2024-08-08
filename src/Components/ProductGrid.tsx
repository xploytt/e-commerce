import React, { ReactNode } from "react";
import styles from "../stylesheets/ProductGrid.module.css";

interface IProductGrid {
  children?: ReactNode;
}

const ProductGrid: React.FC<IProductGrid> = ({ children }) => {
  return (
    <section>
      <div className={`product-grid ${styles.productGrid}`}>{children}</div>
    </section>
  );
};

export default ProductGrid;
