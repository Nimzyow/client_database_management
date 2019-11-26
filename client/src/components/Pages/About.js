import React from "react";

const About = () => {
  return (
    <div>
      <h1>About this App</h1>
      <p className="my-1">
        This is a Engineering application which is mainly used for client
        database
      </p>
      <p className="bg-dark p">
        <strong>Version: </strong> 1.2.0 - Fixed a bug that would crash the web
        application whenever one made a search. Also amended client list to no
        longer display view or delete buttons - 26/11/2019
      </p>
      <p className="bg-dark p">
        <strong>Version: </strong> 1.1.0 - Client Task generator has been added
        to this application. To access this, click on the clients tab on the top
        navbar, wait for the subnavbar to load and then click on tasks. Then
        select a client task to see by clicking on the view button under their
        name on the right panel.
      </p>
      <p className="bg-dark p">
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
