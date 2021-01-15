import React from "react";
import "./Contact.css";

function Contacts({ picture, name, phone, cell }) {
  return (
    <div className="contact-block">
      <div className="person">
        <img src={picture} alt="" />
        <div className="person-contact">
          <h3 className="person-name">
            {name.first} {name.last}
          </h3>
          <h5 className="person-phone">Home: {phone}</h5>
          <h5 className="person-cell">Mobile: {cell}</h5>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
