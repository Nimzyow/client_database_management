import React, { useContext, useState } from "react";
import ClientContext from "../../context/Client/ClientContext";

const ClientTaskCreator = () => {
  const clientContext = useContext(ClientContext);

  const { addClient, clearCurrent, current, updateClient } = clientContext;

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

  const [fruit, setFruit] = useState("planningpermission");

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

  const handleChange = event => {
    console.log("handleChange clicked and value is " + event.target.value);
    setFruit(event.target.value);
  };

  return (
    <form onSubmit={() => {}}>
      <label>
        Pick task:
        <select
          value={fruit}
          onChange={event => {
            handleChange(event);
          }}
        >
          <option value="planningpermission">Planning Permission</option>
          <option value="planningpermissiondas">
            Planning Permission (with design access statement)
          </option>
          <option value="brfpa">Building Reg full plans application</option>
          <option value="brbna">
            Building Reg building notice application
          </option>
          <option value="steelcalcrep">Steel calculation report</option>
          <option value="retainingwallcalc">Retaining wall calculation</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ClientTaskCreator;
