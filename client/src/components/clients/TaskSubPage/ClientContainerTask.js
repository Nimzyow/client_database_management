import React, { useContext } from "react";
import ClientFilter from "../ClientFilter";
import ClientsTask from "./ClientsTask";
import ClientTaskCreator from "./ClientTaskCreator";
import ClientContext from "../../../context/Client/ClientContext";
import Spinner from "../../layout/Spinner/Spinner";

const ClientContainerTask = () => {
  const clientContext = useContext(ClientContext);

  const { current, taskLoading, addSuccessText } = clientContext;

  let displayTasks;

  if (current === null) {
    displayTasks = (
      <div style={{ border: "1px solid #000" }}>
        <h3>Please select a client to the right to view or add tasks</h3>
      </div>
    );
  } else if (current) {
    displayTasks = (
      <div style={{ border: "1px solid #000" }}>
        <ClientTaskCreator />
      </div>
    );
  }

  return (
    <div className="grid-2">
      {displayTasks}
      <div>
        <ClientFilter />
        <div className="scrollContainer">
          <ClientsTask />
        </div>
      </div>
    </div>
  );
};

export default ClientContainerTask;
