import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mt-10 flex justify-center gap-10 text-xl">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "red" : "black",
            fontWeight: e.isActive ? "bold" : "normal",
            textDecoration: e.isActive ? "underline" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "red" : "black",
            fontWeight: e.isActive ? "bold" : "normal",
            textDecoration: e.isActive ? "underline" : "",
          };
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-600" : "",
            e.isActive ? "font-bold" : "",
            e.isActive ? "underline" : "",
          ].join(" ");
        }}
        to="/shop"
      >
        Shop
      </NavLink>
    </nav>
  );
};

export default Nav;
