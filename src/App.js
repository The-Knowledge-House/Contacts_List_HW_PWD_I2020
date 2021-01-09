import "./App.css";
import Contacts from "./components/Contacts";
import Title from "./components/Title";
import { results } from "./data/contacts.json";
function App() {
  return (
    <div className="App">
      <Title />

      <div className="main">
        {results.map((contact, i) => {
          return <Contacts key={`${i} Contacts`} {...contact}></Contacts>;
        })}
      </div>
    </div>
  );
}

export default App;
