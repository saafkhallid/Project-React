import React from "react";

const Login = () => {
  return (
    <div>
      <div classNameName="container-fluid">
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="border border-3 border-warning"></div>
                <div className="card bg-white shadow-lg">
                  <div className="card-body p-5">
                    <form className="mb-3 mt-md-4">
                      <h1 className="text-dark text-center mb-4 text-uppercase fw-bold">
                        Port<span className="text-warning">folio</span>
                      </h1>
                      <div className="mb-3">
                        <label
                          for="email"
                          className="fw-bold form-label fw-blod "
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="khaliid.saaf@gmail.com"
                        />
                      </div>
                      <div className="mb-3">
                        <label for="password" className="fw-bold form-label   ">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="*******"
                        />
                      </div>
                      <p className="small">
                        <a className="text-dark text-decoration-none">
                          Forgot password?
                        </a>
                      </p>
                      <div className="d-grid">
                        <button
                          className="btn fw-bold btn-outline-warning"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
