import Product from "../Pages/Product";
import { supabase } from "./client";

export interface ProductImgs {
  img1: string;
  img2: string;
  img3: string;
}

export interface IProductDetails {
  size: string;
  weight: string;
  texture: string;
}

export interface Product {
  created_at: string;
  desc: string;
  details: IProductDetails;
  id: number;
  imgs: ProductImgs;
  name: string;
  price: number;
  productType: string;
}

export type ProductType =
  | "furnitures"
  | "electronics"
  | "lamps"
  | "kitchen"
  | "chairs"
  | "skin-care";

const isProductArray = (products: any): products is Product[] =>
  Array.isArray(products) && products.every((product) => isProduct(product));

const isProduct = (product: any): product is Product =>
  product && "productType" in product;

export const fetchProduct = async (
  productType: ProductType | "all"
): Promise<Product[]> => {
  let products: Product[] = [];
  const query = supabase.from("Products").select("*");

  if (productType !== "all") {
    let col = productType === "skin-care" ? "skincare" : productType;
    let { data } = await query.eq("productType", col);

    if (isProductArray(data)) products = data;
  } else {
    let { data } = await query;

    if (isProductArray(data)) products = data;
  }

  return products;
};

export const fetchProductByName = async (
  name: string
): Promise<Product | null> => {
  const query = supabase.from("Products").select("*");
  const { data } = await query.eq("name", name).maybeSingle();
  if (isProduct(data)) return data;
  return null;
};
