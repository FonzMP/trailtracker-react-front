import React, { Component } from "react";

class Rating extends Component {
  render() {
    return (
      <div className="trail">
          <p>
            <strong>Name: </strong>
            {this.props.rating.trail.name}
          </p>
          <p>
            <strong>Length: </strong>
            {this.props.rating.trail.length}
          </p>
          <p>
            <strong>Rating: </strong>
            {this.props.rating.rating}
          </p>
          <p>
            <strong>Rated by: </strong>
            {this.props.rating.user.username}
          </p>
      </div>
    );
  }
}

export default Rating;
