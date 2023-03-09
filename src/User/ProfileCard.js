import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import UserCard from "../Swipe/UserCard";
import userContext from "./userContext";

function ProfileCard() {
  const { user } = useContext(userContext);
  console.log("user", user)

  return (
    <div className="Profile d-flex justify-content-center mt-4">
      <Card>
        <UserCard user={user}/>
        <Link to={`/profile/edit`}>
          <button className="addBtn btn btn-dark m-1">Edit Profile</button>
        </Link>
      </Card>
    </div>
  );
}

export default ProfileCard;
