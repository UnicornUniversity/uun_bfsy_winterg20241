import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Detail from "./Detail/Detail";
import UserProvider from "./Users/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={""}>
              <Route index element={""} />
              <Route index element={""} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
