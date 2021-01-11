import "./Main.css";

const Main = ({ name, picture, cell, phone }) => {
  return (
    <div className="container">
      <div className="img-div">
        <img src={picture.large} alt={name.first} />
        <div className="num">
          <p>Home:{phone}</p>
          <p> Phone:{cell}</p>
        </div>
      </div>
      <div className="contactInfo">
        <h4>
          {name.first} {name.last}
        </h4>
      </div>
    </div>
  );
};

export default Main;
