import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import userContext from "../user/userContext";
import Homepage from "../common/Homepage";
import Login from "../user/LoginForm";
import Signup from "../user/SignupForm";
import EditForm from "../user/EditForm";
import ProfileCard from "../user/ProfileCard";
import Swipe from "../swipe/Swipe";
import Messages from "../messages/Message";
import NotFound from "../common/NotFound";
import Friends from "../match/Friends";

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
function RoutesList({
  handleLogin,
  handleRegister,
  handleUpdate,
  handleSwipe,
}) {
  const currUser = useContext(userContext);

  function authRoutes() {
    return (
      <>
        <Route path="/profile" element={<ProfileCard />} />
        <Route
          path="/profile/edit"
          element={<EditForm handleUpdate={handleUpdate} />}
        />
        <Route path="/swipe" element={<Swipe handleSwipe={handleSwipe} />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/messages/:matchedUser" element={<Messages />} />
      </>
    );
  }

  function unauthRoutes() {
    return (
      <>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
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
