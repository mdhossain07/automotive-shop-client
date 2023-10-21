/* eslint-disable react/prop-types */
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";

import slider1 from "../assets/Blue Modern Car Sale Banner.png";
import slider2 from "../assets/Black And White Modern Car Sale Banner.png";
import slider3 from "../assets/Black and Orange Modern Car Sale Banner.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useAuth from "../hooks/useAuth";

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
          className="mt-24 lg:mt-10"
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
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

      <div>
        {matchedProducts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center mt-16">
            {matchedProducts.map((product) => (
              <ProductsCard key={product._id} product={product}></ProductsCard>
            ))}
          </div>
        ) : (
          <h2 className="text-4xl font-bold text-center mt-16">
            No Products Available
          </h2>
        )}
      </div>
    </>
  );
};

export default BrandProducts;

const ProductsCard = ({ product }) => {
  const { isDark } = useAuth();
  const { name, photo, description, price, brand, type, rating, _id } = product;

  return (
    <div
      className={`${
        isDark && "bg-gray-800 text-white"
      }shadow-xl p-6 rounded-xl space-y-4 lg:w-3/4 text-center bg-gray-200`}
    >
      <img
        className="h-[250px] w-[700px] mx-auto rounded-lg"
        src={photo}
        alt=""
      />
      <h2 className="text-3xl font-semibold">{name}</h2>
      <div className="flex justify-center gap-10">
        <p className="text-lg font-medium">Brand: {brand}</p>
        <p className="text-lg font-medium">Type: {type}</p>
      </div>

      <div className="flex justify-center gap-10">
        <p className="text-lg font-medium">
          Rating:
          <span>
            <ReactStars count={rating} size={24} color="#DD3333" />
          </span>
        </p>
        <p className="text-lg font-medium">Price: ${price}</p>
      </div>

      <p className="text-lg font-medium">{description.slice(0, 30)}...</p>

      <div className="flex justify-center gap-10 ">
        <Link to={`/${brand.toLowerCase()}/${_id}`}>
          <button className="btn bg-[#DD3333] text-white border-none">
            View Details
          </button>
        </Link>

        <Link to={`/update-product/${_id}`}>
          <button className="btn bg-[#DD3333] text-white border-none">
            Update Details
          </button>
        </Link>
      </div>
    </div>
  );
};
