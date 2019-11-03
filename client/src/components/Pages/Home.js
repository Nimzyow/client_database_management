import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/AuthContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>home</h1>
      <p>
        This is an imporved version of the engineering app that was made
        previously.
      </p>
    </div>
  );
};

export default Home;
