/** @format */

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFirst = (e) => {
    setFirst(e.target.value);
  };

  const handleLast = (e) => {
    setLast(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first || !last) {
      setFullName("");
      return;
    }
    let res = first + " " + last;
    setFullName(res);
  };
  return (
    <>
      <div className="App">
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <p>First Name:</p>
            <input type="text" value={first} onChange={(e) => handleFirst(e)} />
          </div>
          <div>
            <p>Last Name:</p>
            <input type="text" value={last} onChange={(e) => handleLast(e)} />
          </div>
          <button type="submit">Submit</button>
        </form>
        {fullName && <div>Full Name: {fullName}</div>}
      </div>
    </>
  );
}

export default App;
