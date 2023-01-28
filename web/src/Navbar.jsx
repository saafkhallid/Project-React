import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light  navbar-light py-2 fixed-top border-bottom border-warning">
        <div className="container ">
          <Link
            to="#"
            className="navbar-brand  text-dark text-uppercase fw-bold"
          >
            Port<span className="text-warning">folio</span>
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link to="#learn" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="#questions" className="nav-link">
                  Accuill
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="#instructors" className="nav-link">
                  Service
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="#instructors" className="nav-link">
                  Instructors
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="#instructors"
                  className="nav-link btn text-white btn-warning fw-bold "
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
