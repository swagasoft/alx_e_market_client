import React from "react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
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
          </div>
        </div>
      </section>
    </>
  );
};
