import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const [formLoginValues, handleLoginInputChange] = useForm({
    lemail: "",
    lpassword: "",
  });

  const { lemail, lpassword } = formLoginValues;

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lemail, lpassword));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 p-5 mx-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="mb-4 text-center">Iniciar sesión</h4>
              <form onSubmit={handleLogin}>
                <div className="mb-3 input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Correo"
                    name="lemail"
                    value={lemail}
                    onChange={handleLoginInputChange}
                  />
                </div>

                <div className="mb-3 input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="lpassword"
                    value={lpassword}
                    onChange={handleLoginInputChange}
                  />
                </div>

                <div className="mb-3 d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Entrar &nbsp;
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </button>
                </div>
              </form>

              <div className="mb-3">
                <Link to="#"> ¿Olvidaste tu contraseña? </Link>
              </div>
            </div>

            <div className="card-footer">
              <p className="pt-2 text-center">
                ¿No tienes una cuenta?
                <span> </span>
                <Link to="/register">¡Regístrese y comience! </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
