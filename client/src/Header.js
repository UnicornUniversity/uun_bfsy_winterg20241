import { useContext } from "react";
import { UserContext } from "./Users/UserProvider.js";
import { Link } from "react-router-dom";

function Header() {
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <div>
      <Link to="/">AppName</Link>{" "}
      {userList.map((user) => (
        <button key={user.id} onClick={() => setLoggedInUser(user.id)}>
          {user.name} {(user.id === loggedInUser).toString()}
        </button>
      ))}
    </div>
  );
}

export default Header;
