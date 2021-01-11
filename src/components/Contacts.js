import "../contacts.css";

function Contacts({ name, picture, email, cell, phone, ...contact }) {
  return (
    <div className="info">
      <h4>
        {name.first}, {name.last}
      </h4>

      <img className="icon" src={picture.large} alt="" />
      <h7> Home: {phone}</h7>
      <h7> Mobile: {cell}</h7>
    </div>
  );
}

export default Contacts;
