/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const carts = useLoaderData();
  console.log(carts);
  return (
    <div>
      {carts.map((cart) => (
        <CartItem key={cart._id} cart={cart}></CartItem>
      ))}
    </div>
  );
};

export default Cart;

const CartItem = ({ cart }) => {
  const { name, price, photo } = cart;
  return (
    <div>
      <img src={photo} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};
