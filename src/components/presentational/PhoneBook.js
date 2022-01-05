import phoneData from '../../data/contacts.json'
import Contact from '../containers/Contact.js'

const PhoneBook = () => {
    return (
        <div className="contactList">
            {phoneData.results.map((contact) => (
                <Contact contacts={contact} key={contact.login.username} /> 
            )
            )}
        </div>
    )
}

export default PhoneBook; 