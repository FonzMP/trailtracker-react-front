import React, { Component } from "react";

class Trail extends Component {
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
          <span>{this.props.trail.average_rating}</span>
        </p>
        <p>
          <strong>Contributed by: </strong>
          <span>{this.props.trail.created_by_username}</span>
        </p>
      </div>
    );
  }
}

export default Trail;
