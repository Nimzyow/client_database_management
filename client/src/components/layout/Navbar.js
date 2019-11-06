import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import ClientContext from "../../context/Client/ClientContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const clientContext = useContext(ClientContext);

  const { isAuthenticated, logOut, user } = authContext;
  const { clearClients } = clientContext;

  const onLogOut = () => {
    logOut();
    clearClients();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/clients">Clients</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a onClick={onLogOut} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Engineering Application",
  icon: "fas fa-hard-hat"
};

export default Navbar;
