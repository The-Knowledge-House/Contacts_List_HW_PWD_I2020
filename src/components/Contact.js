const Contact = (props) => {
    console.log("props", props);

        const { contact } = props
            console.log("This is a contact", contact);

            return(
                <div>
                    <p>Image: {contact.picture}</p>          {/* How do I access "large", "medium" or "thumbnail"? */}
                    <p>Name: {contact.name}</p>              {/* How do I access "first", and "last" together? */}   
                    <p>Home: {contact.phone}</p>             
                    <p>Mobile: {contact.cell}</p>            
                </div>
            )
}

export default Contact;
