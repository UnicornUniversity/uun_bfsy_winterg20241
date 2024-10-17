import "./App.css";
import ToDoListOverview from "./ToDoListOverview/ToDoListOverview";
import UserProvider from "./Users/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ToDoListOverview />
      </UserProvider>
    </div>
  );
}

export default App;
