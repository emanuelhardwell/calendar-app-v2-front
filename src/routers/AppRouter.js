import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { startCheckingFinish } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startCheckingFinish());
  }, [dispatch]);

  if (checking) {
    return <h5> Cargando ... </h5>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            exact
            path="/login"
            isAuthenticated={!!uid}
            component={LoginScreen}
          />
          <PrivateRouter
            exact
            path="/"
            isAuthenticated={!!uid}
            component={CalendarScreen}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
