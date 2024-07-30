import React from "react";
import spimg from "../assets/tracedprod.jpeg";
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <div className="h-screen lg:h-[70vh] flex flex-col justify-center lg:flex-row items-center bg-PrimaryColor mt-14 lg:px-32 px-5">
      {/* img section */}
      <div className=" flex justify-center w-full lg:w-2/4 pt-6">
        <img src={spimg} alt="img" />
      </div>

      {/* content section */}
      <div className=" w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start">
        <h1 className=" text-4xl font-semibold text-ExtraDarkColor">
          Special Offer On All Products
        </h1>
        <h3 className=" text-lg font-medium text-DarkColor">
          Sale Get Up To 60% off
        </h3>
        <p>
        Embrace the warmth of the sun's first journey. 
        <br>
        </br> Makar Sankranti, a celebration of new beginnings and the harvest's bounty.
        </p>
        <br>
        </br>
        <Link to="/shopping" className="bg-ExtraDarkColor text-white px-4 py-2  mt-10 font-medium hover:bg-amber-800">
  Shop Now
</Link>
      </div>
    </div>
  );
};

export default Collections;
