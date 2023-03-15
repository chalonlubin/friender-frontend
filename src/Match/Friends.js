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
        // <div key={uuid()}>
        //   <img className="chumPic" src={match.image} alt={match.username} />
        // </div>
      ))}
      {matches.length === 0 && <h5 className="ChumMsg press2p">No matches.</h5>}
    </>
  );
}

export default Friends;
