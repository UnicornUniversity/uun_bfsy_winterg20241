function ToDoListOverviewItem({ toDoList }) {
  return (
    <div>
      Item
      {toDoList.isAuthor ? (
        <>
          <button>archivovat</button>
          <button>smazat</button>
        </>
      ) : null}
    </div>
  );
}

export default ToDoListOverviewItem;
