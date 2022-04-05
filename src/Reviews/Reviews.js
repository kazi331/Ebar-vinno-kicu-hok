import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Reviews.css";

const Reviews = (props) => {
  const { img, name, review, date, rating } = props.review;
  return (
    <div className="card shadow-lg w-11/12 mx-auto rounded-lg p-4 bg-white">
      <div className="avatar">
        <img className="rounded-full full" src={img} alt="" />
      </div>
      <div className="review">
        <h4 className="text-md">
          {name} <span className="text-sm ml-4">{date}</span>{" "}
        </h4>
        <p>{review}</p>
        <div className="text-sm flex items-center gap-4 mt-4">
          <div className="star flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="rate-num">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
