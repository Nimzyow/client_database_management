import React, { useContext, useState, useEffect } from "react";
import ClientContext from "../../../context/Client/ClientContext";

const ClientForm = () => {
  const clientContext = useContext(ClientContext);

  const { addClient, clearCurrent, current, updateClient } = clientContext;

  //one thing to note with useEffect is the array we declare as a second argument. so we are saying that whenver there is a change in the clientContext or current, initialse the useEffect method. upon further investigation, perhaps the clientContext in the array is not needed. we only really want the check to happen on current, I believe. Not sure why clientContext is there but the instructor used it without expaining it thoroughly. Also, if we were to use an empty array, this is the same as saying componentDidMount, which is that once component has mounted, initialse the useEffect, once and thats it.

  //this use effect is saying that if current has an object, then send the current object to the setClient method, (we know current will be an object). setClient is a component level state which is a hook. if current is null, initally set all input fields as "" and set type as "job not accepted".
  useEffect(() => {
    if (current !== null) {
      setClient(current);
    } else {
      setClient({
        name: "",
        email: "",
        phone: "",
        phone2: "",
        type: "job not accepted",
        proDes: "",
        numberAndStreet: "",
        secondLineAdd: "",
        thirdLineAdd: "",
        postCode: "",
        projNumber: ""
      });
    }
  }, [clientContext, current]);

  //we set up a component level state called client. we set it as an object
  const [client, setClient] = useState({
    name: "",
    email: "",
    phone: "",
    phone2: "",
    type: "job not accepted",
    proDes: "",
    numberAndStreet: "",
    secondLineAdd: "",
    thirdLineAdd: "",
    postCode: "",
    projNumber: ""
  });

  // we extract the individual names of the object so we dont have to call keep calling with state, e.g client.name client.type
  const {
    name,
    email,
    phone,
    phone2,
    type,
    proDes,
    numberAndStreet,
    secondLineAdd,
    thirdLineAdd,
    postCode,
    projNumber
  } = client;

  // the below will target the name and change the value of the client state individual names of the object.
  const onChange = e => {
    setClient({
      ...client,
      [e.target.name]: e.target.value
    });
  };

  //when we press onSubmit, we first prevent default and then we say if current has no value (in other words, in this example if it is not an object), we call the addClient method, as defined in the clientState page and brought over with clientContext.
  //if current has a value, in other word in this example if current is an object, call the updateClient as defined in clientState and brough over from clientContext.
  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addClient(client);
    } else {
      updateClient(client);
    }
    // after either of the 2 above methods has been processed, reset the inputs using the below setClient hook method.
    setClient({
      name: "",
      email: "",
      phone: "",
      phone2: "",
      type: "job not accepted",
      proDes: "",
      numberAndStreet: "",
      secondLineAdd: "",
      thirdLineAdd: "",
      postCode: "",
      projNumber: ""
    });
  };

  //clearCurrent will basically set current as null. defined in clientState brought in from clientContext.
  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      {/* notice how above we specify the onSubmit attribute at the top of the <form> label */}
      <h2 className="text-primary">
        {/* we set the label on top of the form depending on whether current is any value or not. */}{" "}
        {current ? "Edit Client" : "Add Client"}
      </h2>
      {/* we now define the individual input labels. */}
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Phone 2nd"
        name="phone2"
        value={phone2}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Number and street name"
        name="numberAndStreet"
        value={numberAndStreet}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Address 2nd line"
        name="secondLineAdd"
        value={secondLineAdd}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Address 3rd Line"
        name="thirdLineAdd"
        value={thirdLineAdd}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="PostCode"
        name="postCode"
        value={postCode}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Project Description"
        name="proDes"
        value={proDes}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Project number"
        name="projNumber"
        value={projNumber}
        onChange={onChange}
      />
      <h5>Client Job status?</h5>
      <input
        type="radio"
        name="type"
        value="Job accepted"
        checked={type === "Job accepted"}
        onChange={onChange}
      />{" "}
      Job accepted{" "}
      <input
        type="radio"
        name="type"
        value="Job not accepted"
        checked={type === "Job not accepted"}
        onChange={onChange}
      />{" "}
      Job not accepted{" "}
      {/* the below input label is actually the submit button. we define the submit button in a form input as shown below. we just label the type attribute as "submit" */}
      <div>
        <input
          type="submit"
          value={current ? "Update Client" : "Add Client"}
          className="btn btn-primary btn-block"
        />
      </div>
      {/* if the current value has a value, in our example if it an object, we will display the clear button  */}
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ClientForm;
