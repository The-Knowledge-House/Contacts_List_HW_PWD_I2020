import Contact from "./Contact";
import "./css/Contacts.css";
import { results } from "../data/contacts.json";

function Contacts() {
  console.log(results);
  return (
    <div className="all-contacts">
      {results.map((contact, index) => {
        return <Contact {...contact} />;
      })}
    </div>
  );
}

export default Contacts;