const Person = (props) => {
  const { person } = props;
  let first = person.name.first.charAt(0).toUpperCase() + person.name.first.slice(1);
  let last = person.name.last.charAt(0).toUpperCase() + person.name.last.slice(1);

  return (
    <div className="person">
      <img className="pfp" src={person.picture.medium} alt="Avatar"/>
      <div className="person-contact">
        <p className="name">{first} {last}</p>
        <p>Home: {person.phone}</p>
        <p>Mobile: {person.cell}</p>
      </div>
    </div>
  );
}

export default Person;