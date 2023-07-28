import { useContext } from "react";
import userContext from "../User/userContext";
import { v4 as uuid } from "uuid";
import FriendCard from "./FriendCard";

function Friends() {
  const currUser = useContext(userContext);
  const matches = currUser.matches;

  return (
    <>
      {matches.map((match) => (
        <FriendCard key={uuid()} match={match} />
      ))}
      {matches.length === 0 && (
        <p className="friend-message fs-4">No friends yet 😅</p>
      )}
    </>
  );
}

export default Friends;
