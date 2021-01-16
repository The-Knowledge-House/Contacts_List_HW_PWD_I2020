const SingleContact = (props) => {
  const { picture, name, phone, cell } = props.contact;
  return (
    <div>
      <img src={picture.thumbnail} alt="contact headshot" />
      <h3>
        {name.first} {name.last}
      </h3>
      <h5>Home: {phone}</h5>
      <h5>Mobile: {cell}</h5>
    </div>
  );
};

export default SingleContact;
