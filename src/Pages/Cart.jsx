/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Cart = () => {
  const loadedCart = useLoaderData();
  const [carts, setCarts] = useState(loadedCart);
  const { isDark } = useAuth();

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
        fetch(
          `https://automotive-shop-server-9lnykxr8o-mdhossain07.vercel.app/cart/${_id}`,
          {
            method: "DELETE",
          }
        )
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
    <div className="h-[50vh]">
      <div>
        <h2 className="text-3xl font-semibold text-center">My Cart</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className={`${isDark && "text-white"} 'text-black`}>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, index) => (
              <tr key={cart._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className="w-full lg:w-[250px] rounded-xl"
                    src={cart.photo}
                    alt=""
                  />
                </td>
                <td>
                  <h2 className="lg:text-lg font-medium">{cart.name}</h2>
                </td>
                <td>
                  <p className="lg:text-lg font-medium">${cart.price}</p>
                </td>
                <td>
                  <button
                    onClick={() => handleRemove(cart._id)}
                    className="btn bg-[#DD3333] text-white border-none"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
