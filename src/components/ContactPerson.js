import "./ContactPerson.css";

function PersonInfo(contactInfo) {
  return (
    <div className="contact-container">
      <img src={contactInfo.picture.large} />
      <div className="text-info">
        <h2>
          {contactInfo.name.first} {contactInfo.name.last}
        </h2>
        <p>
          <b>Home:</b> {contactInfo.phone}
        </p>
        <p>
          <b>Mobile:</b> {contactInfo.cell}
        </p>

      </div>

    </div>
  );
}

export default PersonInfo;