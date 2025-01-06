'use client'
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
const ProductCard = ({ product }) => {

  return (
    <Link href={`/page/${product?.slug}`}>
      <div className="p-5 max-w-[calc(258px+20px)] border cursor-pointer border-light rounded-md hover:opacity-85 relative group hover:scale-[1.1]  transition-all duration-300">
        <div className="w-[242px] h-[242px] relative overflow-hidden mb-2">
          <Image
            className=" object-cover "
            src={product?.imageUrl}
            alt={product?.name}
            loading="lazy"
            fill={true}
            objectFit="contain"
          />
        </div>
        <div className="text-sm mb-1 text-dark font-medium">
          {product?.category}
        </div>
        <div className="text-base mb-2 ">{product?.name}</div>
        <div className="flex text-sm text-primary-2 mt-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="mt-1 font-medium">$ {product?.price}</div>
        <div className="absolute  bg-black flex items-center justify-center top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 bg-opacity-10 transition-all duration-300 rounded-md">
          <div className="text-xl opacity-100 flex space-x-2">
            <div className="bg-dark text-white hover:bg-primary p-4 rounded-full">
              <MdAddShoppingCart />
            </div>
            <div className="bg-dark text-white hover:bg-red-500 p-4 rounded-full">
              <FaHeart />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
