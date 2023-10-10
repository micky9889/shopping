import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useCart } from "../context/ContextApi";

const Nav = () => {
  const { cart } = useCart();
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const linkStyle = {
    // border: '2px solid transparent', // Initial border style
    borderBottom: "2px solid transparent",
  };

  const activeLinkStyle = {
    borderBottom: "2px solid white",
    padding: ".5rem", // Border style for the active link
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">SHOP</div>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                style={activeLink === "/" ? activeLinkStyle : linkStyle}
                className="text-white"
                onClick={() => handleClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/boy"
                style={activeLink === "/boy" ? activeLinkStyle : linkStyle}
                className="text-white"
                onClick={() => handleClick("/boy")}
              >
                Boy
              </Link>
            </li>
            <li>
              <Link
                to="/girl"
                style={activeLink === "/girl" ? activeLinkStyle : linkStyle}
                className="text-white"
                onClick={() => handleClick("/girl")}
              >
                Girls
              </Link>
            </li>
          </ul>
          <div className="flex space-x-1 items-center">
            <Link
              to="/search"
              style={activeLink === "/search" ? activeLinkStyle : linkStyle}
              className="text-white"
              onClick={() => handleClick("/search")}
            >
              <p>search</p>
            </Link>
            
            <CiUser color="white" size={35} />
            <Link to="/cart" className="relative inline-block">
              <AiOutlineShoppingCart color="white" size={35} />
              {cart.length > 0 ? (
                <div class="bg-red-500 w-6 h-6 rounded-full absolute top-0 right-0 -mt-2 -mr-2 flex items-center justify-center text-white font-bold text-sm">
                  {cart.length}{" "}
                </div>
              ) : null}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
