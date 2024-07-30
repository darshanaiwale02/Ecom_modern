import React, { useState } from "react";
import ProductCard from "../layouts/ProductCard";
import productsData from "./products.json";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Shopping = () => {
  const [filters, setFilters] = useState({
    allProducts: true, // Add the "All Products" filter

    peanutButter: false,
    jaggeryChakki: false,
    greenTea: false,
    jaggeryTeaPowder: false,
    jaggeryCoffee: false,
    priceRange: null,
  });
  const [toasterMessage, setToasterMessage] = useState("");


  const handleAddToCart = (productName) => {
    setToasterMessage(`Product "${productName}" added to cart`);
    toast.success("Added to Cart successfully");
  };


  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const data = productsData.products;
  
  const filteredData = data.filter((item) => {
    const itemPrice = parseFloat(item.price);
  const minPriceFloat = parseFloat(minPrice);
  const maxPriceFloat = parseFloat(maxPrice);

  const priceInRange = (!minPriceFloat || itemPrice >= minPriceFloat) &&
    (!maxPriceFloat || itemPrice <= maxPriceFloat);

    if (
      (!filters.peanutButter || item.name === "Peanut Butter") &&
      (!filters.jaggeryChakki || item.name === "Jaggery Chakki") &&
      (!filters.jaggeryNuggets || item.name === "Jaggery Nuggets") &&
      (!filters.jaggeryPowder || item.name === "Jaggery Powder" || item.name === "Jaggery Powder Small")&&
      (!filters.jaggeryCubes || item.name === "Jaggery Cubes" || item.name === "Jaggery Cube Big")&&

      (!minPrice || !maxPrice || priceInRange) &&
      (searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    ) {
      return true;
    }
    return false;
  });

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      // Deselect all filters
      Object.keys(updatedFilters).forEach((key) => {
        updatedFilters[key] = false;
      });

      // Select the clicked filter
      updatedFilters[filterName] = true;

      return updatedFilters;
    });
  };
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };
  
  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };
  
  
  return (
    <div className="min-h-screen flex flex-col justify-center pt-24" id="shopping">
    
      <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor mt-10">
        
        All Products
      </h1>
      
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
        
      </div>
     
    
      <div className="flex">
  {/* Product Cards */}
  <div className="w-1/4 p-5">
    <div className="flex flex-wrap justify-start">
      {/* Your card layout here */}
    </div>
  </div>

  {/* Filters */}
  <div className="w-3/4 p-5  ">
  <div className="flex flex-col md:justify-start ">
  <div className="flex md:justify-start mt-5 md:mr-28">
             <button
              className={`rounded-lg px-4 py-2 mr-6 text-lg shadow-md ${
                filters.allProducts
                  ? 'bg-gradient-to-r from-orange-500 to-orange-700 text-black'
                  : 'bg-gray-200 text-black'
              }`}
              onClick={() => handleFilterChange("allProducts")}
            >
              All Products
            </button>
  <button
  className={`rounded-lg px-4 py-2 mr-6 text-lg shadow-md ${
    filters.jaggeryPowder
      ? 'bg-gradient-to-r from-orange-500 to-orange-700 text-black'
      : 'bg-gray-200 text-black'
  }`}
  onClick={() => handleFilterChange("jaggeryPowder")}
>
  Jaggery Powder
</button>
<button
  className={`rounded-lg px-4 py-2 mr-6 text-lg shadow-md ${
    filters.jaggeryCubes
      ? 'bg-gradient-to-r from-orange-500 to-orange-700 text-black'
      : 'bg-gray-200 text-black'
  }`}
  onClick={() => handleFilterChange("jaggeryCubes")}
>
  Jaggery Cubes
</button>

<button
  className={`rounded-lg px-4 py-2 mr-6 text-lg shadow-md ${
    filters.jaggeryNuggets
      ? 'bg-gradient-to-r from-orange-500 to-orange-700 text-black'
      : 'bg-gray-200 text-black'
  }`}
  onClick={() => handleFilterChange("jaggeryNuggets")}
>
  Nuggets
</button>

</div>
<br>
</br>
    <div className="flex items-center mt-10">
      <label className="inline-flex items-center mr-2">Price Range:</label>
      <input
        type="number"
        placeholder="Min"
        value={minPrice}
        onChange={handleMinPriceChange}
        className="border border-gray-300 rounded-lg px-2 py-1 mr-2 text-sm w-16"
      />
      -
      <input
        type="number"
        placeholder="Max"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        className="border border-gray-300 rounded-lg px-2 py-1 ml-2 text-sm w-16"
      />
    </div>
  </div>
</div>

</div>

      {/* card section */}
     <div className="w-full flex justify-center">
  <div className="w-3/4 p-6">
    <div className="flex flex-wrap justify-start">
      {filteredData.map((item) => (
        <div className="md:w-3/4 lg:w-1/3 p-4 h-auto" key={item.id}>
          <ProductCard
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            discount={item.discount}
            addToCart={handleAddToCart}
            
            


          />
        </div>
      ))}
    </div>
  </div>
</div>
{toasterMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
          {toasterMessage}
        </div>
      )}
        <Toaster position="bottom-center" reverseOrder={false} />

    </div>
  );
};

export default Shopping;
