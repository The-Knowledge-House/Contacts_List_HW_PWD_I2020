import React , {Component} from 'react';
import ContactData from '../data/contacts.json';
const data = ContactData.results;
class ContactsList extends Component{
    render() {
        return (
            <div >
                <h1>Contact List</h1>

                <div className="box-insider">
                    {data.map(s => (

                        <div className="bb">
                            <div className="w1">
                                <img src={s.picture.medium} alt=""/>
                            </div>
                            <div className= "w2">
                                <p className="bt"> <span className="first-name">{s.name.first}</span> <span className="last-name">{s.name.last}</span></p>
                                <p> <b>Home:</b> {s.phone}</p>
                                <p><b>Mobile:</b> {s.cell}</p>

                        </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default ContactsList;