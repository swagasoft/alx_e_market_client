import React from "react";
import { PRODUCTS } from "../../products";

import { Product } from "../product";
import Carousel from "./Carousel";
import SidePane from "./SidePane";
import CarouselTwo from "./CarouselTwo";
import CarouselThree from "./CarouselThree";
import ProductCard from "./ProductCard";
import { productList } from "../../products";
import OurStore from "../OurStore";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/*Main  */}
          <div className="col-12">
            <div className="rows d-flex gap-2 justify-content-between">
              <Carousel />
              <CarouselTwo />
              <CarouselThree />
            </div>
          </div>
          {/* End main */}
          <section className="bg-dark text-white mb-3">
            <h3 className="p-3  text-center font-weight-bold">
              Deal of the Day
            </h3>
          </section>

          {productList.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
        <OurStore />
      </div>
    </>
  );
};

export default Home;
