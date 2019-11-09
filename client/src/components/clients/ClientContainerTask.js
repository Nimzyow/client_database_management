import React from "react";
import ClientFilter from "./ClientFilter";
import ClientsTask from "./ClientsTask";
import ClientTaskCreator from "../../components/clients/ClientTaskCreator";

const ClientContainerTask = () => {
  return (
    <div className="grid-2">
      <div style={{ border: "1px solid #000" }}>
        <ClientTaskCreator />
      </div>
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
