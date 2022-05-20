import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const eventSetActive = (event) => {
  return {
    type: types.eventSetActive,
    payload: event,
  };
};

export const eventStartAddNew = (event) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;

    try {
      const res = await fetchWithToken("events", event, "POST");
      const body = await res.json();

      if (body.ok) {
        event.id = body.event._id;
        event.user = {
          _id: uid,
          name: name,
        };

        dispatch(eventAddNew(event));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Error no esperado", "error");
    }
  };
};

const eventAddNew = (event) => {
  return {
    type: types.eventAddNew,
    payload: event,
  };
};

export const eventClearActive = () => {
  return {
    type: types.eventClearActive,
  };
};

export const eventUpdated = (event) => {
  return {
    type: types.eventUpdated,
    payload: event,
  };
};

export const eventDeleted = () => {
  return {
    type: types.eventDeleted,
  };
};
