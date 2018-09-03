import React, { Component } from "react";
import Trail from "./Trail";

class Trails extends Component {
  
  renderTrails = () => {
    return this.props.trails.map(trail => {
      return <Trail key={trail.id} trail={trail} />;
    });
  };

  render() {
    return (
      <div>
        <h3>All Trails</h3>
        <ul>{this.renderTrails()}</ul>
      </div>
    );
  }
}

export default Trails;
