import React, { Component } from "react";
import '../../containers/style.css'

class Rating extends Component {
  render() {
    return (
      <div className="trail">
          <p>
            <strong>Name: </strong>
            <span>{this.props.rating.trail.name}</span>
          </p>
          <p>
            <strong>Length: </strong>
            <span>{this.props.rating.trail.length}</span>
          </p>
          <p>
            <strong>Rating: </strong>
            <span>{this.props.rating.rating}</span>
          </p>
          <p>
            <strong>Rated by: </strong>
            <span>{this.props.rating.user.username}</span>
          </p>
      </div>
    );
  }
}

export default Rating;
