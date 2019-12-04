import React, { useContext } from "react";
import ClientForm from "./ClientForm";
import ClientFilter from "../ClientFilter";
import ClientsInfo from "../AddEditSubPage/ClientsInfo";
import Spinner from "../../layout/Spinner/Spinner";
import ClientContext from "../../../context/Client/ClientContext";

const ClientContainerAddEdit = () => {
  const clientContext = useContext(ClientContext);
  const { addLoading, updateLoading, addSuccessText } = clientContext;
  return (
    <div className="grid-2">
      <div>
        <ClientForm />
        {addLoading || updateLoading ? <Spinner /> : null}
        {addSuccessText ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            {addSuccessText}
          </p>
        ) : null}
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
