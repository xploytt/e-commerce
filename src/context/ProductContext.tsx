import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Product } from "../supabase/supabase";
import getRandomElements from "../utilities/getRandomElements";

interface IProductContext {
  trendingProducts: Product[];
  productsWeAreProudOf: Product[];
}
const ProductContext = createContext<IProductContext>({
  trendingProducts: [],
  productsWeAreProudOf: [],
});

interface IProductProviderProps {
  children: React.ReactNode;
}

const ProductProvider: React.FC<IProductProviderProps> = ({ children }) => {
  //this function is meant to make a call different from that in Category page..a call to "trending" table, a "product we are proud of" table in the DB - however for project implementation purpose, it is making the same call to the products table(same with the useFetch call in Category page).. hence, i'm implementing a random "trending" and "product we are proud of" selection in the useEffect below
  const { products } = useFetch("all");
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
  const [productsWeAreProudOf, setProductsWeAreProudOf] = useState<Product[]>(
    []
  );

  useEffect(() => {
    const trendingItems = getRandomElements<Product>(products, 13);
    setTrendingProducts(trendingItems);

    const itemsWeAreProudOf = getRandomElements<Product>(products, 8);
    setProductsWeAreProudOf(itemsWeAreProudOf);

    return () => {
      // setTrendingProducts([]);
      // setProductsWeAreProudOf([]);
    };
  }, [products]);

  return (
    <ProductContext.Provider value={{ trendingProducts, productsWeAreProudOf }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductProvider };
