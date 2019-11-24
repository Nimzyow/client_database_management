import React, { useContext, useState, Fragment, useEffect } from "react";
import ClientContext from "../../../context/Client/ClientContext";
import TaskSelector from "./TaskSelector";

const ClientTaskCreator = () => {
  const clientContext = useContext(ClientContext);

  const { taskListGen, current } = clientContext;

  const [task, setTask] = useState("planningpermission");

  const [taskDate, setTaskDate] = useState([...current.taskList]);

  useEffect(() => {
    setTaskDate([...current.taskList]);
  }, [current]);

  const currentSelection = current;

  const onSubmit = e => {
    e.preventDefault();
    const newTask = { taskName: task, taskCompletion: "" };
    setTaskDate([...taskDate, newTask]);
    console.log(taskDate);
  };

  const handleChange = event => {
    console.log("handleChange clicked and value is " + event.target.value);
    setTask(event.target.value);
  };

  const handleDateChange = e => {
    const updatedTasks = [...taskDate];
    updatedTasks[e.target.dataset.idx].taskCompletion = e.target.value;
    setTaskDate(updatedTasks);
  };

  const onChange = e => {
    setTaskDate({ [e.target.name]: e.target.value });
  };

  const updateTaskLists = e => {
    e.preventDefault();

    currentSelection.taskList = taskDate;
    console.log(currentSelection);
    taskListGen(currentSelection);
  };

  let displayTasks;

  if (current !== null) {
    if (taskDate.length === 0) {
      console.log("task");
      return (
        <TaskSelector
          onSubmit={onSubmit}
          task={task}
          handleChange={handleChange}
        />
      );
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
          case "planningpermissiondas":
            const tasksdas = `tasks-${index}`;
            const dateIddas = `date-${index}`;
            return (
              <div key={`client-${index}`}>
                <p>Planning Permission (Design access statement)</p>
                <input
                  type="text"
                  name={dateIddas}
                  id={dateIddas}
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
          case "brbna":
            const tasksbrbna = `tasks-${index}`;
            const dateIdbrbna = `date-${index}`;
            return (
              <div key={`client-${index}`}>
                <p>Building Regulation (Building Notice)</p>
                <input
                  type="text"
                  name={dateIdbrbna}
                  id={dateIdbrbna}
                  data-idx={index}
                  className="date"
                  value={taskDate[index].taskCompletion}
                  onChange={handleDateChange}
                />
              </div>
            );
          case "steelcalcrep":
            const tasksscr = `tasks-${index}`;
            const dateIdscr = `date-${index}`;
            return (
              <div key={`client-${index}`}>
                <p>Steel Calculation Report</p>
                <input
                  type="text"
                  name={dateIdscr}
                  id={dateIdscr}
                  data-idx={index}
                  className="date"
                  value={taskDate[index].taskCompletion}
                  onChange={handleDateChange}
                />
              </div>
            );
          case "retainingwallcalc":
            const tasksrwc = `tasks-${index}`;
            const dateIdrwc = `date-${index}`;
            return (
              <div key={`client-${index}`}>
                <p>Retaining wall calculation</p>
                <input
                  type="text"
                  name={dateIdrwc}
                  id={dateIdrwc}
                  data-idx={index}
                  className="date"
                  value={taskDate[index].taskCompletion}
                  onChange={handleDateChange}
                />
              </div>
            );
          case "partywall":
            const taskspw = `tasks-${index}`;
            const dateIdpw = `date-${index}`;
            return (
              <div key={`client-${index}`}>
                <p>Party wall</p>
                <input
                  type="text"
                  name={dateIdrwc}
                  id={dateIdrwc}
                  data-idx={index}
                  className="date"
                  value={taskDate[index].taskCompletion}
                  onChange={handleDateChange}
                />
              </div>
            );
          case "structuralreport":
            const taskssr = `tasks-${index}`;
            const dateIdsr = `date-${index}`;
            return (
              <div key={`client-${index}`}>
                <p>Structural Report</p>
                <input
                  type="text"
                  name={dateIdrwc}
                  id={dateIdrwc}
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
      <TaskSelector
        onSubmit={onSubmit}
        task={task}
        handleChange={handleChange}
      />
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
          onClick={updateTaskLists}
        />
      </form>
    </Fragment>
  );
};

export default ClientTaskCreator;
