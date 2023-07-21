import "./Homepage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../User/userContext";

function Homepage() {
  const currUser = useContext(userContext);

  return (
    <section className="Homepage">
      <div className="container text-center text-white">
        <h1 className="Homepage-title">Your best friend is just around the corner 🎆</h1>
        <h2>Meet locals with similar interests</h2>
        {!currUser && (
          <div className="d-flex justify-content-center mt-3">
            <Link className="btn btn-funky-moon btn-rounded btn-lg" to="/signup">
              JOIN THE PARTY
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Homepage;
