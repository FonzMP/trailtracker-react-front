import React, { Component } from "react";
import Trail from "./Trail";

class Trails extends Component {
  
  renderTrails = () => {
    return this.props.trails.map(trail => {
      return <Trail key={trail.id} trail={trail} delete={this.props.delete}/>;
    });
  };

  render() {
    return (
      <div>
        <h3 className="content-header">Trails</h3>
        <div className="trails">{this.renderTrails()}</div>
      </div>
    );
  }
}

export default Trails;
