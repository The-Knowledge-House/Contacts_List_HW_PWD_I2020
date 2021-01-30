const SingleContact = (props) => {
  const { picture, name, phone, cell } = props.contact;
  return (
    <div class="card">
      <img src={picture.thumbnail} alt="contact headshot" />
      <h3 class="side">
        {name.first} {name.last}
      </h3>
      <h5 class="side">Home: {phone}</h5>
      <h5 class="side">Mobile: {cell}</h5>
    </div>
  );
};

export default SingleContact;
