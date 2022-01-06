import Person from "./Person";
import data from "../data/contacts.json";

function Contacts() {
  return (
    <div className="contacts">
      {data.results.map((person,i) => {
        return <Person
          key={i}
          person={person} />
      })}
    </div>
  );
}

export default Contacts;