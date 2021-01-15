import React from "react";
import { results } from "../data/contacts.json";
import "./Contact.css";

const Contacts = () => {
  console.log(results);
  return (
    <div className="contacts">
      {results.map((contact, index) => {
        return <Contact {...contact} />;
      })}
    </div>
  );
};

export default Contacts;
