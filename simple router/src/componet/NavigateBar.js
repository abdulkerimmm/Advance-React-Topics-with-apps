import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavigateBar = () => {
  return (
    <header>
      <nav>
        <h1 className="renj">here is about header</h1>
        <ul className="list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "e1" : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) => (isActive ? "e1" : undefined)}
            >
              products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigateBar;
