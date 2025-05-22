import { products } from "@/common/product";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import ProductCard from "./product-card";

const BestSeller = () => {
  const [activeTab, setActiveTab] = useState("Health Food");
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    "Health Food",
    "Proteins",
    "Gainers",
    "Pre-Workout",
    "Accesories",
    "Ayurveda",
  ];

  return (
    <div className="min-h-[300px] bg-white mt-8 p-20 max-md:p-5 font-poppins">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-3">
          <div className="border-l-4 border-green-500 h-10 rounded-3xl"></div>
          <p className="text-2xl font-medium font-poppins">Best Seller</p>
        </div>

        <div className="w-10 h-10 bg-green-500 rounded-full relative md:hidden">
          <ChevronRight
            size={30}
            strokeWidth={3}
            className="absolute top-1 left-1.5"
          />
        </div>

        <div className="hidden md:flex flex-row items-center gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="relative"
              onClick={() => setActiveIndex(index)}
            >
              {activeIndex === index && (
                <div className="absolute -inset-1 border border-black rounded-full"></div>
              )}

              <div className="w-2 h-2 bg-gray-500 rounded-full z-10 relative"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-row items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hidden">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`inline-block font-poppins font-medium px-1 py-2 cursor-pointer rounded-full transition-colors duration-200 ${
              activeTab === tab ? "text-green-300 underline" : ""
            }`}
          >
            {tab}
          </p>
        ))}
      </div>

      <div className="hidden md:flex items-center min-h-[300px] gap-4">
        <div className="w-full">
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            navigation={{
              nextEl: ".custom-next",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="!w-[200px]">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          className="custom-next bg-green-600 p-1 rounded-full shadow"
          aria-label="Next"
        >
          <ChevronRight className="text-black" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6 md:hidden">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
