"use client";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ShowCaseCard from "./components/ShowCaseCard";
import SliderSwiper from "./components/SliderSwiper";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
     <div className="m-8 ">
     <SliderSwiper
        slidesPerView={5}
        spaceBetween={2}
        imgWidth={200}
        imgHeight={200}
        componentprops={<ProductCard/>}
      />
     <div className="flex justify-between"> <ShowCaseCard />
      <ShowCaseCard />
      <ShowCaseCard />
      <ShowCaseCard />
    
      </div>
      <ProductCard/>
      
     </div>
    </>
  );
}
