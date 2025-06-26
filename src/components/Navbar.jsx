import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow">
      {/* Left: Logo */}
      <Link to="/" className="text-2xl font-bold text-red-500">
        MiniTube
      </Link>

      {/* Middle: Search (dummy input) */}
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 rounded-md text-black w-1/3"
        disabled
      />

      {/* Right: Watch Later button */}
      <Link to="/watch-later" className="relative">
        <button className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600">
          Watch Later
          <span className="ml-2 bg-white text-red-500 font-bold px-2 py-0.5 rounded-full text-sm">
            0
          </span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
