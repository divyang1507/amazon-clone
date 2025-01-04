"use client";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./Context/ProductContext";
import Image from "next/image";

export default function Home() {
  const { products, loading, error } = useContext(ProductContext);
  console.log(products);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {products?.map((product) => {
        return (
          <div key={product?._id}>
            <h1>{product?.name}</h1>
            <p>{product?.price}</p>
          </div>
        );
      })}
    </div>
  );
}
