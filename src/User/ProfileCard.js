import { useContext } from "react";
import userContext from "./userContext";

function ProfileCard() {
  const { user } = useContext(userContext);
  console.log("user", user)

  return (
    <div className="Profile d-flex justify-content-center">
      <div className="Profile-Card card text-dark bg-light mx-3 mb-3">
        <img
          className="ChumCard-image card-img-top"
          src={user.image}
          alt={user.username}
        />
        <h5 className="card-title">{user.username}</h5>
        <label htmlFor="interests">Interests</label>
        <p className="card-text">{user.hobbies}</p>
        <label htmlFor="interests">Hobbies</label>
        <p className="card-text">{user.interests}</p>
        <p class="card-text"><small class="text-muted">{user.lastLoginAt}</small></p>
      </div>
    </div>
  );
}

export default ProfileCard;
