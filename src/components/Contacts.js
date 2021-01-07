import Contact from './Contact';
import Data from './data/contacts.json';

const Contacts = () => {
    console.log(Data);
        return(
            <div>
                {Data.map( (contact, index) => {
                    return <Contact contact={contact} />
                })}
            </div>
        )
}

export default Contacts;