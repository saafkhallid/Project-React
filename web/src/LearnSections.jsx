import React from "react";
import fundamentals from "./images/fundamentals.svg";

const LearnSections = () => {
  return (
    <div>
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={fundamentals} className="img-fluid" alt="" />
            </div>
            <div className="col-md p-5">
              <h2 className="text-warning ">Learn The Fundamentals</h2>
              <p className="text-dark ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p className="text-hide">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <a href="#" className="btn btn-dark mt-3 fw-bold">
                <i className="bi bi-chevron-right text-warning "></i>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnSections;
