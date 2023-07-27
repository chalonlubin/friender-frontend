import "./Homepage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../User/userContext";

function Homepage() {
  const currUser = useContext(userContext);

  return (
    <div className="d-flex flex-column">
      <div className="container text-center text-white p-3">
        <h1 className="fw-bold">New Friends Are A Few Swipes Away 🎉</h1>
        {!currUser && (
          <div className="d-flex justify-content-center mt-3">
            <Link
              className="btn btn-funky-moon btn-rounded btn-lg"
              to="/signup"
            >
              JOIN THE PARTY
            </Link>
          </div>
        )}
      </div>
      <div className="container">
        <img
          className="border rounded img-fluid"
          src="./friends.jpg"
          alt="friends"
        />
      </div>
      <div className="d-flex justify-content-evenly pt-3">
        <button className="btn btn-light btn-md"> Signup </button>
        <button className="btn btn-light btn-md"> Login </button>
        <button className="btn btn-light btn-md"> Guest Login </button>
      </div>
    </div>
  );
}

export default Homepage;
