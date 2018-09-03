import React, { Component } from "react";

class Trail extends Component {
  render() {
    return (
      <div>
        <li>
          <p>
            <strong>Name: </strong>
            {this.props.trail.name}
          </p>
          <p>
            <strong>Length: </strong>
            {this.props.trail.length}
          </p>
          <p>
            <strong>Average Rating: </strong>
            {this.props.trail.average_rating}
          </p>
          <p>
            <strong>Contributed by: </strong>
            {this.props.trail.created_by_username}
          </p>
        </li>
      </div>
    );
  }
}

export default Trail;
