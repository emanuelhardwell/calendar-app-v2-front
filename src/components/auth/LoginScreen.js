import React from "react";

export const LoginScreen = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 p-5">
          <div className="card">
            <div className="card-body">
              <h5> Login </h5>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="mb-3 d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6 p-5">
          <div className="card">
            <div className="card-body">
              <h5> Register </h5>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password repeat"
                    name="password2"
                  />
                </div>
                <div className="mb-3 d-grid gap-2">
                  <button type="submit" className="btn btn-success">
                    Create account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
