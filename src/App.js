import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <ContactList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
