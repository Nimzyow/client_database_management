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
    error: null
  };

  const [state, dispatch] = useReducer(ClientReducer, initialState);

  //Get clients
  const getClients = async () => {
    try {
      const res = await axios.get("/api/clients");

      dispatch({ type: Types.GET_CLIENTS, payload: res.data });
    } catch (err) {
      dispatch({
        type: Types.CLIENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  //Add Client
  const addClient = async client => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/clients", client, config);

      dispatch({ type: Types.ADD_CLIENT, payload: res.data });
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

  //update client
  const updateClient = async client => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(`/api/clients/${client._id}`, client, config);

      dispatch({ type: Types.UPDATE_CLIENT, payload: res.data });
      dispatch({ type: Types.CLEAR_CURRENT });
    } catch (err) {
      dispatch({
        type: Types.CLIENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  //clear clients
  const clearClients = () => {
    dispatch({ type: Types.CLEAR_CLIENTS });
  };

  //set current client
  const setCurrent = client => {
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

  return (
    <ClientContext.Provider
      value={{
        clients: state.clients,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        filterClients,
        clearFilter,
        addClient,
        deleteClient,
        setCurrent,
        clearCurrent,
        updateClient,
        getClients,
        clearClients
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};
export default ClientState;
