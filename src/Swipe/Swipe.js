import { useState, useContext } from "react";
import { Card } from "reactstrap";
import UserCard from "./UserCard";
import userContext from "../User/userContext";
import "./Swipe.css";

/**
 * Renders potential match cards
 *
 * context:
 * - userContext => potentials
 *
 * state:
 * - user: current user being displayed as potential match
 *
 * props:
 * - handleSwipe: function to handle swiping
 *
 */
function Swipe({ handleSwipe }) {
  const currUser = useContext(userContext);
  const potentials = currUser.potentials;

  const [user, setUser] = useState(
    potentials[Math.floor(Math.random() * potentials.length)]
  );

  /**  handleSwipe will -- update match table, refetch potential refetch matches */
  async function handleClick(evt) {
    evt.preventDefault();

    const matchStatus = evt.target.value;
    handleSwipe(user.username, matchStatus);
    setUser(potentials[Math.floor(Math.random() * potentials.length)]);



    // setTimeout(async function () {
    // }, 150);
    // clearInterval(timerId);

    // trigger post match -- false
  }
  // TODO: if no more potentials, spit out message
  // TODO: if match confettiiiiiiiiii!

  return (
    <div className="Swipe d-flex justify-content-center">
      {potentials.length > 0 && (
        <Card>
          <>
            <UserCard user={user} />
            <div className="d-flex justify-content-center">
              <button
                onClick={handleClick}
                value={false}
                className="addBtn btn btn-dark m-2 px-5"
              >
                ❌
              </button>
              <button
                onClick={handleClick}
                value={true}
                className="addBtn btn btn-outline-light m-2 px-5"
              >
                ❤️
              </button>
            </div>
          </>
        </Card>
      )}
      {potentials.length === 0 && (
        <h5 class="text-black">Nice work, sit back and wait for some new pals!</h5>
      )}
    </div>
  );
}

export default Swipe;
