function Comment({ userName, isAdmin }) {
  return (
    <div>
      <p>Logged in as {userName}</p>
      {isAdmin && <button>Edit comment.</button>}
    </div>
  );
}
export default Comment;
