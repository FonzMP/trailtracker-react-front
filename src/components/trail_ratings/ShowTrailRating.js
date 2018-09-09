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

// class ShowTrailRating extends Component {

//   render() {
//     return (
//       <div className="trail">
//           <p>
//             <strong>Name: </strong>
//             <span>{this.props.rating.trail.name}</span>
//           </p>
//           <p>
//             <strong>Length: </strong>
//             <span>{this.props.rating.trail.length}</span>
//           </p>
//           <p>
//             <strong>Rating: </strong>
//             <span>{this.props.rating.rating}</span>
//           </p>
//           <button onClick={() => this.props.edit()}>Edit Rating</button>
//           <button onClick={() => this.props.delete(this.props.rating.id)}>Delete Rating</button>
//       </div>
//     )
//   }
// }

export default ShowTrailRating;
