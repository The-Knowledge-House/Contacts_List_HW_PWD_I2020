import React from "react";
import "./Main.css";

const Main = ({ name, picture, cell, phone }) => {
  return (
    <main>
      <img src={picture.large} alt={name.first} />
      <h2>
        {name.first} {name.last}
      </h2>
      <h4> Home :{phone}</h4>
      <h4> Phone :{cell}</h4>
    </main>
  );
};

export default Main;
