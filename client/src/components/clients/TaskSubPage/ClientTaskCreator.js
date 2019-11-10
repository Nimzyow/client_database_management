import React, { useContext, useState } from "react";
import ClientContext from "../../../context/Client/ClientContext";

const ClientTaskCreator = () => {
  const clientContext = useContext(ClientContext);

  const { taskListGen } = clientContext;

  const [task, setTask] = useState("planningpermission");

  const onSubmit = e => {
    e.preventDefault();
    console.log("what is task? " + task);
    taskListGen(task);
  };

  const handleChange = event => {
    console.log("handleChange clicked and value is " + event.target.value);
    setTask(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Pick task:
        <select
          value={task}
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
