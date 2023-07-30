import React, { useContext } from "react";
import { v4 as uuid } from "uuid"; // Import uuid if not already imported
import UserCard from "../user/UserCard";
import userContext from "../user/userContext";

function Friends() {
  const currUser = useContext(userContext);
  const matches = currUser.matches;

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center flex-grow-1 p-2">
      {matches.length === 0 ? (
        <p className="fw-bold fs-3">No friends yet 😅</p>
      ) : (
        matches.map((match) => <UserCard key={uuid()} user={match} />)
      )}
    </div>
  );
}

export default Friends;
