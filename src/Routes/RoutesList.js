import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import userContext from "../User/userContext";
import Homepage from "../Common/Homepage";
import Login from "../User/LoginForm";
import Signup from "../User/SignupForm";
import ProfileForm from "../User/ProfileForm";
import ProfileCard from "../User/ProfileCard";
import Swipe from "../Swipe/Swipe";
import Messages from "../Messages/Message";
import NotFound from "../Common/NotFound";
import Chums from "../Match/Chums";

/** Set up Friender routes
 *
 * Context
 * - currUser - obj with user info
 *
 * Props
 * - handleLogin()
 * - handleRegister()
 * - handleUpdate()
 *
 * App -> RoutesList
 */

// handleSwipe?
function RoutesList({ handleLogin, handleRegister, handleUpdate, handleSwipe }) {
  const currUser = useContext(userContext);

  function authRoutes() {
    return (
      <>
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/profile/edit" element={<ProfileForm handleUpdate={handleUpdate} />} />
        <Route path="/swipe" element={<Swipe handleSwipe={handleSwipe} />} />
        <Route path="/chums" element={<Chums />} />
        <Route path="/messages/:matchedUser" element={<Messages />} />
      </>
    );
  }

  function unauthRoutes() {
    return (
      <>
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<Signup handleRegister={handleRegister} />}
        />
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {currUser ? authRoutes() : unauthRoutes()}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesList;
