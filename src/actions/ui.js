import { types } from "../types/types";

export const uiOpenModal = () => {
  return {
    type: types.uiOpenModal,
  };
};

export const uiCloseModal = () => {
  return {
    type: types.uiCloseModal,
  };
};
