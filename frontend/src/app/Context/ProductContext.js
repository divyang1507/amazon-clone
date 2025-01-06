"use client";
import React, { createContext, useState, useEffect } from "react";

// Create a context
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");


  const handleError = (error) => {
    console.error(error.message);
    setError(error.message);
  };

  const fetchProducts = async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();

    const url = queryParams
      ? `http://localhost:4000/api/getproducts?${queryParams}`
      : "http://localhost:4000/api/getproducts";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Full API Response:", data); // Debugging log
      if (response.ok) {
        console.log("Fetched Products:", data); // Debugging log
        // setProducts(data);
        return data;
      } else {
        handleError(new Error(data.message));
      }
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/getproduct/${productId}`
      );
      const data = await response.json();
      return data;
      // console.log("this is edit data " , data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleProduct = async (slug) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/singleproduct/${slug}`
      );
      const data = await response.json();
      return data;
      // console.log("this is edit data " , data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const editproduct = async (productId, productData) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/editproduct/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      if (response.ok) {
        await fetchProduct();
        setSuccessMessage("Product updated successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
      } else {
        handleError(new Error(errorData.error));
      }
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        loading,
        error,
        fetchProduct,
        fetchProducts,
        editproduct,
        fetchSingleProduct,
        successMessage,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
