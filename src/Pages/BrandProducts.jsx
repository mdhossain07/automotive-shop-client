/* eslint-disable react/prop-types */
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
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
      <Link to={`/${brand.toLowerCase()}/${_id}`}>
        <button className="btn ">View Details</button>
      </Link>

      <Link to={`/update-product/${_id}`}>
        <button className="btn ">Update Details</button>
      </Link>
    </div>
  );
};
