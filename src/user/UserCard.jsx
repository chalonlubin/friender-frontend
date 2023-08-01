import "./UserCard.css";

/**
 * Renders a user card filled with their bio information and image.
 *
 * Props:
 *  - user: { username, hobbies, interests, image, lastLoginAt }
 *
 */
function UserCard({ user }) {
  // Convert lastLoginAt to a formatted date string
  let date = new Date(user.lastLoginAt).toLocaleString();

  return (
    <div className="user-card m-3 p-3 border border-dark rounded bg-white">
      <div className="user-card-body text-center">
        <img
          className="user-card-img card-img-top"
          src={user.image}
          alt={user.username}
        />
        <h2 className="fw-bold mt-2">{user.username}</h2>

        <div>
          <h3>Interests</h3>
          <p>{user.interests}</p>
        </div>

        <div>
          <h3>Hobbies</h3>
          <p>{user.hobbies}</p>
        </div>

        <div className="user-card-last-login">
          <p className="text-success">Last Login: {date.toString()}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
