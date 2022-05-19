import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startLogin, startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const [formLoginValues, handleLoginInputChange] = useForm({
    lemail: "ema@gmail.com",
    lpassword: "123456",
  });

  const { lemail, lpassword } = formLoginValues;

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rname: "emanuel",
    remail: "ema@gmail.com",
    rpassword1: "123456",
    rpassword2: "123456",
  });

  const { rname, remail, rpassword1, rpassword2 } = formRegisterValues;

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lemail, lpassword));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (rpassword1 !== rpassword2) {
      return Swal.fire("Error", "Las contraseñas no coinciden", "error");
    }
    dispatch(startRegister(rname, remail, rpassword1));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 p-5">
          <div className="card">
            <div className="card-body">
              <h5> Login </h5>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="lemail"
                    value={lemail}
                    onChange={handleLoginInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="lpassword"
                    value={lpassword}
                    onChange={handleLoginInputChange}
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
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="rname"
                    value={rname}
                    onChange={handleRegisterInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="remail"
                    value={remail}
                    onChange={handleRegisterInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="rpassword1"
                    value={rpassword1}
                    onChange={handleRegisterInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password repeat"
                    name="rpassword2"
                    value={rpassword2}
                    onChange={handleRegisterInputChange}
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
