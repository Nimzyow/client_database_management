import React, { useReducer } from "react";
import ClientContext from "./ClientContext";
import ClientReducer from "./ClientReducer";
import * as Types from "../Types";
import axios from "axios";

const ClientState = props => {
  const initialState = {
    clients: null,
    current: null,
    filtered: null,
    error: null,
    spinner: false,
    firstSubMenu: true,
    secondSubMenu: false,
    thirdSubMenu: false,
    fourthSubMenu: false,
    acceptedJobArr: null,
    subNavBarLoading: true,
    taskLoading: false,
    addLoading: false,
    updateLoading: false,
    addSuccessText: null,
    updateSuccessText: null,
    taskSuccessText: null,
    taskList: ["planningpermission", "brfpa", "retainingwallcalc"]
  };

  const [state, dispatch] = useReducer(ClientReducer, initialState);

  //Get clients

  const getClients = async () => {
    try {
      const res = await axios.get("/api/clients");

      dispatch({
        type: Types.GET_CLIENTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: Types.CLIENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // //Get Job Accepted Clients
  const getJobAcceptedClients = async () => {
    try {
      let filtered = await state.clients.filter(client => {
        return client.type === "Job accepted";
      });
      dispatch({
        type: Types.GET_JOB_ACCEPTED_CLIENTS,
        payload: filtered
      });
    } catch (err) {
      dispatch({
        type: Types.CLIENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  //Add Client
  const addClient = async client => {
    dispatch({ type: Types.ADD_LOADING });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/clients", client, config);

      dispatch({ type: Types.ADD_CLIENT, payload: res.data });
      addSuccess();
    } catch (err) {
      dispatch({
        type: Types.CLIENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  //Delete client
  const deleteClient = async id => {
    try {
      const res = await axios.delete(`/api/clients/${id}`);

      dispatch({ type: Types.DELETE_CLIENT, payload: id });
    } catch (err) {
      dispatch({
        type: Types.CLIENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  //Update client
  const updateClient = async client => {
    dispatch({ type: Types.UPDATE_LOADING });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(`/api/clients/${client._id}`, client, config);

      dispatch({ type: Types.UPDATE_CLIENT, payload: res.data });
      dispatch({ type: Types.CLEAR_CURRENT });
      updateSuccess();
    } catch (err) {
      dispatch({
        type: Types.CLIENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  //Post an update to mongoose on clients state.
  const taskListGen = async client => {
    dispatch({ type: Types.TASK_LOADING });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.put(`/api/clients/${client._id}`, client, config);
      //console.log(res.data);
      dispatch({ type: Types.ADD_TASK, payload: res.data });
      taskSuccess();
    } catch (err) {
      dispatch({
        type: Types.CLIENT_ERROR,
        payload: err.response.msg
      });
    }

    // const newTask = { taskName: task, taskCompletion: "" };
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // };
    // try {
    //   const res = await axios.put(
    //     `/api/clients/${client._id}`,
    //     newTask,
    //     config
    //   );
    //   dispatch({ type: Types.ADD_TASK, payload: res.data });
    // } catch (err) {
    //   dispatch({
    //     type: Types.CLIENT_ERROR,
    //     payload: err.response.msg
    //   });
    // }
    // dispatch({ type: Types.ADD_TASK, payload: newTask });
  };

  //clear clients
  const clearClients = () => {
    dispatch({ type: Types.CLEAR_CLIENTS });
  };

  //set current client
  const setCurrent = client => {
    console.log("setCurrent activated");
    dispatch({ type: Types.SET_CURRENT, payload: client });
  };
  //clear current client
  const clearCurrent = () => {
    dispatch({ type: Types.CLEAR_CURRENT });
  };

  //filter client
  const filterClients = text => {
    dispatch({ type: Types.FILTER_CLIENT, payload: text });
  };

  //clear filter
  const clearFilter = () => {
    dispatch({ type: Types.CLEAR_FILTER });
  };

  //first submenu select
  const firstSubSwitch = () => {
    dispatch({ type: Types.SUB_MENU1 });
  };
  //second submenu select
  const secondSubSwitch = () => {
    dispatch({ type: Types.SUB_MENU2 });
  };
  //third submenu select
  const thirdSubSwitch = () => {
    dispatch({ type: Types.SUB_MENU3 });
  };
  //fourth submenu select
  const fourthSubSwitch = () => {
    dispatch({ type: Types.SUB_MENU4 });
  };

  //display successfully added to database text
  const addSuccess = () => {
    console.log("addSuccess is being processed");
    dispatch({ type: Types.ADD_SUCCESS_TEXT });
    setTimeout(() => {
      dispatch({ type: Types.RESET_ADD_SUCCESS_TEXT });
    }, 5000);
  };

  //display successfully updated teh client to database text
  const updateSuccess = () => {
    console.log("updateSuccess is being processed");
    dispatch({ type: Types.ADD_SUCCESS_TEXT });
    setTimeout(() => {
      dispatch({ type: Types.RESET_ADD_SUCCESS_TEXT });
    }, 5000);
  };

  //display successfully updated teh client to database text
  const taskSuccess = () => {
    console.log("taskSuccess is being processed");
    dispatch({ type: Types.TASK_SUCCESS_TEXT });
    setTimeout(() => {
      dispatch({ type: Types.RESET_ADD_SUCCESS_TEXT });
    }, 5000);
  };

  return (
    <ClientContext.Provider
      value={{
        clients: state.clients,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        spinner: state.spinner,
        firstSubMenu: state.firstSubMenu,
        secondSubMenu: state.secondSubMenu,
        thirdSubMenu: state.thirdSubMenu,
        fourthSubMenu: state.fourthSubMenu,
        acceptedJobArr: state.acceptedJobArr,
        subNavBarLoading: state.subNavBarLoading,
        taskList: state.taskList,
        taskLoading: state.taskLoading,
        addLoading: state.addLoading,
        updateLoading: state.updateLoading,
        addSuccessText: state.addSuccessText,
        updateSuccessText: state.updateSuccessText,
        taskSuccessText: state.taskSuccessText,
        filterClients,
        taskListGen,
        clearFilter,
        addClient,
        deleteClient,
        setCurrent,
        clearCurrent,
        updateClient,
        getClients,
        clearClients,
        firstSubSwitch,
        secondSubSwitch,
        thirdSubSwitch,
        fourthSubSwitch,
        getJobAcceptedClients
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};
export default ClientState;
