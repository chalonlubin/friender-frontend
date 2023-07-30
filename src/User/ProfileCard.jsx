import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "../swipe/UserCard";
import userContext from "./userContext";
import FrienderApi from "../helpers/api";

function ProfileCard() {
  const { user } = useContext(userContext);
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const updatedUserData = await FrienderApi.getUser(user.username);
      setUserData(updatedUserData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <UserCard user={userData} />
      <div className="d-flex justify-content-center align-items-center p-3">
        <Link to={`/profile/edit`} className="btn btn-dark btn-lg">
          Edit Profile
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
