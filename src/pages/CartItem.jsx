import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <>
      <section className="home-wrapper">
        <div className="container-xxl">
          <div className="product">
            <img src={productImage} alt="" />
          </div>
          <div className="description">
            <p>
              <b>{productName}</b>
            </p>
            <p>₦{price}</p>
            <div className="Count">
              <button onClick={() => addToCart(id)}> + </button>

              <input
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(id, Number(e.target.value))
                } // Corrected parameter order
              />
              <button onClick={() => removeFromCart(id)}> - </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
