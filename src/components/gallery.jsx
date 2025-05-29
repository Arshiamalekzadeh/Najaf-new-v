import { IconButton } from "@mui/material";
import { CloseCircle } from "iconsax-react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Gallery = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  async function openImage(item) {
    setSelectedImage(item);
  }

  return (
    <>
      <Swiper
        dir="rtl"
        spaceBetween={10}
        slidesPerView={1} 
        breakpoints={{
          576: {
            slidesPerView: 2, 
          },
          768: {
            slidesPerView: 3, 
          },
          990: {
            slidesPerView: 6, 
          },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} onClick={() => openImage(item)}>
            <div className="w-full h-40 md:h-60 lg:h-40 overflow-hidden hover:scale-105 transition-all duration-200 hover:rotate-2">
              <img
                src={item}
                className="w-full h-full object-cover"
                alt={`Image ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedImage && (
        <LightBox image={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </>
  );
};

export const LightBox = ({ image, setSelectedImage }) => {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 bg-slate-600 bg-opacity-70 z-[999] flex items-center justify-center p-4"
      onClick={() => setSelectedImage(null)}
    >
      <IconButton className="!absolute top-4 right-4 z-50">
        <CloseCircle className="text-white" size={48} />
      </IconButton>
      <img
        src={image}
        alt=""
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

export default Gallery;
