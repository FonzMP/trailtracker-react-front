import React, { Component } from "react";

class Rating extends Component {
  render() {
    return (
      <div>
        <li>
          <p>
            <strong>Name: </strong>
            {this.props.trail.trail.name}
          </p>
        </li>
      </div>
    );
  }
}

export default Rating;
