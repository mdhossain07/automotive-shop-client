/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const loadedCart = useLoaderData();
  const [carts, setCarts] = useState(loadedCart);

  return (
    <div>
      {carts.map((cart) => (
        <CartItem
          key={cart._id}
          cart={cart}
          carts={carts}
          setCarts={setCarts}
        ></CartItem>
      ))}
    </div>
  );
};

export default Cart;

const CartItem = ({ cart, carts, setCarts }) => {
  const { _id, name, price, photo } = cart;

  const handleRemove = (_id) => {
    console.log("clicked....");

    fetch(`http://localhost:5000/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire("Done!", "Product is removed from the cart!", "success");
          const remaining = carts.filter((cart) => cart._id !== _id);
          setCarts(remaining);
        }
      });
  };
  return (
    <div>
      <img src={photo} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={() => handleRemove(_id)} className="btn">
        Delete
      </button>
    </div>
  );
};
