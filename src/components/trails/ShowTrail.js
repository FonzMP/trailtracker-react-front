import React from "react";

const ShowTrail = ({trail, edit, delete: deleteAction }) => {
  return (
    <div className="trail">
      <p>
        <strong>Name: </strong>
        <span>{trail.name}</span>
      </p>
      <p>
        <strong>Length: </strong>
        <span>{trail.length}</span>
      </p>
      <p>
        <strong>Average Rating: </strong>
        <span>
          {Number(trail.average_rating) ===
            trail.average_rating &&
          trail.average_rating % 1 !== 0
            ? trail.average_rating.toFixed(1)
            : trail.average_rating}
        </span>
      </p>
      <button onClick={() => edit()}>Edit Trail</button>
      <button onClick={() => deleteAction(trail.id)}>
        Delete Trail
      </button>
    </div>
  );
}

export default ShowTrail;
