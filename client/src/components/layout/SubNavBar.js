import React, { useContext, Fragment } from "react";
import ClientContext from "../../context/Client/ClientContext";

const SubNavBar = () => {
  const clientContext = useContext(ClientContext);

  const {
    firstSubMenu,
    secondSubMenu,
    thirdSubMenu,
    fourthSubMenu,
    firstSubSwitch,
    secondSubSwitch,
    thirdSubSwitch,
    fourthSubSwitch,
    subNavBarLoading
  } = clientContext;

  return (
    <Fragment>
      {!subNavBarLoading ? (
        <ul className="subNavBar">
          <a
            onClick={() => firstSubSwitch()}
            className={firstSubMenu ? "subNavBarSelected" : ""}
          >
            Add/Edit Clients
          </a>
          <a
            onClick={() => secondSubSwitch()}
            className={secondSubMenu ? "subNavBarSelected" : ""}
          >
            Tasks
          </a>
          <a
            onClick={() => thirdSubSwitch()}
            className={thirdSubMenu ? "subNavBarSelected" : ""}
          >
            Completed
          </a>
        </ul>
      ) : null}
    </Fragment>
  );
};

export default SubNavBar;
