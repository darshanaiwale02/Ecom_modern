import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ReviewCard = ({ name }) => {
  return (
    <div className=" flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg gap-5 cursor-pointer hover:bg-PrimaryColor transition duration-300 ease-in-out">
      <div>
        <ImQuotesLeft size={25} />
        <h1 className=" text-xl font-semibold text-ExtraDarkColor pt-4">
          {name}
        </h1>
      </div>
      <p>
      I recently purchased this food jaggery coffee as a gift for my sister,
      she had been wanting to try it for a long time and was so excited when she opened it. 
      You could smell the coffee through wrapping and when she tried it, she loved it. 
      I will definately be recommending this unic jaggery coffee to my friends and recommend 
      them to purchase 
      from your website as the delivery and service was brilliant. Many thanks
      </p>
    </div>
  );
};

export default ReviewCard;
