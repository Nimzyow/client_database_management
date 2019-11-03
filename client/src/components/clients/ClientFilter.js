import React, { useContext, useRef, useEffect } from "react";
import ClientContext from "../../context/Client/ClientContext";

const ClientFilter = () => {
  const clientContext = useContext(ClientContext);

  const text = useRef("");

  const { filterClients, clearFilter, filtered } = clientContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterClients(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Clients..."
        onChange={onChange}
      />
    </form>
  );
};

export default ClientFilter;
