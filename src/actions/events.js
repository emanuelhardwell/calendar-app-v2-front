import Swal from "sweetalert2";
import { convertDates } from "../helpers/convertDates";
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
        event._id = body.event._id;
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

export const eventStartUpdated = (event) => {
  return async (dispatch) => {
    try {
      const res = await fetchWithToken(`events/${event._id}`, event, "PUT");
      const body = await res.json();

      if (body.ok) {
        dispatch(eventUpdated(event));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Error no esperado", "error");
    }
  };
};

const eventUpdated = (event) => {
  return {
    type: types.eventUpdated,
    payload: event,
  };
};

export const eventStartDeleted = () => {
  return async (dispatch, getState) => {
    const { _id } = getState().calendar.activeEvent;

    try {
      const result = await Swal.fire({
        title: "¿Está seguro de eliminar este evento?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, bórralo!",
      });

      if (result.isConfirmed) {
        const res = await fetchWithToken(`events/${_id}`, {}, "DELETE");
        const body = await res.json();

        if (body.ok) {
          dispatch(eventDeleted());
          Swal.fire("¡Eliminado!", "Su evento ha sido eliminado.", "success");
        } else {
          Swal.fire("Error", body.msg, "error");
          dispatch(eventClearActive());
        }
      } else {
        dispatch(eventClearActive());
      }
    } catch (error) {
      Swal.fire("Error", "Error no esperado", "error");
    }
  };
};

const eventDeleted = () => {
  return {
    type: types.eventDeleted,
  };
};

export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const res = await fetchWithToken("events");
      const body = await res.json();

      if (body.ok) {
        const events = convertDates(body.events);
        dispatch(eventLoaded(events));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Error no esperado", "error");
    }
  };
};

const eventLoaded = (events) => {
  return {
    type: types.eventLoaded,
    payload: events,
  };
};

export const eventLogout = () => {
  return {
    type: types.eventLogout,
  };
};
