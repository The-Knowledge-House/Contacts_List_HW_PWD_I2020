import "./App.css";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Contact from "./componets/Main/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <button>Contact List</button>
      </div>
      <div className="contact-div">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
