/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const CarBrands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center mt-16">
        Our Featured Brands
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {brands.map((brand) => (
          <BrandCards key={brand.id} brand={brand}></BrandCards>
        ))}
      </div>
    </div>
  );
};

export default CarBrands;

const BrandCards = ({ brand }) => {
  const { isDark } = useAuth();
  const { brand_name, brand_image } = brand;
  return (
    <Link to={`/brand-products/${brand_name.toLowerCase()}`}>
      <div className="mt-10">
        <div
          className={`${
            isDark && "bg-gray-800 text-white"
          } bg-gray-200 space-y-2 rounded-xl shadow-xl p-5 lg:w-[400px] lg:h-[300px]`}
        >
          <img className="w-[200px] mx-auto" src={brand_image} alt="" />
          <h2 className="text-4xl font-bold text-center">{brand_name}</h2>
        </div>
      </div>
    </Link>
  );
};
