import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";

/** Set up Jobly routes
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
function RoutesList({ handleLogin, handleRegister, handleUpdate }) {
  const { currUser } = useContext(userContext);

  function authRoutes() {
    return (
      <>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileForm handleUpdate={handleUpdate} />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/matches" element={<Matches />} />
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
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
