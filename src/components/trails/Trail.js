import React, { Component } from "react";
import ShowTrail from "./ShowTrail";
import EditTrail from "./EditTrail";

class Trail extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false
    };
  }

  onEditClick = () => {
    this.setState({
      showComponent: !this.state.showComponent
    });
  };

  hideEditComponent = () => {
    this.setState({
      showComponent: false
    });
  };

  render() {
    return (
      <div className="trail-container">
        {this.state.showComponent ? (
          <EditTrail
            trail={this.props.trail}
            update={this.props.update}
            showTrail={this.hideEditComponent}
            delete={this.props.delete}
          />
        ) : (
          <ShowTrail
            trail={this.props.trail}
            edit={this.onEditClick}
            delete={this.props.delete}
          />
        )}
      </div>
    );
  }
}

export default Trail;
