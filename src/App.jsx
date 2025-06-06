import "./App.css";
import BlogPage from "./components/BlogPage";
import UserInfoContext from "./context/UserInfoContext";

function App() {
  const userInfo = {
    userName: "Admin",
    isAdmin: "true",
  };

  return (
    <div>
      <UserInfoContext.Provider value={userInfo}>
        <BlogPage></BlogPage>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
