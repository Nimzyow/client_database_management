import React, { useContext, useState, useEffect } from "react";
import ClientContext from "../../context/Client/ClientContext";

const ClientForm = () => {
  const clientContext = useContext(ClientContext);

  const { addClient, clearCurrent, current, updateClient } = clientContext;

  useEffect(() => {
    if (current !== null) {
      setClient(current);
    } else {
      setClient({
        name: "",
        email: "",
        phone: "",
        phone2: "",
        type: "job not accepted",
        proDes: "",
        numberAndStreet: "",
        secondLineAdd: "",
        thirdLineAdd: "",
        postCode: "",
        projNumber: ""
      });
    }
  }, [clientContext, current]);

  const [client, setClient] = useState({
    name: "",
    email: "",
    phone: "",
    phone2: "",
    type: "job not accepted",
    proDes: "",
    numberAndStreet: "",
    secondLineAdd: "",
    thirdLineAdd: "",
    postCode: "",
    projNumber: ""
  });

  const {
    name,
    email,
    phone,
    phone2,
    type,
    proDes,
    numberAndStreet,
    secondLineAdd,
    thirdLineAdd,
    postCode,
    projNumber
  } = client;

  const onChange = e => {
    setClient({
      ...client,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addClient(client);
    } else {
      updateClient(client);
    }

    setClient({
      name: "",
      email: "",
      phone: "",
      phone2: "",
      type: "job not accepted",
      proDes: "",
      numberAndStreet: "",
      secondLineAdd: "",
      thirdLineAdd: "",
      postCode: "",
      projNumber: ""
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {" "}
        {current ? "Edit Client" : "Add Client"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Phone 2nd"
        name="phone2"
        value={phone2}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Number and street name"
        name="numberAndStreet"
        value={numberAndStreet}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Address 2nd line"
        name="secondLineAdd"
        value={secondLineAdd}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Address 3rd Line"
        name="thirdLineAdd"
        value={thirdLineAdd}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="PostCode"
        name="postCode"
        value={postCode}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Project Description"
        name="proDes"
        value={proDes}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Project number"
        name="projNumber"
        value={projNumber}
        onChange={onChange}
        required
      />
      <h5>Client Job status?</h5>
      <input
        type="radio"
        name="type"
        value="Job accepted"
        checked={type === "Job accepted"}
        onChange={onChange}
      />{" "}
      Job accepted{" "}
      <input
        type="radio"
        name="type"
        value="Job not accepted"
        checked={type === "Job not accepted"}
        onChange={onChange}
      />{" "}
      Job not accepted{" "}
      <div>
        <input
          type="submit"
          value={current ? "Update Client" : "Add Client"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ClientForm;
