import { useState } from "react";
import {
  Card
} from "reactstrap";
import UserCard from "./UserCard";

/**
 * potentials -- [{user}]
 * @returns
 */
function Swipe({ potentials, handleSwipe }) {
  const [user, setUser] = useState(potentials[Math.floor(Math.random() * potentials.length)])

  function getUser() {
    const user = potentials[Math.floor(Math.random() * potentials.length)]
    setUser(user);
  }

  async function handleClick(evt) {
    // trigger post match -- false
    const matchStatus = evt.target.value;
    // handleSwipe will -- update match table, refetch potential refetch matches
    await handleSwipe(user.username, matchStatus)

    setUser(potentials[Math.floor(Math.random() * potentials.length)])
  }
  // TODO: if no more potentials, spit out message

  return (
    <section className="col-md-4">
      <Card>
        <UserCard user={user}/>
        <div className="d-flex ">
          <button onClick={handleClick} value={false} className="addBtn btn btn-secondary m-1">Dislike</button>
          <button onClick={handleClick} value={true} className="addBtn btn btn-secondary m-1">Like</button>
        </div>
      </Card>
    </section>
  );
}

export default Swipe;
