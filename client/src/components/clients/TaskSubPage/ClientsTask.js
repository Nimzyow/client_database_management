import React, { useContext, Fragment, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ClientItemTask from "./ClientItemTask";
import ClientContext from "../../../context/Client/ClientContext";
import Spinner from "../../layout/Spinner/Spinner";

const ClientsTask = () => {
  const clientContext = useContext(ClientContext);

  const { getJobAcceptedClients, acceptedJobArr, loading } = clientContext;

  useEffect(() => {
    getJobAcceptedClients();
    //eslint-disable-next-line
  }, []);

  if (acceptedJobArr !== null && acceptedJobArr.length === 0 && !loading) {
    return <h4>Please add a client with job accepted</h4>;
  }

  return (
    <Fragment>
      {acceptedJobArr !== null && !loading ? (
        <TransitionGroup>
          {acceptedJobArr.map(client => (
            <CSSTransition key={client._id} timeout={500} classNames="item">
              <ClientItemTask client={client} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default ClientsTask;
