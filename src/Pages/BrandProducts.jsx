/* eslint-disable react/prop-types */
import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandProducts = () => {
  const { brand } = useParams();
  const products = useLoaderData();

  const matchedProducts = products.filter(
    (product) => product.brand.toLowerCase() === brand.toLowerCase()
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {matchedProducts.map((product) => (
        <ProductsCard key={product._id} product={product}></ProductsCard>
      ))}
    </div>
  );
};

export default BrandProducts;

const ProductsCard = ({ product }) => {
  const { name, photo, price, brand, _id } = product;

  return (
    <div className="shadow-xl p-3 rounded-xl space-y-2 w-3/5 text-center">
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
