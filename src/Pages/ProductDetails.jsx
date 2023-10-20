import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, name, photo, price, description, rating, type } = product;
  const cart = { _id, name, photo, price, description, rating, type };

  const handleCart = () => {
    fetch(
      "https://automotive-shop-server-9lnykxr8o-mdhossain07.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Done!", "Product is added to the cart!", "success");
        }
      });
  };
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center">
      <div>
        <img
          className="h-[200px] lg:w-[600px] mx-auto rounded-xl"
          src={photo}
          alt=""
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-4xl font-semibold">Model: {name}</h2>
        <p className="text-xl font-medium">Type: {type}</p>
        <p className="text-xl font-medium">Price: ${price}</p>
        <p className="text-xl font-medium">Rating: {rating}/5</p>
        <p className="font-medium">{description}</p>
        <button onClick={handleCart} className="btn bg-[#DD3333] text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
