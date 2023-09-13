import React, { useContext } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/ShopContext";
import { CartItem } from "./CartItem";
import { NavLink, Link } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const TotalAmount = getTotalCartAmount();
  return (
    <>
      <div className="cart">
        {TotalAmount > 0 ? (
          <div>
            <h1>your cart items</h1>
          </div>
        ) : (
          <div>
            <h1>Your Cart is Empty</h1>
          </div>
        )}
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          return null; // Make sure to have a return statement for all cases
        })}
        <div className="checkout">
          <p>SubTotal: {TotalAmount}</p>
          <button>
            <NavLink to="/Home"> Continue Shopping </NavLink>
          </button>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
