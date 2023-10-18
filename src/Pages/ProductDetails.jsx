import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, photo, price, description, rating, type } = product;
  console.log(product);
  return (
    <div>
      <img src={photo} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <button className="btn ">Add To Cart</button>
    </div>
  );
};

export default ProductDetails;
