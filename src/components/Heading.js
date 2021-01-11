import "./css/Heading.css";
import topPhone from "../images/iPhone_top_frame.png";

function Heading() {
  return (
    <header className="app-header">
      <img src={topPhone} alt="top of iPhone" />
      <div className="app-title">
        <p className="header-groups">
          <a href="public/index.html">Groups</a>
        </p>
        <p className="header-plus">
          <a href="public/index.html">+</a>
        </p>
        <h1 className="app-title">Contacts</h1>
      </div>
    </header>
  );
}

export default Heading;
