/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FaCircleXmark } from "react-icons/fa6";

const Cart = () => {
  const loadedCart = useLoaderData();
  const [carts, setCarts] = useState(loadedCart);

  return (
    <>
      <div>
        <h2 className="text-3xl font-semibold text-center mt-10">My Cart</h2>
      </div>
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
    </>
  );
};

export default Cart;

const CartItem = ({ cart, carts, setCarts }) => {
  const { _id, name, price, photo } = cart;

  const handleRemove = (_id) => {
    fetch(`http://localhost:5000/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Done!", "Product is removed from the cart!", "success");
        const remaining = carts.filter((cart) => cart._id !== _id);
        setCarts(remaining);
      });
  };
  return (
    <div className="flex gap-10 mt-10 items-center">
      <div>
        <img className="w-[300px] rounded-xl" src={photo} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-lg font-medium">${price}</p>
        <FaCircleXmark
          onClick={() => handleRemove(_id)}
          className="text-[#DD3333] text-2xl cursor-pointer"
        ></FaCircleXmark>
      </div>
    </div>
  );
};
