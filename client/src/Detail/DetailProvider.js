import { createContext, useState } from "react";

export const DetailContext = createContext();

function DetailProvider({ children }) {
  const [data, setData] = useState({
    id: "tdl01",
    name: "První úkolovník",
    owner: "u1",
    memberList: ["u2", "u3"],
    itemList: [
      {
        id: "td01",
        name: "první úkol",
        resolved: false,
      },
    ],
  });

  const value = {
    data,
    handlerMap: {
      updateName: ({ name }) => {
        setData((current) => {
          current.name = name;
          return { ...current };
        });
      },
      addItem: () => {
        setData((current) => {
          current.itemList.push({
            id: Math.random(),
            name: "",
            resolved: false,
          });
          return { ...current };
        });
      },
      updateItemName: ({ id, name }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList[itemIndex] = {
            ...current.itemList[itemIndex],
            name,
          };
          return { ...current };
        });
      },
      toggleResolveItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList[itemIndex] = {
            ...current.itemList[itemIndex],
            resolved: !current.itemList[itemIndex].resolved,
          };
          return { ...current };
        });
      },
      deleteItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          console.log(itemIndex);
          current.itemList.splice(itemIndex, 1);
          return { ...current };
        });
      },
    },
  };
  return (
    <DetailContext.Provider value={value}>{children}</DetailContext.Provider>
  );
}

export default DetailProvider;
