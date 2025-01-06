"use client";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./Context/ProductContext";
import Image from "next/image";
import Slider from "./components/Slider";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const { fetchProducts, loading, error } = useContext(ProductContext);

  const [products, setProducts] = useState();

  useEffect(() => {
    const fetching = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    fetching();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="text-darkest mx-auto w-[90%]">

      <Slider filter="Electronics" header='Best of Electronics' />
      <Slider filter="Fashion" header='Best of Fashion' />
      <Slider filter="Smartphones" header='Best of Smartphones' />
      {products?.map((product) => {
        return (
          <div key={product._id}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
}
