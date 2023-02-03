import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import UserCard from "../Swipe/UserCard";
import userContext from "./userContext";

function ProfileCard() {
  const { user } = useContext(userContext);
  console.log("user", user)

  return (
    <div className="Profile d-flex justify-content-center">
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
// {/* <div className="Profile-Card card text-dark bg-light mt-4 mx-3 mb-3 p-3">
// <img
//   className="ChumCard-image card-img-top"
//   src={user.image}
//   alt={user.username}
// />
// <h5 className="card-title">{user.username}</h5>
// <label htmlFor="interests">Interests</label>
// <p className="card-text">{user.hobbies}</p>
// <label htmlFor="interests">Hobbies</label>
// <p className="card-text">{user.interests}</p>
// <p className="card-text"><small className="text-muted">{user.lastLoginAt}</small></p> */}
// </div>
