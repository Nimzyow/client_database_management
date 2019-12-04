import React from "react";
import PropTypes from "prop-types";

// This component is responsible for showing the dropdown menu with lists of jobs. the handleChange event is passed down by props from ClientTaskCreator
const TaskSelector = ({ onSubmit, task, handleChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Pick task:
        <select
          value={task}
          onChange={event => {
            handleChange(event);
          }}
        >
          <option value="planningpermission">Planning Permission</option>
          <option value="planningpermissiondas">
            Planning Permission (with design access statement)
          </option>
          <option value="brfpa">Building Reg full plans application</option>
          <option value="brbna">
            Building Reg building notice application
          </option>
          <option value="steelcalcrep">Steel calculation report</option>
          <option value="retainingwallcalc">Retaining wall calculation</option>
          <option value="partywall">Party Wall</option>
          <option value="structuralreport">Structural Report</option>
        </select>
      </label>
      <input type="submit" value="Add task to client" />
    </form>
  );
};

TaskSelector.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TaskSelector;
