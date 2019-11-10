import React, { Fragment, useContext } from "react";
import ClientContext from "../../../context/Client/ClientContext";

const ClientTaskCreatorItem = () => {
  const clientContext = useContext(ClientContext);

  const { current } = clientContext;

  let displayTasks = null;

  if (current !== null) {
    if (current.taskList.length === 0) {
      return <h4>Please add a task</h4>;
    } else if (current.taskList.length > 0) {
      current.taskList.map(task => {
        switch (task) {
          case "planningpermission":
            return (
              displayTasks +
              (
                <div
                  className="grid-2"
                  style={{ borderBottom: "1px solid #000", marginTop: "5px" }}
                >
                  <div>Planning Permission</div>
                  <div>13/09/2019</div>
                </div>
              )
            );
          case "brfpa":
            return (
              displayTasks +
              (
                <div
                  className="grid-2"
                  style={{ borderBottom: "1px solid #000" }}
                >
                  <div>Building Regulation (Full plans app)</div>
                  <div>Date</div>
                </div>
              )
            );
          default:
            break;
        }
      });
    }
  }

  return (
    <Fragment>
      <div className="grid-2">
        <h3 style={{ borderBottom: "1px solid #000" }}>Tasks to complete</h3>
        <h3 style={{ borderBottom: "1px solid #000" }}>Date</h3>
      </div>
      {displayTasks}
    </Fragment>
  );
};

export default ClientTaskCreatorItem;
