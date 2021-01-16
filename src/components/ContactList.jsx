import data from "../data/contacts.json";
import SingleContact from "./SingleContact";

const Contacts = () => {
  return (
    <div>
      {data.results.map((contact) => (
        <SingleContact key={contact.email} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
