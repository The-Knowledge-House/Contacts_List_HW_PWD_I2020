import "./App.css";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Contact from "./componets/Main/Contact";
import { useState } from "react";

function App() {
  const [button, setButton] = useState("");

  const clickingButton = () => {
    button === "" ? setButton(<Contact />) : setButton("");
  };

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <button onClick={clickingButton}>Contact List</button>
      </div>
      <div className="contact-div">{button}</div>
      <Footer />
    </div>
  );
}

export default App;
