import React from "react";
import Contacts from "./components/Contacts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <Contacts />
      {/* <img src="https://via.placeholder.com/150" alt="profile" />
      <div className="user-details">
        <p>Name: Jenny Han</p>
        <p>Phone: (55) 555-5555</p>
        <p>Cell: (55) 555-5555</p>
      </div> */}
    </div>
  );
}

export default App;
