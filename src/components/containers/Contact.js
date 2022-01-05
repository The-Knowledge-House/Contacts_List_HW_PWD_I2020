const Contact = (props) => {
    let {name, phone, cell, picture} = props.contacts; 

    return (
        <div className='contactSection'>
            <img className="left contactImg" src={picture.thumbnail} alt="contact icon" /> 
            <p>{name.title}. {name.first} {name.last}</p>
            <p>Cell: {cell}</p>
            <p> Home: {phone}</p>
        </div>

    );
  

};

export default Contact; 

