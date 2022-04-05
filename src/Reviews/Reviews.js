import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Reviews.css";

const Reviews = ({ review }) => {
  return (
    <div className="card shadow-lg w-11/12 mx-auto rounded-lg p-4 bg-white">
      <div className="avatar">
        <img className="rounded-full full" src={review.img} alt="" />
      </div>
      <div className="review">
        <h4 className="text-md">
          {review.name} <span className="text-sm ml-4">{review.date}</span>{" "}
        </h4>
        <p>{review.review}</p>
        <div className="text-sm flex items-center gap-4 mt-4">
          <div className="star flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="rate-num">{review.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
