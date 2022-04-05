import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between mb-4 bg-gray-200 p-6 text-xl">
        <Link className="text-green-600 font-bold text-3xl" to="/">
          Wafilife
        </Link>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
