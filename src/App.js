import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import FrienderApi from "./Helpers/api";
import NavBar from "./Routes/NavBar";
import RoutesList from "./Routes/RoutesList";
import Loading from "./Common/Loading";
import TOAST_DEFAULTS from "./Helpers/toastSettings";
import userContext from "./User/userContext";

const LOCAL_STORAGE_TOKEN_KEY = "token";

/** App
 *
 * State
 * - currUser - obj with user info
 * - currToken - token from API
 * - isLoading - true while loading
 * - toggleSwipe - toggles swipe component
 *
 * App -> RoutesList, NavBar
 */
function App() {
  const [currUser, setCurrUser] = useState(null);
  const [currToken, setCurrToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  );
  const [isLoading, setIsLoading] = useState(true);
  const [toggleSwipe, setToggleSwipe] = useState(false);

  //TODO: figure out when to get matches and get rest of users
  useEffect(
    function handleUser() {
      async function getUser() {
        FrienderApi.token = currToken;
        const { username } = jwt_decode(currToken);
        const user = await FrienderApi.getUser(username);
        const matchData = await FrienderApi.getMatchData(user);
        setCurrUser({ user, ...matchData });
        setIsLoading(false);
      }
      if (currToken !== null) {
        getUser();
      } else {
        setIsLoading(false);
      }
    },
    [currToken, toggleSwipe]
  );

  /** Signup user, pass token to handleToken, update state */
  async function handleRegister(data) {
    const token = await FrienderApi.registerUser(data);
    handleToken(token);
    setCurrToken(token);
    toast("✅ Sign-up Successful!", TOAST_DEFAULTS);
  }

  /** Login user, store token in localStorage, update state */
  async function handleLogin(data) {
    const token = await FrienderApi.loginUser(data);
    handleToken(token);
    setCurrToken(token);
    toast("🚀 Login Successful!", TOAST_DEFAULTS);
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
    setIsLoading(true);
  }

  // if (isLoading) return <Loading />;

  return (
    <div className="App">
      <userContext.Provider value={currUser}>
        <BrowserRouter>
          <ToastContainer />
          <NavBar handleLogout={handleLogout} />
          <RoutesList
            handleSwipe={handleSwipe}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            handleUpdate={handleUpdate}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
