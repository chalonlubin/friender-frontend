// ProfileCard.js
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "reactstrap";
import UserCard from "../Swipe/UserCard";
import userContext from "./userContext";

function ProfileCard() {
  const { user } = useContext(userContext);

  return (
    <Col lg="3" className="d-flex justify-content-center align-items-center"> {/* Center the card both horizontally and vertically */}
      <Card>
        <UserCard user={user}/>
        <Link to={`/profile/edit`}>
          <button className="addBtn btn btn-dark m-1">Edit Profile</button>
        </Link>
      </Card>
    </Col>
  );
}

export default ProfileCard;
