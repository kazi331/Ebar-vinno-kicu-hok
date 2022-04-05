import React from "react";
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
        <span className="text-sm">Rating: {review.rating}</span>
      </div>
    </div>
  );
};

export default Reviews;
