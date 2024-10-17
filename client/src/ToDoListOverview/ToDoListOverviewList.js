import ToDoListOverviewItem from "./ToDoListOverviewItem";

function ToDoListOverviewList({
  toDoListOverviewList,
  handleArchive,
  handleDelete,
}) {
  return (
    <div>
      {toDoListOverviewList.map((toDoList) => (
        <ToDoListOverviewItem
          key={toDoList.id}
          toDoList={toDoList}
          handleArchive={handleArchive}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ToDoListOverviewList;
