import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart } = useContext(ShopContext);
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
                        <button className='toCart'>add to cart</button>
                    </div>
                </div>
            </section >
        </>
    );
};
