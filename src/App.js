import "./App.css";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Contact from "./componets/Main/Contact";
import { useState } from "react";

function App() {
  const [button, setButton] = useState(``);

  const clickingButton = () => {
    setButton(() => <Contact />);
  };

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <button onClick={clickingButton}>Contact List</button>
      </div>
      <div className="contact-div">
        {button}
        {/* <Contact /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
