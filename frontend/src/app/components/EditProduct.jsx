"use client";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";

const EditProduct = ({ productId, onCancel }) => {
  const { fetchProduct, editproduct } = useContext(ProductContext);
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
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const getProductData = async () => {
      try {
        const data = await fetchProduct(productId);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    editproduct(productId, productData).then(() => {onCancel();});
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    // <div>
    //   <h2>Edit Product</h2>
    //   {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Name</label>
    //       <input
    //         type="text"
    //         value={productData.name}
    //         onChange={(e) =>
    //           setProductData({ ...productData, name: e.target.value })
    //         }
    //       />
    //     </div>
    //     <div>
    //       <label>Price</label>
    //       <input
    //         type="number"
    //         value={productData.price}
    //         onChange={(e) =>
    //           setProductData({ ...productData, price: e.target.value })
    //         }
    //       />
    //     </div>
    //     <div>
    //       <label>Image URL</label>
    //       <input
    //         type="text"
    //         value={productData.imageUrl}
    //         onChange={(e) =>
    //           setProductData({ ...productData, imageUrl: e.target.value })
    //         }
    //       />
    //     </div>
    //     <div>
    //       <label>Category</label>
    //       <input
    //         type="text"
    //         value={productData.category}
    //         onChange={(e) =>
    //           setProductData({ ...productData, category: e.target.value })
    //         }
    //       />
    //     </div>
    //     <div>
    //       <label>Description</label>
    //       <textarea
    //         value={productData.description}
    //         onChange={(e) =>
    //           setProductData({ ...productData, description: e.target.value })
    //         }
    //       />
    //     </div>
    //     <div>
    //       <label>Stock</label>
    //       <input
    //         type="number"
    //         value={productData.stock}
    //         onChange={(e) =>
    //           setProductData({ ...productData, stock: e.target.value })
    //         }
    //       />
    //     </div>
    //     <button type="submit" disabled={loading}>
    //       {loading ? "Saving..." : "Save Changes"}
    //     </button>
    //     <button type="button" onClick={onCancel} disabled={loading}>
    //       Cancel
    //     </button>
    //   </form>
    // </div>

    <div className="w-[50%] mx-auto p-6 bg-white shadow-lg rounded-lg">
  <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
  {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-gray-700 font-medium mb-2">Name</label>
      <input
        type="text"
        value={productData.name}
        onChange={(e) =>
          setProductData({ ...productData, name: e.target.value })
        }
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Price</label>
      <input
        type="number"
        value={productData.price}
        onChange={(e) =>
          setProductData({ ...productData, price: e.target.value })
        }
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Image URL</label>
      <input
        type="text"
        value={productData.imageUrl}
        onChange={(e) =>
          setProductData({ ...productData, imageUrl: e.target.value })
        }
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Category</label>
      <input
        type="text"
        value={productData.category}
        onChange={(e) =>
          setProductData({ ...productData, category: e.target.value })
        }
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Description</label>
      <textarea
        value={productData.description}
        onChange={(e) =>
          setProductData({ ...productData, description: e.target.value })
        }
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Stock</label>
      <input
        type="number"
        value={productData.stock}
        onChange={(e) =>
          setProductData({ ...productData, stock: e.target.value })
        }
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="flex space-x-4">
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
      <button
        type="button"
        onClick={onCancel}
        disabled={loading}
        className="w-full bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:bg-gray-300"
      >
        Cancel
      </button>
    </div>
  </form>
</div>
  );
};

export default EditProduct;
