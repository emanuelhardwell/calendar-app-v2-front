import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { startCheckingFinish } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCheckingFinish());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={CalendarScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
