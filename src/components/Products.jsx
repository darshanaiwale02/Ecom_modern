import React from "react";
import ProductCard from "../layouts/ProductCard";

const Products = () => {
  const data = [
    {
      id: 0,
      img: "img/jg1.jpeg",
      name: "Jaggery Powder",
      price: "529.00",
      discount: "20% Off",
    },
    {
      id: 1,
      img: "img/jg2.jpeg",
      name: "Jaggery Cubes Big",
      price: "208.00",
      discount: "40% Off",
    },
    {
      id: 2,
      img: "img/jg3.jpeg",
      name: "Jaggry Cubes",
      price: "104.00",
      discount: "35% Off",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16">
      {/* heading section */}
      <div>
        <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
          New Arrivals
        </h1>
      </div>

      {/* Cards section */}
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
