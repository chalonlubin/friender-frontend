import "./FriendCard.css";

function ChumCard({ match }) {
  return (
    <div className="d-flex justify-content-start card-deck">
      <div className="ChumCard card mx-3 my-3">
        <div className="card-body mx-5">
          <img
            className="ChumCard-image img-fluid"
            src={match.image}
            alt={match.username}
          />
          <h4>{match.username}</h4>
        </div>
      </div>
    </div>
  );
}
export default ChumCard;
