import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bg-gray-200">
      <nav className="flex items-center justify-between mb-12 bg-gray-200 p-6 text-xl max-w-7xl mx-auto">
        <Link className="logo text-green-600 font-bold text-3xl" to="/">
          Vinno Kichu
        </Link>
        <div className="menu flex gap-4 text-green-900">
          <Link to="/">Home</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
