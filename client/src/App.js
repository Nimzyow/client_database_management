import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../src/components/layout/Navbar";
import Home from "../src/components/Pages/Home";
import About from "../src/components/Pages/About";
import Register from "../src/components/Auth/Register";
import Login from "../src/components/Auth/Login";
import Alerts from "../src/components/layout/Alerts";
import "./App.css";
import Clients from "../src/components/Pages/Clients";
import AuthState from "../src/context/auth/AuthState";
import AlertState from "../src/context/Alert/AlertState";
import ClientState from "../src/context/Client/ClientState";
import setAuthToken from "../src/Utils/SetAuthToken";
import PrivateRoute from "../src/components/Routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ClientState>
        <AlertState>
          <Router>
            <Fragment>
              <NavBar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <PrivateRoute exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <PrivateRoute exact path="/clients" component={Clients} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ClientState>
    </AuthState>
  );
};

export default App;
