import Contact from './Contact';
import {results} from '../data/contacts.json';

const Contacts = () => {
    console.log(results);
        return(
            <div className="contacts">
                {results.map( (contact, index) => {
                    return <Contact {...contact} />
                })}
            </div>
        )
}

export default Contacts;