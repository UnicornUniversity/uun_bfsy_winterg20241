import "./App.css";
import ToDoItem from "./ToDoItem";

function App() {
  return (
    <div className="App">
      <ToDoItem
        data={{ id: "td01", name: "koupit rohlíky", done: false }}
        category={"shopping"}
      />
      <ToDoItem data={{ id: "td02", name: "zaběhat si", done: false }} />
      <ToDoItem data={{ id: "td03", name: "koupit hřebíky", done: false }} />
      <ToDoItem data={{ id: "td04", name: "jít do posilovny", done: false }} />
    </div>
  );
}

export default App;
