import { useContext } from "react";
import userContext from "../User/userContext";
import { v4 as uuid } from "uuid";

function Chums() {
  const currUser = useContext(userContext);
  const matches = currUser.matches;
  console.log("chums", matches);

  return (
    <>
      {matches.map((match) => (
        <div key={uuid()}>
          <img className="chumPic" src={match.image} alt={match.username} />
        </div>
      ))}
      {matches.length === 0 && <p>No chums.</p>}
    </>
  );
}

export default Chums;
