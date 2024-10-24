import { useContext, useState } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import UpdateName from "./UpdateName";

function Toolbar() {
  const [show, setShow] = useState(false);
  const { data, handlerMap } = useContext(DetailContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div style={{ border: "1px solid grey", margin: "8px", padding: "8px" }}>
      <UpdateName
        show={show}
        handleClose={() => setShow(false)}
        data={data}
        handlerMap={handlerMap}
      />
      {data.name}{" "}
      {loggedInUser === data.owner ? (
        <button onClick={() => setShow(true)}>update name</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Toolbar;
