"use client";
import ProductImageSelector from "@/app/components/ProductImageSelector";
import QuantityButton from "@/app/components/QuantityButton";
import { ProductContext } from "@/app/Context/ProductContext";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCash } from "react-icons/io";
import { MdOutlineReplay10 } from "react-icons/md";
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
  console.log(singleProduct);
  const productImages = [
    "https://m.media-amazon.com/images/I/61f4dTush1L._SX679_.jpg", // Replace with your actual image paths
    "https://m.media-amazon.com/images/I/81BnjSLm2oL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/617JW0DrG8L._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg",
  ];
  return (
    <div>
      <div className="flex items-start justify-center w-[90%] mx-auto gap-10">
        <div className="flex-1">
          <ProductImageSelector images={productImages} />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl mb-2 font-medium">{singleProduct?.name}</h1>
          <div className="text-lg flex text-primary gap-1 mb-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className=" mb-3">
            <h3 className="text-2xl text-green-600 font-medium">
              ${singleProduct?.price}
            </h3>
            <p>Inclusive of all taxes</p>
          </div>
          <div className="text-base">{singleProduct?.description}</div>

          <div className="flex mt-5 p-2 text-dark border-y border-mid">
            <div className="flex flex-col items-center justify-start text-2xl w-24  p-2">
              <TbTruckDelivery />
              <p className="text-xs text-center mt-1 ">
              Fast Delivery
              </p>
            </div>
            <div className="flex flex-col items-center justify-start text-2xl w-24  p-2">
              <IoIosCash />
              <p className="text-xs text-center mt-1 ">
             Cash on Delivery
              </p>
            </div>
            <div className="flex flex-col items-center justify-start text-2xl w-24  p-2">
              <MdOutlineReplay10 />
              <p className="text-xs text-center mt-1 ">
             10 days Replacement
              </p>
            </div>
           
          </div>
          <div className="font-medium text-md flex items-center gap-4 mt-6">
            <p>Quantity</p>
            <QuantityButton />
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-primary text-lightest font-medium px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button className="bg-primary text-lightest font-medium px-4 py-2 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
