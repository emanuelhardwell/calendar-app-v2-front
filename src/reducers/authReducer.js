import { types } from "../types/types";

const initialState = {
  checking: true,
  // uid: "1233234245252",
  // name: "Emanuel"
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };

    default:
      return state;
  }
};
