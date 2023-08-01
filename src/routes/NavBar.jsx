import { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "../user/userContext";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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
// eslint-disable-next-line react/prop-types
function NavBar({ handleLogout, handleGuestLogin }) {
  const currUser = useContext(userContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3">
        <NavLink className="navbar-brand" to="/">
          <img src="/brand.svg" alt="of icon" height="45" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {currUser ? (
              <>
                <Nav.Link as={NavLink} to="/swipe">SWIPE</Nav.Link>
                <Nav.Link as={NavLink} to="/friends">FRIENDS</Nav.Link>
                <Nav.Link as={NavLink} to="/profile">PROFILE</Nav.Link>
                <Nav.Link onClick={handleLogout} as={NavLink} to="/">SIGN OUT</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">LOGIN</Nav.Link>
                <Nav.Link as={NavLink} to="/signup">SIGNUP</Nav.Link>
                <Nav.Link onClick={handleGuestLogin} as={NavLink} to="/">GUEST</Nav.Link>
              </>
            )}
          </Nav>

        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
