import React, { useContext, useEffect, Fragment } from "react";
import ClientContext from "../../context/Client/ClientContext";
import AuthContext from "../../context/auth/AuthContext";
import SubNavBar from "../layout/SubNavBar";
import ClientContainerAddEdit from "../clients/AddEditSubPage/ClientContainerAddEdit";
import ClientContainerTask from "../clients/TaskSubPage/ClientContainerTask";

const Clients = () => {
  const authContext = useContext(AuthContext);
  const clientContext = useContext(ClientContext);

  const {
    firstSubMenu,
    secondSubMenu,
    thirdSubMenu,
    fourthSubMenu
  } = clientContext;

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <SubNavBar />
      {firstSubMenu && <ClientContainerAddEdit />}
      {secondSubMenu && <ClientContainerTask />}
      {thirdSubMenu && (
        <div>
          <p style={{ color: "#000" }}>Third Menu selection</p>
        </div>
      )}
      {fourthSubMenu && (
        <div>
          <p style={{ color: "#000" }}>Fourth Menu selection</p>
        </div>
      )}
    </Fragment>
  );
};

export default Clients;
