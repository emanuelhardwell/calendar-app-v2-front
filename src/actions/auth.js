import Swal from "sweetalert2";
import { fetchWithOutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithOutToken("auth", { email, password }, "POST");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(login({ uid: body.uid, name: body.name }));
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithOutToken(
      "auth/new",
      { name, email, password },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(login({ uid: body.uid, name: body.name }));
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const startCheckingFinish = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken("auth/renew");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(login({ uid: body.uid, name: body.name }));
    } else {
      Swal.fire("Error", body.msg, "error");
      dispatch(checkingFinish());
    }
  };
};

const login = (user) => {
  return {
    type: types.authLogin,
    payload: user,
  };
};

const checkingFinish = () => {
  return {
    type: types.authCheckingFinish,
  };
};
