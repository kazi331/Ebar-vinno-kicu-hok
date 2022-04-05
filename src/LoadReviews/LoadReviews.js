import React, { useEffect, useState } from "react";
import Reviews from "../Reviews/Reviews";

const LoadReviews = ({quantity}) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4 mb-12 bg-gray-50">
      {reviews.slice(0, quantity).map((review) => (
        <Reviews key={review.id} review={review} />
      ))}
    </div>
  );
};

export default LoadReviews;
