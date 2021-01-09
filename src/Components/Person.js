import "./Person.css";

export default function Person(contact) {
	return (
		<div className="contact-container">
			<img src={contact.picture.large} />
			<div className="text-info">
				<h2>
					{contact.name.first} {contact.name.last}
				</h2>
				<p>
					<b>Home:</b> {contact.phone}
				</p>
				<p>
					<b>Mobile:</b> {contact.cell}
				</p>
			</div>
		</div>
	);
}
