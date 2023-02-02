
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import FrienderApi from './frienderApi';
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';

import NavBar from './NavBar';
import RoutesList from './RoutesList';
import Loading from './Loading';

const LOCAL_STORAGE_TOKEN_KEY = "token";

/**
 *
 * @returns
 */

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [currToken, setCurrToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  );
  const [isLoading, setIsLoading] = useState(true);


  async function handleLogin(data) {
    const token = await FrienderApi.loginUser(data);
    handleToken(token);
    setCurrToken(token);
  }

  async function handleRegister(data) {
    const token = await FrienderApi.registerUser(data);
    handleToken(token);
    setCurrToken(token);
  }

  function handleLogout() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    setCurrToken(null);
    setCurrUser(null);
  }

  async function handleUpdate(data) {
    const newUserInfo = await FrienderApi.updateUser(currUser.username, data);
    setCurrUser(prevInfo => ({...prevInfo, ...newUserInfo}))
  }

  function handleToken(token) {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    setIsLoading(true);
  }

  //TODO: figure out when to get matches and get rest of users
  useEffect(
    function handleUser() {
      async function getUser() {
        FrienderApi.token = currToken;
        const { username } = jwt_decode(currToken);
        const user = await FrienderApi.getUser(username);
        setCurrUser(user);
        setIsLoading(false);
      }
      if (currToken !== null) {
        getUser();
      } else {
        setIsLoading(false);
      }
    },
    [currToken]
  );

  if (isLoading) return <Loading />;

  return (
    <div className="App">
      <div className="Friender">
        <BrowserRouter>
          <NavBar handleLogout={handleLogout} />
          <RoutesList
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            handleUpdate={handleUpdate}
          />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
