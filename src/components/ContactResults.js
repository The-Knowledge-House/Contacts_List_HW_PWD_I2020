import { results } from "../data/contacts.json";
import PersonInfo from "./ContactPerson";

function FullContacts() {
  console.log(results);
  return (
    <div className="container">
      {results.map((indPerson) => {
        return <PersonInfo {...indPerson} />
      })}

    </div>
  );
};

export default FullContacts;