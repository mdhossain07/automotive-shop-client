import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, photo, price, description, rating, type } = product;
  console.log(product);
  const cart = { name, photo, price, description, rating, type };

  const handleCart = () => {
    console.log("clicked....");

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("added to cart");
      });
  };
  return (
    <div>
      <img src={photo} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <button onClick={handleCart} className="btn ">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetails;
