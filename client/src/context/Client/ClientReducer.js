import * as Types from "../Types";

export default (state, action) => {
  switch (action.type) {
    case Types.GET_CLIENTS:
      return {
        ...state,
        clients: action.payload,
        loading: false
      };
    case Types.ADD_CLIENT:
      return {
        ...state,
        clients: [action.payload, ...state.clients],
        loading: false
      };
    case Types.DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(client => client._id !== action.payload),
        loading: false
      };
    case Types.CLEAR_CLIENTS:
      return {
        ...state,
        clients: null,
        filtered: null,
        error: null,
        current: null
      };
    case Types.SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case Types.CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case Types.UPDATE_CLIENT:
      return {
        ...state,
        clients: state.clients.map(client =>
          client._id === action.payload._id ? action.payload : client
        ),
        loading: false
      };
    case Types.FILTER_CLIENT:
      return {
        ...state,
        filtered: state.clients.filter(client => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return client.name.match(regex) || client.proDes.match(regex);
        })
      };
    case Types.CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case Types.CLIENT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
