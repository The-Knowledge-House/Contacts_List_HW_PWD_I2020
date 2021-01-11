import "./App.css";
import Heading from "./components/Heading";
import Contacts from "./components/Contacts";
import phoneFrame from "./images/iPhone_frame.png";

function App() {
  return (
    <div className="App">
      <div className="iPhone">
        <Heading />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
