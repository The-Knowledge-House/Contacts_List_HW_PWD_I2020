import Contact from "./Contact"
import Data from "../data/contacts.json"
import "./Main.css"



function Main() { 
  console.log(Data);

  return (
    <div className="mainContent">
      {
        Data.results.map((contact) => { 
          return <Contact contactObj={ contact } />
        })
      }
    </div>
  );
}

export default Main