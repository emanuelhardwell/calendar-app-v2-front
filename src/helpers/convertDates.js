import moment from "moment";

export const convertDates = (events = []) => {
  return events.map((event) => ({
    ...event,
    start: moment(event.start).toDate(),
    end: moment(event.end).toDate(),
  }));
};
