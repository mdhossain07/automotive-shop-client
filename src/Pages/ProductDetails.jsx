import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, name, photo, price, description, rating, type } = product;
  const cart = { _id, name, photo, price, description, rating, type };

  const handleCart = () => {
    // console.log(cart._id);
    // console.log("cart", id);

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

        if (cart._id === _id) {
          alert("product is already added");
        } else {
          Swal.fire("Done!", "Product is added to the cart!", "success");
        }
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
