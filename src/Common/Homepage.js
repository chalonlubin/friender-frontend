import "./Homepage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../User/userContext";

function Homepage() {
  const currUser = useContext(userContext);

  return (
    <div className="homepage-container d-flex flex-column flex-grow-1">

      <div className="index-cta d-flex flex-column gap-3">
          <h1 className="fw-bold text-dark text-center">
              New Friends Are A Few Swipes Away 🎉
            </h1>
            <Link className="btn btn-dark btn-md" to="/signup">
                JOIN THE PARTY
              </Link>
      </div>



      {/* <div class="container pt-5">
        <div class="row">
          <div class="col-12 col-md-7 index-cta">

          <div class="col-12 col-md-5">
            <div class="d-flex just">

          </div>
          </div>
          </div>
        </div>
      </div> */}






      {/* <div className=" text-center">
        <h1 className="fw-bold text-dark">
          New Friends Are A Few Swipes Away 🎉 (.  ) (  .)
        </h1>
        {!currUser && <div className="d-flex justify-content-center m-3"></div>}
      </div>


      <div class="d-flex">
          <Link className="btn btn-dark btn-md" to="/signup">
            JOIN THE PARTY
          </Link>
          <button className="btn btn-md fw-bold text-black">
          Guest Login
        </button>
      </div> */}


        {/* <div className="d-flex"> */}
        {/* <button className="btn btn-outline-dark btn-md bg-white">

          Guest Login
        </button>
        <button className="btn btn-outline-dark btn-md bg-white">
          Login
        </button> */}
        {/* </div> */}




{/*
      <div className="d-flex flex-column justify-content-center gap-3">




      </div> */}
    </div>
  );
}

export default Homepage;
