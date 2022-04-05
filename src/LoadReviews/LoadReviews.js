import React, { useEffect, useState } from "react";
import Reviews from "../Reviews/Reviews";

const LoadReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  console.log(reviews);
  return (
    <div className="grid grid-cols-1 gap-4 mb-12 bg-gray-50">
      {reviews.map((review) => (
        <Reviews key={review.id} review={review} />
      ))}
    </div>
  );
};

export default LoadReviews;
