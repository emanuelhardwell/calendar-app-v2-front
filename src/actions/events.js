import { types } from "../types/types";

export const eventSetActive = (event) => {
  return {
    type: types.eventSetActive,
    payload: event,
  };
};

export const eventAddNew = (event) => {
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
