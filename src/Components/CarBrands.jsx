/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CarBrands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-[#DD3333] text-center mt-16">
        Car Brands
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {brands.map((brand) => (
          <BrandCards key={brand.id} brand={brand}></BrandCards>
        ))}
      </div>
    </div>
  );
};

export default CarBrands;

const BrandCards = ({ brand }) => {
  const { brand_name, brand_image } = brand;
  return (
    <Link to={`/brand-products/${brand_name.toLowerCase()}`}>
      <div className="mt-10">
        <div className="flex flex-col lg:flex-row items-center lg:p-5 shadow-xl lg:w-[650px] lg:h-[300px] rounded-lg">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">{brand_name}</h2>
            <p className="text-lg">
              Designed by{" "}
              <span className="text-[#DD3333] font-semibold">New Desires</span>{" "}
            </p>
          </div>

          <div>
            <img className="w-[500px] h-[300px] p-6" src={brand_image} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};
