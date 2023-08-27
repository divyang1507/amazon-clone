import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const SliderSwiper = ({slidesPerView, spaceBetween, imgWidth, imgHeight, componentprops}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      navigation={{ hiddenClass: "swiper-button-hidden", hide: true }}
      scrollbar={{ draggable: false, hide: true }}
      breakpoints={{
        // breakpoints for resposive Slider
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        Slide 1{" "}
        <Image
          src={`https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg`}
          width={imgWidth}
          height={imgHeight}
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        Slide 2{" "}
      {componentprops}
      </SwiperSlide>
      <SwiperSlide>
        Slide 3{" "}
        <Image
          src={`https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg`}
          width="500"
          height="500"
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        Slide 4{" "}
        <Image
          src={`https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg`}
          width="500"
          height="500"
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        Slide 5{" "}
        <Image
          src={`https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg`}
          width="500"
          height="500"
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        Slide 6{" "}
        <Image
          src={`https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg`}
          width="500"
          height="500"
          alt="Picture of the author"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderSwiper;
