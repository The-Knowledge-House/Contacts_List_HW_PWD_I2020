function Contact({ picture, name, phone, cell, ...contact }) {
  // console.log("props", props);
  // const { contact } = props;
  // console.log("this is a contact", contact);

  return (
    <div className="contact-view">
      <div className="person">
        <img src={picture.large} alt="" />
        <h3 className="person-name">
          {name.first} {name.last}
        </h3>
        <h5 className="person-home-num">Home: {phone}</h5>
        <h5 className="person-mobile-num">Mobile: {cell}</h5>
        <h5 className="person-home-num">Email: {contact.email}</h5>
      </div>
    </div>
  );
}

export default Contact;
