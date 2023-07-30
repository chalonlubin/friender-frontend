import "./Homepage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../user/userContext";

function Homepage() {
  const currUser = useContext(userContext);

  return (
    <div className="homepage-container d-flex flex-column flex-grow-1">
      <div className="index-cta d-flex flex-column gap-2 mt-4">
        {!currUser && (
          <>
            <h1 className="fw-bold text-dark text-center">
              New Friends Are Moments Away 🎉
            </h1>

            <Link className="btn btn-success btn-lg" to="/signup">
              JOIN THE PARTY
            </Link>
          </>
        )}
        {currUser && (
          <>
            <h1 className="fw-bold text-dark text-center">
              Glad to see you again {currUser.user.username}!
            </h1>
            <div className="d-flex gap-4 justify-content-center pt-3">
              <Link className="btn btn-dark btn-lg" to="/friends">
                Matches
              </Link>
              <Link className="btn btn-dark btn-lg" to="/swipe">
                Swipe
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Homepage;
