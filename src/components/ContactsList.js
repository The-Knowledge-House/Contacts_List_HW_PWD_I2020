import "../App.css";
import ContactCard from '../components/ContactCard'
import data from '../data/contacts.json'


function ContactsList() {
  const list = data.results.map((item) => (
    <ContactCard
      image={item.picture.large}
      name={item.name.first + " " + item.name.last}
      home={item.phone}
      mobile={item.cell}
    />
  ));

  return <div className="container">{list}</div>;
}

export default ContactsList;
