import React, { useContext } from "react";
import PropTypes from "prop-types";
import ClientContext from "../../../context/Client/ClientContext";

const ClientItem = ({ client }) => {
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
    postCode,
    projNumber
  } = client;

  const onDelete = () => {
    deleteClient(_id);
    clearCurrent();
  };

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
        {projNumber && (
          <li>
            <i className="fas fa-hamsa" /> {projNumber}
          </li>
        )}
      </ul>
      <button
        className="btn btn-dark btn-sm"
        onClick={() => setCurrent(client)}
      >
        Edit
      </button>
      {/*<button className="btn btn-danger btn-sm" onClick={onDelete}>
        Delete
        </button>*/}
    </div>
  );
};

ClientItem.propTypes = {
  client: PropTypes.object.isRequired
};

export default ClientItem;
