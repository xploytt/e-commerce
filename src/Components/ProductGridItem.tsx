import React from "react";
import styles from "../stylesheets/ProductGridItem.module.css";
import { Link } from "react-router-dom";
import toKebabCase from "../utilities/toKebab";

interface ProductGridItemProps {
  img: string;
  name: string;
  price: number;
}
const ProductGridItem: React.FC<ProductGridItemProps> = ({
  img,
  name,
  price,
}) => {
  return (
    <Link
      to={`/product/${toKebabCase(name)}`}
      className={`${styles.gridItem} `}
    >
      <div>
        <img src={img} className={`productImg`} />
      </div>
      <h2>{name}</h2>
      <p>${price}</p>
    </Link>
  );
};

export default ProductGridItem;
