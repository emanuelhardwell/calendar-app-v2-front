import React from "react";
import { useDispatch } from "react-redux";
import { eventStartDeleted } from "../../actions/events";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch(eventStartDeleted());
  };
  return (
    <>
      <button className="btn btn-danger fab-danger" onClick={handleDeleteEvent}>
        Delete
        <span> </span>
        <i className="fa-solid fa-trash"> </i>
      </button>
    </>
  );
};
