import { useContext } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import Member from "./Member";

function MemberList() {
  const { data } = useContext(DetailContext);
  const { userMap, loggedInUser } = useContext(UserContext);

  return (
    <div style={{ border: "1px solid grey", margin: "8px", padding: "8px" }}>
      <div>
        Member List{" "}
        {data.owner === loggedInUser ? <button>add member</button> : ""}
      </div>
      <Member memberId={data.owner} data={userMap[data.owner]} isOwner={true} />
      {data.memberList.map((memberId) => (
        <Member
          key={memberId}
          memberId={memberId}
          data={userMap[memberId]}
          showRemoveButton={
            loggedInUser === data.owner || memberId === loggedInUser
          }
        />
      ))}
    </div>
  );
}

export default MemberList;
