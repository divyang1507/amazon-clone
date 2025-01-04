"use client";
import { Table } from "flowbite-react";
import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";
import Link from "next/link";

export function ListTable({handleEditClick}) {
  const { products, loading, error } = useContext(ProductContext);
  console.log(products);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products?.map((product) => {
            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={product?._id}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product?.name}
                </Table.Cell>
                {/* <Table.Cell>Sliver</Table.Cell> */}
                <Table.Cell>{product?.category}</Table.Cell>
                <Table.Cell>${product?.price}</Table.Cell>
                <Table.Cell>
                  <div onClick={() => handleEditClick(product?._id)}
                    // href={`/page/edit/${product?._id}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </div>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
