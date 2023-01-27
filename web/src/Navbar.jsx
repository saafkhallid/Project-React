import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light  navbar-light py-2 fixed-top border-bottom border-warning">
        <div className="container ">
          <a
            href="#"
            className="navbar-brand  text-dark text-uppercase fw-bold"
          >
            Port<span className="text-warning">folio</span>
          </a>
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
                <a href="#learn" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a href="#questions" className="nav-link">
                  Accuill
                </a>
              </li>
              <li className="nav-item ">
                <a href="#instructors" className="nav-link">
                  Service
                </a>
              </li>
              <li className="nav-item ">
                <a href="#instructors" className="nav-link">
                  Instructors
                </a>
              </li>
              <li className="nav-item ">
                <a
                  href="#instructors"
                  className="nav-link btn text-white btn-warning fw-bold "
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
