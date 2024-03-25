/** @format */

import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    setErrorFirstName(value.trim() === "" ? "Please fill out this field." : "");
    setFormSubmitted(false);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    setErrorLastName(value.trim() === "" ? "Please fill out this field." : "");
    setFormSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() !== "" && lastName.trim() !== "") {
      setFullName(`${firstName} ${lastName}`);
      setFormSubmitted(true);
    } else {
      setErrorFirstName(
        firstName.trim() === "" ? "Please fill out this field." : ""
      );
      setErrorLastName(
        lastName.trim() === "" ? "Please fill out this field." : ""
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>Full Name Display</h1>
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
      <button type="submit" className="submit-btn" disabled={formSubmitted}>
        Submit
      </button>
      {formSubmitted && (
        <div className="full-name-container">
          <label className="full-name-label">Full Name: {fullName}</label>
        </div>
      )}
    </form>
  );
}

export default App;
