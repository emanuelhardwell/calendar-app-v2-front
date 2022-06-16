import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../actions/ui";
import {
  eventClearActive,
  eventStartAddNew,
  eventStartUpdated,
} from "../../actions/events";

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

const initEvent = {
  title: "",
  notes: "",
  start: now.toDate(),
  end: after.toDate(),
};

export const CalendarModal = () => {
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(after.toDate());
  const [formValues, setFormValues] = useState(initEvent);

  const { title, notes, start, end } = formValues;

  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state) => state.ui);
  const { activeEvent } = useSelector((state) => state.calendar);

  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent);
    } else {
      setFormValues(initEvent);
    }
  }, [activeEvent]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      console.log("hola bebe");
      return Swal.fire(
        "Error",
        "La fecha final debe ser mayor a la inicial",
        "error"
      );
    }

    if (title.trim().length < 5) {
      return Swal.fire(
        "Error",
        "El titulo debe tener mas de 5 letras",
        "error"
      );
    }

    if (notes.trim().length < 5) {
      return Swal.fire(
        "Error",
        "las notas debe tener mas de 5 letras",
        "error"
      );
    }

    if (activeEvent) {
      dispatch(eventStartUpdated(formValues));
    } else {
      dispatch(eventStartAddNew(formValues));
    }

    closeModal();
  };

  const closeModal = () => {
    console.log("closing modal......");
    dispatch(uiCloseModal());
    dispatch(eventClearActive());
    setFormValues(initEvent);
  };

  const handleStartDateChange = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
        // contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} className="container" noValidate>
          <h4 className="text-center">
            {activeEvent ? "Editar evento" : "Crear evento"}
          </h4>
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
              autoComplete="off"
              name="title"
              value={title}
              onChange={handleInputChange}
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
              value={notes}
              onChange={handleInputChange}
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
