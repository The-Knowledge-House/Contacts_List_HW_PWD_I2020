import "./Contact.css"

function Contact(props) { 
  console.log("props", props);

  const { contactObj } = props;
  console.log("this is the contact", contactObj)
  return (
    <div className="flex">
      <div className="imgContainer">
        <img src={contactObj.picture.large} />
      </div>
      <div className="contactInfo">
        <h2>{contactObj.name.first} {contactObj.name.last}</h2>
        <p>Home: {contactObj.phone}</p>
        <p>Mobile: {contactObj.cell}</p>
      </div>
      <div>
        <p><i className="arrow right"></i></p> 
      </div>
    </div>
  );
}


export default Contact