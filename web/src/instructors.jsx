import React from "react";

const instructors = () => {
  return (
    <div>
      <section id="instructors" className="p-5 bg-warning">
        <div className="container">
          <h2 className="text-center text-dark">Our Instructors</h2>
          <p className="lead text-center text-dark fw-bold mb-4">
            Our instructors all have 5+ years working as a web developer in the
            industry
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 col-sm-12">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">John Doe</h3>
                  <p className="card-text ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-sm-12">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Jane Doe</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-sm-12">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Steve Smith</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-sm-12">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Sara Smith</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-3"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-3"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-3"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default instructors;
