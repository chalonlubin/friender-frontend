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
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="logo512.png"
            alt="chum icon"
            className="d-inline-block m-2"
            width="40"
            height="32"
          ></img>
          Chum Bucket
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
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            {currUser && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/swipe">
                    Swipe
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/chums">
                    Chums
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" onClick={logOutUser} to="/">
                    Log Out {currUser.user.username}
                  </NavLink>
                </li>
              </>
            )}
            {!currUser && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Signup
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

  // function unauthNav() {
  //   return (
  //     <ul className="navbar-nav mr-auto">
  //       <li className="nav-item">
  //         <NavLink to="/login">
  //           <div className="navbar-link me-2">Log In</div>
  //         </NavLink>
  //       </li>
  //       <li className="nav-item">
  //         <NavLink to="/signup">
  //           <div className="navbar-link me-2">Sign Up</div>
  //         </NavLink>
  //       </li>
  //     </ul>
  //   );
  // }

  // return (
  //   <div>
  //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //       <div className="container-fluid">
  //         <NavLink to="/">
  //           <div className="navbar-brand">Friender</div>
  //         </NavLink>
  //         {currUser ? authNav() : unauthNav()}
  //       </div>
  //     </nav>
  //   </div>
  // );


export default NavBar;
