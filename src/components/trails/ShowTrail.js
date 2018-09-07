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
          <span>{this.props.trail.average_rating.toFixed(1)}</span>
        </p>
        <button onClick={() => this.props.edit()}>Edit Trail</button>
        <button onClick={() => this.props.delete(this.props.trail.id)}>Delete Trail</button>
      </div>
    );
  }
}

export default ShowTrail;
