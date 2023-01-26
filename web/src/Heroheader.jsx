import React from "react";
import showcase from "./images/showcase.svg";

const Heroheader = () => {
  return (
    <div>
      <section className=" text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 className="text-dark">
                Become a <span className="text-warning"> Web Developer </span>
              </h1>
              <p className="lead my-4 text-dark">
                I'm looking to develop technical skills through training and
                practical projects with the aim of improving and be operational
                in line with web development!
              </p>
              <button
                className="btn btn-warning btn-lg text-white  "
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Start The Projet
              </button>
            </div>

            <img
              className="img-fluid w-50 d-none d-sm-block"
              src={showcase}
              alt="showcase"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heroheader;
