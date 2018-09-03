import React, { Component } from "react";
import Trails from "../components/trails/Trails";
import { connect } from "react-redux";
import { fetchTrails } from "../actions/trailActions";

class TrailsContainer extends Component {
  componentDidMount() {
    this.props.fetchTrails();
  }

  render() {
    console.log(this.props.trails);
    return <Trails trails={this.props.trails} />;
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchTrails: () => dispatch(fetchTrails()) };
}

function mapStateToProps(state) {
  return { trails: state.trails };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailsContainer);
