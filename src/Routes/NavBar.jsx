import { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "../User/userContext";

/** Render navigation bar
 *
 * Props
 * - handleLogout()
 * - handleGuestLogin()
 *
 * Context
 * - currUser - obj with user info
 *
 * App -> NavBar
 */
function NavBar({ handleLogout, handleGuestLogin }) {
  const currUser = useContext(userContext);

  return (
    <nav className="navbar navbar-expand-lg  shadow-sm bg-light">
      <div className="container-fluid px-3 p-2">
        <NavLink className="navbar-brand" to="/">
          <img src="src/Images/brand.png" alt="of icon" height="22"></img>
        </NavLink>
        <button
          className="navbar-toggler p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto d-flex align-items-center pt-2 gap-2 ">
            {currUser && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/swipe">
                    Swipe
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/friends">
                    Friends
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" onClick={handleLogout} to="/">
                    Sign Out
                  </NavLink>
                </li>
              </>
            )}
            {!currUser && (
              <>
                <li className="nav-item">
                  <NavLink className=" btn btn-sm fw-bold fs-5" to="/login">
                    LOGIN
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn btn-sm fw-bold fs-5" to="/signup">
                    SIGNUP
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="btn btn-sm fw-bold fs-5"
                    onClick={handleGuestLogin}
                    to="/"
                  >
                    GUEST
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
