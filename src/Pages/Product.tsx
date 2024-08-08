import React from "react";
import { ProductProvider } from "../context/ProductContext";
import ProductDetails from "../Components/ProductDetails";
import Trending from "../Components/Trending";

const Product: React.FC = () => {
  return (
    <ProductProvider>
      <ProductDetails />
      <Trending />
    </ProductProvider>
  );
};

export default Product;
