import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../layouts/ProductCard";

const Shop = () => {
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
    {
      id: 3,
      img: "img/jg4.jpeg",
      name: "Jaggery Powder Small",
      price: "299.00",
      discount: "40% Off",
    },
    {
      id: 4,
      img: "img/jg5.png",
      name: "Jaggery Nuggets",
      price: "110.00",
      
      discount: "23% Off",
    },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
      {/* heading section */}
      <div>
        <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
          Best Products
        </h1>
        <br></br>
      </div>

      {/* carousel section */}
      <div className=" mt-8">
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  );
};

export default Shop;
