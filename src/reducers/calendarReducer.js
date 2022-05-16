import { types } from "../types/types";
import moment from "moment";

const initialState = {
  events: [
    {
      title: "Cumpleaños del jefe",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      note: "llevar el pastel de chocolate",
      user: {
        _id: 122333,
        name: "Emanuel",
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    default:
      return state;
  }
};
