import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { CalendarApp } from "./CalendarApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CalendarApp />);
