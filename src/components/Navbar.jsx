import Link from "next/link";
import React from "react";

const NavLink = ({ title, pathName }) => {
  return (
    <li>
      <Link href={pathName || "#"}>{title}</Link>
    </li>
  );
};
const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink title="Home" />
              <NavLink title="Testimonial" />
              <NavLink title="About Us" />
              <NavLink title="Contact Us" />
              {/* <li>
                <a>Home</a>
              </li> */}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Money Exchange</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLink title="Home" />
              <NavLink title="Testimonial" />
              <NavLink title="About Us" />
              <NavLink title="Contact Us" />
            </ul>
          </div>
          <a className="btn cus-bg-primary text-white hover:bg-blue-900">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
