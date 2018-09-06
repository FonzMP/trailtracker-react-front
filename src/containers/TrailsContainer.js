import React, { Component } from "react";
import Trails from "../components/trails/Trails";
import TrailInput from "../components/trails/TrailInput";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { fetchTrails, addTrail, deleteTrail, updateTrail } from "../actions/trailActions";
import "../containers/style.css";

class TrailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      trails: []
    };
  }

  componentDidMount() {
    this.props.fetchTrails();
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="content-body">
          <TrailInput trails={this.props.trails} addTrail={this.props.addTrail} />
          <Trails trails={this.props.trails} delete={this.props.deleteTrail} update={this.props.updateTrail} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrails: () => dispatch(fetchTrails()),
    addTrail: (name, length) => dispatch(addTrail(name, length)),
    updateTrail: (id, name, length) => dispatch(updateTrail(id, name, length)),
    deleteTrail: (trailId) => dispatch(deleteTrail(trailId))
  };
}

function mapStateToProps({ trails }) {

  const myData = [].concat(trails)
    .sort((a, b) => a.name > b.name)
  return { trails: myData };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailsContainer);
