import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import "./App.css";
import Detail from "./Detail/Detail";
import Overview from "./Overview/Overview";
import UserProvider from "./Users/UserProvider";
import Header from "./Header";

function App() {
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id"); // is the string "Jonathan"

  const [selected, setSelected] = useState(id);

  console.log(selected);

  return (
    <div className="App">
      <UserProvider>
        <Header />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <div>
            <Overview setSelected={setSelected} />
          </div>
          <div>{!selected ? "no item selected" : <Detail />}</div>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
