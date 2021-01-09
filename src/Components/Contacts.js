import { results } from "../data/contacts.json";
import Person from "./Person"

export default function Contacts() {
	console.log(results);
	return (
		<div className="container">
            {
            results.map((person) => {
                return <Person {...person} />
            })
            }
		</div>
	);
}
