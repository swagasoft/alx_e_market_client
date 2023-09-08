import React from 'react';
import { PRODUCTS } from '../products';

import { Product } from "./product";

const OurStore = () => {
  return (
    <>
      <div className='container-xxl'>
        <section className="bg-dark text-white mb-3">
          <h3 className="p-3  text-center font-weight-bold">
            Our Store
          </h3>
        </section>
        <div className='products'> {PRODUCTS.map((product) => (
          <Product data={product} />
        ))} </div>
      </div>
    </>
  );
};

export default OurStore;