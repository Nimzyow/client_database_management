import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth/AuthContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>
        Welcome to the Civil Engineering application. The aim of this app is to
        handle client data effectively and to eliminate confusion regarding
        which client has had which projects.
      </p>
    </div>
  );
};

export default Home;
