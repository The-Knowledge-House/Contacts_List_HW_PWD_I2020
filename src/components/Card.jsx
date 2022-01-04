const Card = ({ fn, ln, email, phone, picture }) => {
  return (
    <div className="contact-card">
      <div className="image-container">
        <img src={picture} alt={fn} />
      </div>
      <div className="contact-info">
        <div className="names">
          <p>{fn}</p>
          <p>{ln}</p>
        </div>
        <div className="details">
          <p className="email">{email}</p>
          <p className="phone">{phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;