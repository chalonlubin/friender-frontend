// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import FrienderApi from "./helpers/api";
import NavBar from "./routes/NavBar";
import RoutesList from "./Routes/RoutesList";
import Loading from "./common/Loading";
import TOAST_DEFAULTS from "./helpers/toastSettings";
import userContext from "./user/userContext";

const LOCAL_STORAGE_TOKEN_KEY = "token";

/** App
 *
 * State
 * - currUser - obj with user info
 * - currToken - token from API
 * - loading - true while loading
 * - toggleSwipe - toggles swipe component
 *
 * App -> RoutesList, NavBar
 */
function App() {
  const [currUser, setCurrUser] = useState(null);
  const [currToken, setCurrToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  );
  const [loading, setLoading] = useState(true);
  const [toggleSwipe, setToggleSwipe] = useState(false);


  useEffect(
    function handleUser() {
      async function getUser() {
        FrienderApi.token = currToken;
        const { username } = jwt_decode(currToken);
        const user = await FrienderApi.getUser(username);
        const matchData = await FrienderApi.getMatchData(user);
        setCurrUser({ user, ...matchData });
        setLoading(false);
      }
      if (currToken !== null) {
        getUser();
      } else {
        setLoading(false);
      }
    },
    [currToken, toggleSwipe]
  );

  /** Signup user, pass token to handleToken, update state */
  async function handleRegister(data) {
    const token = await FrienderApi.registerUser(data);
    handleToken(token);
    setCurrToken(token);
  }

  /** Login user, store token in localStorage, update state */
  async function handleLogin(data) {
    console.log("data", data);
    const token = await FrienderApi.loginUser(data);
    handleToken(token);
    setCurrToken(token);
    toast("🚀 Login Successful!", TOAST_DEFAULTS);
  }
  async function handleGuestLogin() {
    const token = await FrienderApi.loginUser({
      username: "BestGuest",
      password: "password",
    });
    handleToken(token);
    setCurrToken(token);
    toast("👀 Welcome Guest! Have fun looking around", TOAST_DEFAULTS);
  }

  /** Update user, update user state */
  async function handleUpdate(data) {
    const newUserInfo = await FrienderApi.updateUser(
      currUser.user.username,
      data
    );
    setCurrUser((prevInfo) => ({ ...prevInfo, ...newUserInfo }));
    toast("👍 Update Successful!", TOAST_DEFAULTS);
  }

  /** Logout user, remove token from localStorage, update state */
  function handleLogout() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    setCurrToken(null);
    setCurrUser(null);
    toast("👋 Logout Successful!", TOAST_DEFAULTS);
  }

  /** Record swipe in API, toggle swipe state */
  async function handleSwipe(likee, status) {
    await FrienderApi.recordSwipe(currUser.user.username, likee, status);
    setToggleSwipe(!toggleSwipe);
  }

  /** Store token in localStorage, update loading state */
  function handleToken(token) {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    setLoading(true);
  }

  return (
    <userContext.Provider value={currUser}>
      <BrowserRouter>
        <ToastContainer />
        <div className="app d-flex flex-column min-vh-100">
          <NavBar
            handleLogout={handleLogout}
            handleGuestLogin={handleGuestLogin}
          />
          {!loading ? (
            <RoutesList
              handleSwipe={handleSwipe}
              handleLogin={handleLogin}
              handleRegister={handleRegister}
              handleUpdate={handleUpdate}
            />
          ) : (
            <Loading />
          )}
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
