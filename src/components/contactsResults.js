import { results } from "../data/contacts.json";
import PersonInfo from "./contactsPerson"

function FullContactsInfo() {
	console.log(results);
	return (
		<div className="container">
            {
            results.map((indPerson) => {
                return <PersonInfo {...indPerson} />
            })
            }
		</div>
	);
}

export default FullContactsInfo