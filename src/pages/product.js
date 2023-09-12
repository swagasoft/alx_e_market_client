import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemsAmount = cartItems[id];
    return (
        <>
            <section className='home-wrapper'>
                <div className='container-xxl'>
                    <div className='product'>
                        <img src={productImage} alt='' />
                    </div>
                    <div className='description'>
                        <p>
                            <b>{productName}</b>
                        </p>
                        <p>₦{price}</p>
                        <button className='toCart' onClick={() => addToCart(id)}>add to cart{cartItemsAmount > 0 && <>({cartItemsAmount})</>}</button>
                    </div>
                </div>
            </section >
        </>
    );
};
