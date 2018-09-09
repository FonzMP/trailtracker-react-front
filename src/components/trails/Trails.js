import React, { Component } from "react";
import Trail from "./Trail";

class Trails extends Component {
  
  renderTrails = () => {
    return this.props.trails.map(trail => {
      return <Trail key={trail.id} trail={trail} delete={this.props.delete} update={this.props.update} />;
    });
  };

  render() {
    return (
      <div>
        <div className="trails">{this.renderTrails()}</div>
      </div>
    );
  }
}

export default Trails;
