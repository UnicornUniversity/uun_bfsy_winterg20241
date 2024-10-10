import ToDoListOverviewItem from "./ToDoListOverviewItem";

function ToDoListOverviewList({ toDoListOverviewList }) {
  return (
    <div>
      {toDoListOverviewList.map((toDoList) => (
        <ToDoListOverviewItem key={toDoList.id} toDoList={toDoList} />
      ))}
    </div>
  );
}

export default ToDoListOverviewList;
