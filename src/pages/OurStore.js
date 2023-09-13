import React from 'react';
import { PRODUCTS } from '../products';
import { Product } from "./product";

const OurStore = () => {
  return (
    <>
      <section className="bg-dark text-white mb-3">
        <h3 className="p-3  text-center font-weight-bold">
          Our Store
        </h3>
      </section>
      <div className='container-fluid py-2 px-0'>
        <div className='products'>
          {PRODUCTS.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurStore;
