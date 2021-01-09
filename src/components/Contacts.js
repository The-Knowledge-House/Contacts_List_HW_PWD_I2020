function Contacts({ name, picture, email, cell, phone, ...contact }) {
  return (
    <div className="contact-container">
      <h1>{name.first}</h1>
      <h1>{name.last}</h1>
      <img src={picture.large} alt="" />
      <h2> Home: {phone}</h2>
      <h2> Mobile: {cell}</h2>
      <h2> Email: {email}</h2>
      <h2> Location: {contact.location.city}</h2>
    </div>
  );
}

export default Contacts;
