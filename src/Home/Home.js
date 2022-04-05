import React from "react";
import { Link } from "react-router-dom";
import LoadReviews from "../LoadReviews/LoadReviews";
import Book from "./Book";
import "./Home.css";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto mb-8">
      <Book />
      <h2 className="text-3xl my-8 uppercase font-bold w-6/12 mx-auto border-b-green-600 border-b-2 pb-2 ">
        Customer Reviews (3){" "}
      </h2>
      <LoadReviews quantity={3} />
      <Link
        className="text-lg border py-2 px-16 rounded bg-green-600 text-white"
        to="/reviews"
      >
        See all reviews
      </Link>
    </div>
  );
};

export default Home;
