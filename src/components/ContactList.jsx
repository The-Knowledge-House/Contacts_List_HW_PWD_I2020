import contacts from '../data/contacts.json';
import Card from './Card';

import { useState } from 'react'

const ContactList = () => {

  const [cont, setCont] = useState(contacts.results);

  const handleClick = (id) => {
    setCont(cont.filter(contact => contact.loc.postcode !== id))
  };

  return (
    <div className="contacts-container">
      {
        cont.map((contact, index) => {
          return (
            <Card
              key={index}
              fn={contact.name.first}
              ln={contact.name.last}
              email={contact.email}
              phone={contact.phone}
              picture={contact.picture.large}
              postcode={contact.loc.postcode}
              handleClick={handleClick}
            />
          );
        })
      }
    </div>
  );
}

export default ContactList;