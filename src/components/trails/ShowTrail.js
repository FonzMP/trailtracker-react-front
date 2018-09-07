import React, { Component } from "react";

class ShowTrail extends Component {
  render() {
    return (
      <div className="trail">
        <p>
          <strong>Name: </strong>
          <span>{this.props.trail.name}</span>
        </p>
        <p>
          <strong>Length: </strong>
          <span>{this.props.trail.length}</span>
        </p>
        <p>
          <strong>Average Rating: </strong>
          <span>
            {Number(this.props.trail.average_rating) ===
              this.props.trail.average_rating &&
            this.props.trail.average_rating % 1 !== 0
              ? this.props.trail.average_rating.toFixed(1)
              : this.props.trail.average_rating}
          </span>
        </p>
        <button onClick={() => this.props.edit()}>Edit Trail</button>
        <button onClick={() => this.props.delete(this.props.trail.id)}>
          Delete Trail
        </button>
      </div>
    );
  }
}

export default ShowTrail;
