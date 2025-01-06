"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

const Slider = ({ filter, header }) => {
  const { fetchProducts, loading, error } = useContext(ProductContext);
  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const data = await fetchProducts({ category: filter });
      setFilterProduct(data);
    };
    fetching();
  }, [filter]);

  return (
    <div className="my-16">
      <div className="mb-4 text-xl font-semibold">{header}</div>
      <Swiper className=""
        spaceBetween={0}
        slidesPerView={4}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        >
        {filterProduct.map((product) => {
          return (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
