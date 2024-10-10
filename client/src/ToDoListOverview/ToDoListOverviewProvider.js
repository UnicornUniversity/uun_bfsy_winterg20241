import { useMemo, useState } from "react";

import Header from "./Header";
import ToDoListOverviewList from "./ToDoListOverviewList";
import Toolbar from "./Toolbar";

function ToDoListOverviewProvider() {
  const [showArchived, setShowArchived] = useState(false);
  console.log(showArchived);

  const randomNumber = Math.random();
  console.log("randomNumber: ", randomNumber);

  const [toDoListOverviewList, setToDoListOverviewList] = useState([
    {
      id: "td01",
      name: "První úkolovník",
      state: "active",
      isAuthor: true,
    },
    {
      id: "td02",
      name: "Druhý úkolovník",
      state: "archived",
      isAuthor: false,
    },
    {
      id: "td03",
      name: "Třetí úkolovník",
      state: "active",
      isAuthor: false,
    },
    {
      id: "td04",
      name: "čtvrtý úkolovník",
      state: "archived",
      isAuthor: true,
    },
  ]);

  function handleCreate() {
    setToDoListOverviewList((current) => {
      current.push({
        id: Math.random(),
        name: "Nový úkol",
        state: "active",
        isAuthor: true,
      });
      return current.slice();
    });
  }

  const filteredToDoListList = useMemo(() => {
    if (showArchived) {
      return toDoListOverviewList;
    } else {
      return toDoListOverviewList.filter((item) => item.state === "active");
    }
  }, [showArchived, toDoListOverviewList]);

  const secondRandomNumber = useMemo(() => Math.random(), [showArchived]);
  console.log("secondRandomNumber: ", secondRandomNumber);

  return (
    <>
      <Header />
      <Toolbar
        handleCreate={handleCreate}
        showArchived={showArchived}
        setShowArchived={setShowArchived}
      />
      <ToDoListOverviewList toDoListOverviewList={filteredToDoListList} />
    </>
  );
}

export default ToDoListOverviewProvider;
