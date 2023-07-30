import React, { useContext } from "react";
import { v4 as uuid } from "uuid"; // Import uuid if not already imported
import UserCard from "../swipe/UserCard";
import userContext from "../user/userContext";

function Friends() {
  const currUser = useContext(userContext);
  const matches = currUser.matches;

  return (
    <div className="d-flex justify-content-center mt-3">
      {matches.length === 0 ? (
        <p className="friend-message fs-4">No friends yet 😅</p>
      ) : (
        matches.map((match) => <UserCard key={uuid()} user={match} />)
      )}
    </div>
  );
}

export default Friends;
