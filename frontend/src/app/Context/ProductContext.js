"use client";
import React, { createContext, useState, useEffect } from "react";

// Create a context
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/getproducts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log("Full API Response:", data); // Debugging log
        if (response.ok) {
          console.log("Fetched Products:", data); // Debugging log
          setProducts(data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error.message); // Debugging log
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();


    
  }, []);


  const fetchProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/getproduct/${productId}`
      );
      const data = await response.json();
      return data;
      // console.log("this is edit data " , data);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <ProductContext.Provider value={{ products, loading, error, fetchProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
