/* eslint-disable react/prop-types */
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "../assets/Blue Modern Car Sale Banner.png";
import slider2 from "../assets/Black And White Modern Car Sale Banner.png";
import slider3 from "../assets/Black and Orange Modern Car Sale Banner.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BrandProducts = () => {
  const { brand } = useParams();
  const products = useLoaderData();

  const matchedProducts = products.filter(
    (product) => product.brand.toLowerCase() === brand.toLowerCase()
  );

  return (
    <>
      <div>
        <Swiper
          className="mt-10"
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img className="w-full lg:h-[550px]" src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full lg:h-[550px]" src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full lg:h-[550px]" src={slider3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center mt-16">
        {matchedProducts.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
    </>
  );
};

export default BrandProducts;

const ProductsCard = ({ product }) => {
  const { name, photo, price, brand, _id } = product;

  return (
    <div className="shadow-xl p-3 rounded-xl space-y-2 lg:w-3/5 text-center">
      <img className="h-[200px] w-[350px] mx-auto p-3" src={photo} alt="" />
      <h2 className="text-3xl font-semibold">{name}</h2>
      <p className="text-lg font-medium">${price}</p>

      <div className="flex justify-center gap-10">
        <Link to={`/${brand.toLowerCase()}/${_id}`}>
          <button className="btn bg-[#DD3333] text-white">View Details</button>
        </Link>

        <Link to={`/update-product/${_id}`}>
          <button className="btn bg-[#DD3333] text-white">
            Update Details
          </button>
        </Link>
      </div>
    </div>
  );
};
