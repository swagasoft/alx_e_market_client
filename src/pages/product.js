import React from 'react';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    return (
        <>
            <section className='home-wrapper'>
                <div className='product'>
                    <img src={productImage} alt='' />
                </div>
                <div className='description'>
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p>${price}</p>
                </div>
            </section >
        </>
    );
};
