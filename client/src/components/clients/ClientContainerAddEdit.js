import React from "react";
import ClientForm from "./ClientForm";
import ClientFilter from "./ClientFilter";
import ClientsInfo from "./ClientsInfo";

const ClientContainerAddEdit = () => {
  return (
    <div className="grid-2">
      <div>
        <ClientForm />
      </div>
      <div>
        <ClientFilter />
        <div className="scrollContainer">
          <ClientsInfo />
        </div>
      </div>
    </div>
  );
};

export default ClientContainerAddEdit;
