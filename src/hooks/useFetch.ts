import { useEffect, useState } from "react";
import { fetchProduct, Product, ProductType } from "../supabase/supabase";

interface IuseFetchReturnType {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const useFetch = (category: ProductType | "all"): IuseFetchReturnType => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const callFetch = async () => {
      try {
        const res = await fetchProduct(category);
        setProducts(res);
        setError(null);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    callFetch();

    // return () => {
    //   setProducts([]);
    //   setLoading(false);
    //   setError(null);
    // };
  }, [category]);

  return { products, loading, error };
};

export default useFetch;
