import "./contactPerson.css";

function PersonInfo(contactInfo) {
	return (
		<div className="contact-container">
			<img src={contactInfo.picture.medium} />
			<div className="text-info">
				<h2> 
          {contactInfo.name.first} {contactInfo.name.last} 
				</h2>
				<p>
					<b>Home Number:</b> {contactInfo.phone}
				</p>
				<p>
					<b>Mobile Number:</b> {contactInfo.cell}
				</p>
			</div>
		</div>
	);
}

export default PersonInfo