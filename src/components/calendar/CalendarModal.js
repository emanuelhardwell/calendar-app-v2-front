import React, { useState } from "react";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const now = moment().minutes(0).seconds(0).add(1, "hours");
const after = moment().minutes(0).seconds(0).add(3, "hours");

export const CalendarModal = () => {
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(after.toDate());

  const closeModal = () => {
    console.log("closing modal......");
  };

  const handleStartDateChange = (e) => {
    setDateStart(e);
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
  };

  return (
    <div>
      <Modal
        isOpen={true}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
        // contentLabel="Example Modal"
      >
        <form className="container">
          <div className="mb-3">
            <label>Fecha y hora inicio</label>
            <DateTimePicker
              className="form-control"
              onChange={handleStartDateChange}
              value={dateStart}
            />
          </div>

          <div className="mb-3">
            <label>Fecha y hora fin</label>
            <DateTimePicker
              className="form-control"
              minDate={dateStart}
              onChange={handleEndDateChange}
              value={dateEnd}
            />
          </div>

          <hr />
          <div className="mb-3">
            <label>Titulo y notas</label>
            <input
              type="text"
              className="form-control"
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
            />
            <small id="emailHelp" className="form-text text-muted">
              Una descripción corta
            </small>
          </div>

          <div className="mb-3">
            <textarea
              type="text"
              className="form-control"
              placeholder="Notas"
              rows="5"
              name="notes"
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          <div className="mb-3 d-grid gap-2">
            <button type="submit" className="btn btn-outline-primary">
              <i className="far fa-save"></i>
              <span> Guardar</span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
