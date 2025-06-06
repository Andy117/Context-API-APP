import { useContext } from "react";
import Post from "./Post";
import UserInfoContext from "../context/UserInfoContext";

function BlogPage() {
  const userInfo = useContext(UserInfoContext);
  return (
    <div>
      <h1>Welcome to the Blog Page</h1>
      <Post userName={userInfo.isAdmin} isAdmin={userInfo.isAdmin}></Post>
    </div>
  );
}

export default BlogPage;
