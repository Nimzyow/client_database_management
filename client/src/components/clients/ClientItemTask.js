import React, { useContext } from "react";
import PropTypes from "prop-types";
import ClientContext from "../../context/Client/ClientContext";

const ClientItemTask = ({ client }) => {
  const clientContext = useContext(ClientContext);

  const { deleteClient, setCurrent, clearCurrent } = clientContext;

  const {
    _id,
    name,
    email,
    phone,
    type,
    proDes,
    numberAndStreet,
    postCode
  } = client;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "Job accepted" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {numberAndStreet && (
          <li>
            <i className="fas far fa-address-book" /> {numberAndStreet},{" "}
            {postCode}
          </li>
        )}
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
        {proDes && (
          <li>
            <i className="fas fa-align-left" /> {proDes}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">View</button>
      </p>
    </div>
  );
};

ClientItemTask.propTypes = {
  client: PropTypes.object.isRequired
};

export default ClientItemTask;
