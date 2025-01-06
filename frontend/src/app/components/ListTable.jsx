"use client";
import { ProductContext } from "../Context/ProductContext";
import { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

export function ListTable({ handleEditClick }) {
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
    <div className="overflow-x-auto w-full bg-white shadow-md rounded-lg my-4 mx-12">
      <table className="w-full table-auto text-sm text-left text-gray-500">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3 border-b">Name</th>
            <th className="px-4 py-3 border-b text-center">Category</th>
            <th className="px-4 py-3 border-b text-center">Price</th>
            <th className="px-4 py-3 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product?._id} className="hover:bg-gray-50">
              <td className="px-4 py-3 border-b">{product?.name}</td>
              <td className="px-4 py-3 border-b text-center">
                {product?.category}
              </td>
              <td className="px-4 py-3 border-b text-center">
                {product?.price}
              </td>
              <td className="px-4 py-3 border-b text-center">
                <div
                  onClick={() => handleEditClick(product?._id)}
                  className="text-blue-500 flex items-center justify-center hover:text-blue-700 cursor-pointer">
                  <FaEdit />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
