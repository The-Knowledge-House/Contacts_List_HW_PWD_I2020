import contacts from '../data/contacts.json';
import Card from './Card';

const ContactList = () => {
  return (
    <div className="contacts-container">
      {
        contacts.results.map((contact, index) => {
          return (
            <Card
              key={index}
              fn={contact.name.first}
              ln={contact.name.last}
              email={contact.email}
              phone={contact.phone}
              picture={contact.picture.large}
            />
          );
        })
      }
    </div>
  );
}

export default ContactList;