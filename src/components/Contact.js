import './contact.css';

const Contact = ({ ...therest }) => {
//    console.log("props", props);

            console.log(therest.gender);

            return(
                <div className="card">
                    <div className="person">
                    <img src={therest.picture.large}/> 
                    <div className="contactinfo">         
                        <p>Name: {therest.name.first} {therest.name.last}</p>              
                        <p>Home: {therest.phone}</p>             
                        <p>Mobile: {therest.cell}</p>
                    </div>
                    </div>            
                </div>
            )
}

export default Contact;

//          const { contact } = props 
//          You can destructure this in the statement instead of on a separate line