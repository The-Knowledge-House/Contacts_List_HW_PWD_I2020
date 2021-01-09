import Contact from "./Contact";
import { results } from "../data/contacts.json";
function Contacts() {
  console.log(results);
  return (
    <main className="all-contacts">
      {results.map((contact, index) => {
        return <Contact {...contact} />;
      })}
    </main>
  );
}

export default Contacts;
