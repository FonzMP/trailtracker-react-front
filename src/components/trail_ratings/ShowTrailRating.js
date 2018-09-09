import React from "react";

const ShowTrailRating = ({ rating, edit, delete: deleteAction }) => {
  return (
    <div className="trail">
      <p>
        <strong>Name: </strong>
        <span>{rating.trail.name}</span>
      </p>
      <p>
        <strong>Length: </strong>
        <span>{rating.trail.length}</span>
      </p>
      <p>
        <strong>Rating: </strong>
        <span>{rating.rating}</span>
      </p>
      <button onClick={() => edit()}>Edit Rating</button>
      <button onClick={() => deleteAction(rating.id)}>Delete Rating</button>
    </div>
  );
};

export default ShowTrailRating;
