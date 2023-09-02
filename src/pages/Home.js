import React from 'react';
import { PRODUCTS } from '../products';

import { Product } from "./product"

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <div className='shop'>
                <div className='shopTitle'>
                  <h> Emarex Shop</h>
                </div>
                <div className='products'> {PRODUCTS.map((product) => (
                  <Product data={product} />
                ))} </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home