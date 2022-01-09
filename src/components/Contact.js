

function Contact(props){

    const { person } = props    

    
        return [
            <div>
                <img  src={person.picture.medium} />
                <h2> {person.name.first} {person.name.last}</h2>
                <p>Home: {person.phone}</p>
                <p>Cell: {person.cell}</p>
                
    
            </div>
  
    
        ]
    }
    
    export default Contact