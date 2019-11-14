import React, { Fragment, useContext, useState } from "react";
import ClientContext from "../../../context/Client/ClientContext";

const ClientTaskCreatorItem = ({ newTask }) => {
  const clientContext = useContext(ClientContext);

  const { current } = clientContext;

  const blankDate = {
    taskName: "",
    taskCompletion: ""
  };

  const [taskDate, setTaskDate] = useState([
    ...current.taskList,
    { ...blankDate },
    newTask
  ]);

  const handleDateChange = e => {
    const updatedTasks = [...taskDate];
    console.log(updatedTasks);
    console.log(e.target.value);
    updatedTasks[e.target.dataset.idx].taskCompletion = e.target.value;
    console.log(updatedTasks);
    setTaskDate(updatedTasks);
  };

  const onChange = e => {
    setTaskDate({ [e.target.name]: e.target.value });
  };

  let displayTasks;

  if (current !== null) {
    if (taskDate.length === 0) {
      console.log("task");
      return <h4>Please add a task</h4>;
    } else if (taskDate.length > 0) {
      displayTasks = taskDate.map((task, index) => {
        switch (task.taskName) {
          case "planningpermission":
            const tasks = `tasks-${index}`;
            const dateId = `date-${index}`;
            return (
              <div key={`client-${index}`}>
                <p>Planning Permission</p>
                <input
                  type="text"
                  name={dateId}
                  id={dateId}
                  data-idx={index}
                  className="date"
                  value={taskDate[index].taskCompletion}
                  onChange={handleDateChange}
                />
              </div>
            );
          case "brfpa":
            const tasksbrfpa = `tasks-${index}`;
            const dateIdbrfpa = `date-${index}`;
            return (
              <div key={`client-${index}`}>
                <p>Building Regulation (full plans app)</p>
                <input
                  type="text"
                  name={dateIdbrfpa}
                  id={dateIdbrfpa}
                  data-idx={index}
                  className="date"
                  value={taskDate[index].taskCompletion}
                  onChange={handleDateChange}
                />
              </div>
            );
          default:
            break;
        }
      });
    }
  }

  return (
    <Fragment>
      <form>
        <label
          style={{ borderBottom: "1px solid #000" }}
          htmlFor="taskstocomplete"
        >
          <h3>
            Tasks to complete and comments including dates of submission and
            reply
          </h3>
        </label>
        {displayTasks}
        <input
          type="submit"
          value="Update tasks"
          className="btn btn-primary btn-block"
        />
      </form>
    </Fragment>
  );
};

export default ClientTaskCreatorItem;
