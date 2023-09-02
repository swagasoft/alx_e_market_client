import React from 'react'

export const Product = (props) => {
    const { id, productName, price, peoductImage } = props.data;
    return (
        <div>{productName} </div>
    )
};