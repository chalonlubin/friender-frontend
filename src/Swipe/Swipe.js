import { useState, useContext } from "react";
import { Card } from "reactstrap";
import UserCard from "./UserCard";
import userContext from "../User/userContext";

/**
 * potentials -- [{user}]
 * @returns
 */
function Swipe({ handleSwipe }) {
  const currUser = useContext(userContext);
  const potentials = currUser.potentials;
  // const initialState =

  const [user, setUser] = useState(
    potentials[Math.floor(Math.random() * potentials.length)]
  );

  console.log("potentials", potentials);

  // handleSwipe will -- update match table, refetch potential refetch matches
  async function handleClick(evt) {
    evt.preventDefault();
    // trigger post match -- false
    const matchStatus = evt.target.value;
    await handleSwipe(user.username, matchStatus);
    setUser(potentials[Math.floor(Math.random() * potentials.length)]);
  }
  // TODO: if no more potentials, spit out message
  // TODO: if match confettiiiiiiiiii!

  return (
    <section className="col-md-4">
      <Card>
        {potentials.length > 0 ? (
          <>
            <UserCard user={user} />
            <div className="d-flex justify-content-center">
              <button
                onClick={handleClick}
                value={false}
                className="addBtn btn btn-secondary m-1"
              >
                Dislike
              </button>
              <button
                onClick={handleClick}
                value={true}
                className="addBtn btn btn-secondary m-1"
              >
                Like
              </button>
            </div>
          </>
        ) : (
          <p>No more chum</p>
        )}
      </Card>
    </section>
  );
}

export default Swipe;
