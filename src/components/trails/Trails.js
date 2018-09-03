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
        <div className="trails">{this.renderTrails()}</div>
      </div>
    );
  }
}

export default Trails;
