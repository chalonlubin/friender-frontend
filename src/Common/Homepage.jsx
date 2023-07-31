import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../user/userContext";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./Homepage.css"

function Homepage() {
  const currUser = useContext(userContext);

  return (
    <div className="homepage-container d-flex flex-column flex-grow-1 align-items-center justify-content-center">
      {!currUser && (
        <Container className="index-cta text-center">
          <h1 className="fw-bold text-dark">
            New Friends Are Moments Away 🎉
          </h1>

          <Link className="btn btn-warning btn-lg mt-3" to="/signup">
            JOIN THE PARTY
          </Link>
        </Container>
      )}
      {currUser && (
        <Container className="index-cta text-center">
          <h1 className="fw-bold text-dark">
            Glad to see you again {currUser.user.username}!
          </h1>
          <div className="d-flex gap-5 justify-content-center pt-3">
            <Button as={Link} to="/friends" variant="dark" size="lg">
              Matches
            </Button>
            <Button as={Link} to="/swipe" variant="dark" size="lg">
              Swipe
            </Button>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Homepage;
