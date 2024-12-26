import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";

function Navbar() {
  // Navlist data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 cursor-pointer">
      {/* Home */}
      <li>
        {" "}
        <Link to={"/"}>Home</Link>
      </li>
      {/* All Product */}
      <li>
        <Link to={"/allproducts"}>All Products</Link>
      </li>
      {/* Sign Up */}
      <li>
        <Link to={"/signup"}>Signup</Link>
      </li>
      {/* user */}
      <li>
        <Link to={"/user-dashboard"}>Anjali</Link>
      </li>
      {/* Admin */}
      <li>
        <Link to={"/admin-dashboard"}>Admin</Link>
      </li>
      {/* Logout */}
      {/* <li>
        <Link to={"/"}>Logout</Link>
      </li> */}
      {/* Cart */}
      <li>
        <Link to={"/cart"}>Cart(0)</Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-pink-600 sticky top-0">
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
        {/* left section */}
        <div className="left py-3 lg:py-0">
          <Link to="/">
            <h2 className="text-2xl text-white text-center font-bold cursor-pointer">
              Anjali's Mart
            </h2>
          </Link>
        </div>
        {/* right section */}
        <div className=" right flex justify-center mb-4 lg:mb-0">{navList}</div>
        {/* search bar */}
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;
