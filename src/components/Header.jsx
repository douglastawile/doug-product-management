import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={`/`} className="btn btn-primary ms-2 me-2 my-2">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={`/products`}
            className="btn btn-outline-primary ms-2 me-2 my-2"
          >
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}
