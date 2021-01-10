import "./Main.css";

const Main = ({ name, picture, cell, phone }) => {
  return (
    <div className="container">
      <div>
        <img src={picture.large} alt={name.first} />
      </div>
      <div className="contactInfo">
        <h3>
          {name.first} {name.last}
        </h3>
        <p>Home:{phone}</p>
        <p> Phone:{cell}</p>
      </div>
    </div>
  );
};

export default Main;
