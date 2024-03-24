/** @format */

import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    setErrorFirstName(value.trim() === "" ? "Please fill out this field." : "");
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    setErrorLastName(value.trim() === "" ? "Please fill out this field." : "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() === "" || lastName.trim() === "") {
      setErrorFirstName(
        firstName.trim() === "" ? "Please fill out this field." : ""
      );
      setErrorLastName(
        lastName.trim() === "" ? "Please fill out this field." : ""
      );
    } else {
      setFullName(`${firstName} ${lastName}`);
      setErrorFirstName("");
      setErrorLastName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          className={`form-control ${errorFirstName && "error"}`}
        />
        {errorFirstName && (
          <span className="error-message">{errorFirstName}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          className={`form-control ${errorLastName && "error"}`}
        />
        {errorLastName && (
          <span className="error-message">{errorLastName}</span>
        )}
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
      {fullName && (
        <div className="full-name-container">
          <label className="full-name-label">Full Name:</label>
          <span className="full-name">{fullName}</span>
        </div>
      )}
    </form>
  );
}

export default App;