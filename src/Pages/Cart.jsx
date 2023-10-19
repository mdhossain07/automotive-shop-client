/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const loadedCart = useLoaderData();
  const [carts, setCarts] = useState(loadedCart);

  return (
    <>
      <div>
        <h2 className="text-3xl font-semibold text-center">My Cart</h2>
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
    console.log("item", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
              const remaining = carts.filter((cart) => cart._id !== _id);
              setCarts(remaining);
            }
          });
      }
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
        <button
          onClick={() => handleRemove(_id)}
          className="btn bg-[#DD3333] text-white cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
