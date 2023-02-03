import "./Homepage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../User/userContext";

/** Render Friender homepage
 *
 * Context
 * - currUser
 *
 * Routes -> Homepage
 */
function Homepage() {
   const currUser = useContext(userContext);

   return (
    <section className="Homepage">
    <div className="Homepage-content">
      <h1 className="Homepage-title"> Welcome to the Chum Bucket! </h1>
          <h2 className="Homepage-subtitle">
            Squad Up!
          </h2>
        {!currUser && (
          <div className="d-flex justify-content-evenly">
            <Link
              className="btn btn-outline-light btn-lg opacity-75 m-4"
              to="/login"
            >
              Log in
            </Link>
            <Link
              className="btn btn-outline-light btn-lg opacity-75 m-4"
              to="/signup"
            >
              Sign up
            </Link>

          </div>
        )}
        </div>
      </section>
   );
 }
 export default Homepage;
