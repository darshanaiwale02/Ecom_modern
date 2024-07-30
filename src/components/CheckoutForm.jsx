import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { useLocation } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const CheckoutForm = ({ total}) => {
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const location = useLocation();
  const { cartData } = location.state || {}; // Use default value to prevent errors if state is undefined

  let Total = 0;
  cartData.forEach((item) => {
    Total += item.price * item.quantity;
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or perform validation
    console.log("Form submitted");
    console.log("Address:", address);
    console.log("Pincode:", pincode);
    console.log("Phone Number:", phoneNumber);
    console.log("Total:", total);

    // Set showThankYouPage to true
    setShowThankYouPage(true);
  };

  return (
    <div className="max-w-[400px] mx-auto pt-28">
      {showThankYouPage ? (
        <div>
        <div className="text-xl font-medium text-center mt-16">
          Thank you for your order!
        </div>
        <br>
        </br>
        <div className="flex justify-center mt-4">
        <Link to="/shopping" className="bg-ExtraDarkColor text-white py-2 px-4 rounded-lg font-medium block w-max mx-auto mb-5">
  Back to Menu
</Link>
        </div>
      </div>
      
            

        ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
            
        <div className="cards-container">
  {cartData.map((item, index) => (
    <div key={index} className="relative">
      <div className="absolute top-0 right-0 bg-gray-200 rounded-bl-lg px-2 py-1">
        Product {index + 1}
      </div>
      <div className="bg-white shadow-md rounded p-4 mt-2"  style={{ border: '1px solid #e5e7eb' }}>
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-700">Price: Rs.{item.price}</p>
        <p className="text-gray-700">Quantity: {item.quantity}</p>
      </div>
    </div>
  ))}
</div>

          <label htmlFor="address" className="block">
            Address:
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </label>
          <label htmlFor="pincode" className="block">
            Pincode:
            <input
              type="text"
              id="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </label>
          
          <label htmlFor="phone" className="block">
            Phone Number:
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </label>
          <div className="flex justify-between items-center font-medium text-xl">
            <p>Total:</p>
            <p>Rs.{Total}/-</p>
          </div>
        <button
            type="submit"
            className="bg-ExtraDarkColor text-white w-full py-2 font-medium mb-5"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};
CheckoutForm.propTypes = {
  total: PropTypes.number.isRequired,
};
export default CheckoutForm;
