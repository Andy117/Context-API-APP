import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

function Comment() {
  const { userName, isAdmin } = useContext(UserInfoContext);
  return (
    <div>
      <p>Logged in as {userName}</p>
      {isAdmin && <button>Edit comment.</button>}
    </div>
  );
}
export default Comment;
