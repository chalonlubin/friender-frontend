import { useContext } from "react";
import { Link } from "react-router-dom";
import UserCard from "../Swipe/UserCard";
import userContext from "./userContext";

function ProfileCard() {
  const { user } = useContext(userContext);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <UserCard user={user} />
      <div className="d-flex justify-content-center align-items-center p-3">
        <Link to={`/profile/edit`} className="btn btn-dark btn-lg ">
          Edit Profile
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
