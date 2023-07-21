import { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "../User/userContext";

/** Render navigation bar
 *
 * Props
 * - handleLogout()
 *
 * Context
 * - currUser - obj with user info
 *
 * App -> NavBar
 */
function NavBar({ handleLogout }) {
  const currUser = useContext(userContext);

  function logOutUser() {
    handleLogout();
  }

  // could add two functions to return login nav /logout nav
  // function authNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
      <div className="container-fluid">
        <NavLink className="navbar-brand px-1" to="/">
          <img
            src="logo-black-on-transparent-background.png"
            alt="of icon"
            height="20"
          ></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse pt-4" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-4">
            {currUser && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/swipe">
                    Swipe
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/chums">
                    Friends
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="btn btn-outline-warning nav-link"
                    onClick={logOutUser}
                    to="/"
                  >
                    Log Out
                  </NavLink>
                </li>
              </>
            )}
            {!currUser && (
              <>
                <li className="nav-item">
                  <NavLink className=" btn btn-light btn-sm" to="/login">
                    LOGIN
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn btn-light btn-sm" to="/signup">
                    SIGNUP
                  </NavLink>
                </li>
                {/* TODO: Login as guest */}
                <li className="nav-item">
                  <NavLink className="btn btn-light btn-sm" to="/signup">
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
