import Comment from "./Comment";
import UserInfoContext from "../context/UserInfoContext";

function Post({ userName, isAdmin }) {
  return (
    <div>
      {isAdmin && <button>Delete</button>}
      <h1>Title of the Post</h1>
      <h2>sub title of the post</h2>
      <p>This is some content of my new post.</p>
      <Comment userName={userName} isAdmin={isAdmin}></Comment>
    </div>
  );
}

export default Post;
