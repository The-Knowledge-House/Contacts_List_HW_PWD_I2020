import "./App.css";
import Contacts from "./components/Contacts";
import Title from "./components/Title";
import { results } from "./data/contacts.json";
import nav from "./images/nav.jpeg";

function App() {
  return (
    <div className="App">
      <div className="iphone">
        <img className="nav" src={nav} alt="" />
        <Title />
        <div className="cont">
          <span>
            {results.map((contact, i) => {
              return <Contacts key={`${i} Contacts`} {...contact}></Contacts>;
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
