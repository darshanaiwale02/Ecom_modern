import React from "react";
import ProductCard from "../layouts/ProductCard";

const Features = () => {
  const data = [
    {
      id: 6,
      img: "src/assets/img/jaggery9.png",
      name: "Peanut Butter",
      price: "398.00",
      discount: "24% Off",
    },
    {
      id: 7,
      img: "src/assets/img/jaggery10.jpg",
      name: "Jaggery Chakki",
      price: "258.00",
      discount: "40% Off",
    },
    {
      id: 8,
      img: "src/assets/img/jaggery11.png",
      name: "Green Tea",
      price: "104.00",
      discount: "35% Off",
    },
    {
      id: 9,
      img: "src/assets/img/jaggery12.png",
      name: "Jaggery Tea Powder",
      price: "299.00",
      discount: "40% Off",
    },
    {
      id: 10,
      img: "src/assets/img/jaggery13.jpg",
      name: "Jaggery Cofee",
      price: "299.00",
      discount: "40% Off",
    },
    
  ];

  return (
    <div className=" min-h-screen flex flex-col justify-center pt-24">
      {/* heading section */}
      <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
        Exclusive Products
      </h1>

      {/* card section */}
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div className=" md:w-2/4 lg:w-1/4">
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
