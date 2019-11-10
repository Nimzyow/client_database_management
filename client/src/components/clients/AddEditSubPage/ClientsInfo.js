import React, { useContext, Fragment, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ClientItem from "../../clients/AddEditSubPage/ClientItem";
import ClientContext from "../../../context/Client/ClientContext";
import Spinner from "../../layout/Spinner/Spinner";

const ClientsInfo = () => {
  const clientContext = useContext(ClientContext);

  const { clients, filtered, getClients, loading } = clientContext;

  useEffect(() => {
    getClients();
    //eslint-disable-next-line
  }, []);

  if (clients !== null && clients.length === 0 && !loading) {
    return <h4>Please add a client</h4>;
  }

  return (
    <Fragment>
      {clients !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(client => (
                <CSSTransition key={client._id} timeout={500} classNames="item">
                  <ClientItem client={client} />
                </CSSTransition>
              ))
            : clients.map(client => (
                <CSSTransition key={client._id} timeout={500} classNames="item">
                  <ClientItem client={client} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default ClientsInfo;
