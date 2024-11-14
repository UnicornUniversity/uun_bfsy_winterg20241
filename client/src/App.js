import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import Detail from "./Detail/Detail";
import UserProvider from "./Users/UserProvider";
import Overview from "./Overview/Overview";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Overview />} />
              <Route path="/detail" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
