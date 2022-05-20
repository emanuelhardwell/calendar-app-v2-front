import { types } from "../types/types";

// {
//   id: new Date().getTime(),
//   title: "Cumpleaños del jefe",
//   start: moment().toDate(),
//   end: moment().add(2, "hours").toDate(),
//   notes: "llevar el pastel de chocolate",
//   user: {
//     _id: 122333,
//     name: "Emanuel",
//   },
// },

const initialState = {
  events: [],
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

    case types.eventClearActive:
      return {
        ...state,
        activeEvent: null,
      };

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        ),
      };

    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter(
          (event) => event.id !== state.activeEvent.id
        ),
        activeEvent: null,
      };

    case types.eventLoaded:
      return {
        ...state,
        events: [...action.payload],
      };

    default:
      return state;
  }
};
