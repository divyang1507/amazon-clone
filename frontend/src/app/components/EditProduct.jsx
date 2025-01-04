"use client";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";

const EditProduct = ({ productId, onCancel }) => {
  const { fetchProduct } = useContext(ProductContext);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    stock: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(productId);

  useEffect(() => {
    const getProductData = async () => {
      try {
        // Assuming fetchProduct returns the product data for a given ID
        const data = await fetchProduct(productId);
        console.log("Fetched data: ", data);
        // Set the fetched product data into the state
        setProductData({
          name: data.name,
          price: data.price,
          imageUrl: data.imageUrl,
          category: data.category,
          description: data.description,
          stock: data.stock,
        });
      } catch (err) {
        setError("Error fetching product: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    getProductData();
  }, [productId, fetchProduct]);

  return <div>{productData?.name}</div>;
};

export default EditProduct;
