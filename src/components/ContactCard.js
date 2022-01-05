import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card-container">
      <img src={props.image} className="contact-img"/>

      <div className="contact-info">
        <h3>{props.name}</h3>
        <h5>Home: {props.home}</h5>
        <h5>Mobile: {props.mobile}</h5>
      </div>
    </div>
  );
}

export default ContactCard;
