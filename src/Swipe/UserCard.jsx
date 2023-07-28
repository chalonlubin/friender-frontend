import "./UserCard.css";

/**
 * Renders a user card filled with their bio information and image.
 *
 * Props:
 *  - user: { username, hobbies, interests, image, lastLoginAt }
 *
 */
function UserCard({ user }) {
  let date = new Date(`${user.lastLoginAt}`);
  date = date.toLocaleString();

  return (
    <div className="user-card m-3 p-3  bg-white">
      <div className="user-card-body text-center">
        <img
          className="user-card-img card-img-top"
          src={user.image}
          alt={user.image}
        />
        <h2 className="user-card-name fw-bold mt-2">{user.username}</h2>

        <div className="user-card-interests">
          <h3>Interests</h3>
          <p className="user-card-text">{user.interests}</p>
        </div>

        <div className="user-card-hobbies">
          <h3>Hobbies</h3>
          <p className="user-card-text">{user.hobbies}</p>
        </div>

        <div className="user-card-last-login">
          <p className="text-success">Last Login: {date.toString()}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
