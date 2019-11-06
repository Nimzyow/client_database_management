import React, { useContext, useEffect } from "react";
import ClientsInfo from "../clients/ClientsInfo";
import ClientFilter from "../clients/ClientFilter";
import ClientForm from "../clients/ClientForm";
import AuthContext from "../../context/auth/AuthContext";
const Clients = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="grid-2">
      <div>
        <ClientForm />
      </div>
      <div className="scrollContainer">
        <ClientFilter />
        <ClientsInfo />
      </div>
    </div>
  );
};

export default Clients;
