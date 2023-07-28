import { useState, useContext } from "react";

import UserCard from "./UserCard";
import userContext from "../User/userContext";

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
    console.log("potentials", currUser.potentials);
  }

  // TODO: if match confettiiiiiiiiii!

  return (
    <div className="d-flex justify-content-center pt-5">
      {potentials.length > 0 && (
        <div className="border shadow bg-white">
          <UserCard user={user} />
          <div className="d-flex justify-content-center ">
            <button
              onClick={handleClick}
              value={false}
              className="btn btn-dark m-2 px-5"
            >
              ❌
            </button>
            <button
              onClick={handleClick}
              value={true}
              className="btn btn-outline-light m-2 px-5"
            >
              ❤️
            </button>
          </div>
        </div>
      )}
      {potentials.length === 0 && (
        <p className="text-black fw-bold fs-2 p-3 text-center">
          That's all for now, check later for some new pals!
        </p>
      )}
    </div>
  );
}

export default Swipe;
