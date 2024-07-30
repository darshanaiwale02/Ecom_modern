import React from "react";
import imgn from "../assets/jaggerynew.jpg"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
<div
  className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10"
  style={{ backgroundImage: `url(${imgn})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>      {/* content section  */}
      <div className=" space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight text-ExtraDarkColor w-full lg:w-3/4">
          Discovering the <br></br>Pure Sweetness Of the Nature!
        </h1>
        <p className=" w-full lg:w-3/4 text-DarkColor font-medium">
        Discover the wholesome goodness of our jaggery products, 
        <br></br>crafted with care and tradition.
         
        </p>
     <br></br>
<Link to="/shopping" className="bg-ExtraDarkColor text-white  px-4 py-2 font-medium active:bg-amber-800">
          shop now
</Link>
      </div>

      {/* img section */}
      
    </div>
  );
};

export default Home;
