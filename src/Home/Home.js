import React from "react";
import LoadReviews from "../LoadReviews/LoadReviews";
import Book from "./Book";
import "./Home.css";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Book />
      <h2 className="text-4xl my-8">Top Revies</h2>
      <LoadReviews quantity={8} />
    </div>
  );
};

export default Home;
