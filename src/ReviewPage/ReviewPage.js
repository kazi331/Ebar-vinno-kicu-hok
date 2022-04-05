import React from "react";
import LoadReviews from "../LoadReviews/LoadReviews";

const ReviewPage = () => {
  return (
    <div>
        <h2 className="my-4 font-bold text-green-600 text-2xl border-b-2 border-b-green-600 pb-3 w-6/12 mx-auto ">What do people say about This Book</h2>
      <LoadReviews />
    </div>
  );
};

export default ReviewPage;
