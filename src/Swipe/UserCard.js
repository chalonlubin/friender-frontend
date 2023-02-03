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
  return (
    <div className="UserCard d-flex justify-content-center">
      <div className="card-body text-center mx-3 my-3">
        <img
          className="UserCard-img card-img-top"
          src={user.image}
          alt={user.image}
        />
        <h3 className="py-4">{user.username}</h3>
        <h5 className="card-title">{user.username}</h5>
        <label htmlFor="interests">Interests</label>
        <p className="card-text">{user.hobbies}</p>
        <label htmlFor="interests">Hobbies</label>
        <p className="card-text">{user.interests}</p>
        <p class="card-text">
          <small class="text-muted">{user.lastLoginAt}</small>
        </p>
      </div>
    </div>
  );
}

export default UserCard;
//     <>
//   <CardBody>
//     <CardImg className="UserCard" src={user.image} ></CardImg>
//     <CardTitle className="fw-bold text-center">{user.username}</CardTitle>
//     <label htmlFor="interests">Interests</label>
//     <CardText name="interests">{user.interests}</CardText>
//     <label htmlFor="interests">Hobbies</label>
//     <CardText name="interests">{user.hobbies}</CardText>
//   </CardBody>
// </>
