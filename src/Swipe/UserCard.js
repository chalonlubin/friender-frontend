import { Link } from "react-router-dom";
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
  return(
    <>
      <CardBody>
        <CardImg src={user.image} ></CardImg>
        <CardTitle className="fw-bold text-center">{user.username}</CardTitle>
        <label htmlFor="interests">Interests</label>
        <CardText name="interests">{user.interests}</CardText>
        <label htmlFor="interests">Hobbies</label>
        <CardText name="interests">{user.hobbies}</CardText>
      </CardBody>
    </>
  )
}


export default UserCard;
