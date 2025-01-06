"use client";
import { ProductContext } from "@/app/Context/ProductContext";
import { useParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  console.log("this is params", params);
  const { slug } = params;
  console.log("this is slug", slug);
  const { fetchSingleProduct } = useContext(ProductContext);
  const [singleProduct, setSingleProduct] = useState();

  useEffect(() => {
    const fetching = async () => {
      const data = await fetchSingleProduct(slug);
      setSingleProduct(data);
    };
    fetching();
    console.log(singleProduct);
  }, []);
  console.log(singleProduct)
  

  return <div>{singleProduct?.name}</div>;
};

export default page;
