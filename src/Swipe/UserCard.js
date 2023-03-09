import { Link } from "react-router-dom";
import "./UserCard.css";
import {
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  CardImg,
} from "reactstrap";

/**
 *
 * Props
 *  - user - { username, hobbies, interests, image }
 * @param {
 * } param0
 * @returns
 */
function UserCard({ user }) {

  let date = new Date(`${user.lastLoginAt}`);
  date = date.toLocaleString();


  return (
    <div className="UserCard d-flex justify-content-center">
      <div className="card-body text-center mx-3 my-3">
        <img
          className="UserCard-img card-img-top"
          src={user.image}
          alt={user.image}
        />
        <p className="card-name py-2">{user.username}</p>
        <label htmlFor="interests">Interests</label>
        <p className="card-text">{user.interests}</p>
        <label htmlFor="interests">Hobbies</label>
        <p className="card-text">{user.hobbies}</p>
        <p className="card-text">
          {/*TODO: make last login look a bit friendlier?*/}
          <small className="text-muted">Last Login @ {date.toString()}</small>
        </p>
      </div>
    </div>
  );
}

export default UserCard;
