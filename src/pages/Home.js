import React from 'react';
import { PRODUCTS } from '../products';

import { Product } from "./product"

const Home = () => {
  return (
    <>
      <div className='container-xxl'>
        <div className='shopTitle'>
          <h> Emarex Shop</h>
        </div>
        <div className='products'> {PRODUCTS.map((product) => (
          <Product data={product} />
        ))} </div>
      </div>
    </>
  );
};

export default Home