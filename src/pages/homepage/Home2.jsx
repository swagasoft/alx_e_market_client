import React from "react";
import { PRODUCTS } from "../../products";

import { Product } from "../product";
import Carousel from "./Carousel";
import SidePane from "./SidePane";
import CarouselTwo from "./CarouselTwo";
import CarouselThree from "./CarouselThree";
import ProductCard from "./ProductCard";
import { productList } from "../../products";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <SidePane />
        </div>

        {/*Main  */}
        <div className="col-10">
          <div className="row">
            <Carousel />
            <CarouselTwo />
            <CarouselThree />
          </div>
        </div>
        {/* End main */}
        <section className="bg-dark text-white mb-3">
          <h3 className="p-3  text-center font-weight-bold">Deal of the Day</h3>
        </section>

        {productList.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </>
  );
};

export default Home;
