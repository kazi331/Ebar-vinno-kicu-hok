import React from "react";
import "./Reviews.css";

const Reviews = ({ review }) => {
  return (
    <div>
      <h2>{review.name}</h2>
    </div>
  );
};

export default Reviews;
