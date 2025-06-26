import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = ({ watchLaterCount }) => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 shadow-md dark:text-white transition-colors">
      <Link to="/" className="text-xl font-bold">MiniTube</Link>
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 rounded border dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      />
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <Link to="/watch-later">
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition dark:bg-blue-700 dark:hover:bg-blue-800">
            Watch Later {watchLaterCount > 0 && <span>({watchLaterCount})</span>}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

