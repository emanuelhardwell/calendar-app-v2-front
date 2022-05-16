import React from "react";
import { useDispatch } from "react-redux";
import { eventDeleted } from "../../actions/events";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch(eventDeleted());
  };
  return (
    <>
      <button className="btn btn-danger fab-danger" onClick={handleDeleteEvent}>
        Delete
      </button>
    </>
  );
};
