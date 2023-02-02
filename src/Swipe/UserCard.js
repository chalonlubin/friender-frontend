import { Link } from "react-router-dom";
import {
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
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
      <CardTitle className="fw-bold text-center">Menu</CardTitle>
      <CardText>Click a menu item for further details.</CardText>
      {/* <ListGroup>
        {items.map((menuItem) => (
          <Link to={`/${category}/${menuItem.id}`} key={menuItem.id}>
            <ListGroupItem>{menuItem.name}</ListGroupItem>
          </Link>
        ))}
      </ListGroup> */}
      </CardBody>
    </>
  )
}


export default UserCard;
