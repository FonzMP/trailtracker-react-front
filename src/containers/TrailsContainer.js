import React, { Component } from "react";
import Trails from "../components/trails/Trails";
import TrailInput from "../components/trails/TrailInput";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { fetchTrails, addTrail } from "../actions/trailActions";
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

  // addTrail = trail => {
  //   this.setState({
  //     trails: this.props.trails.concat(trail)
  //   });
  // };

  render() {
    return (
      <div>
        <Navigation />
        <div className="content-body">
          <Trails trails={this.props.trails} />
        </div>
        <TrailInput trails={this.props.trails} addTrail={this.props.addTrail} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrails: () => dispatch(fetchTrails()),
    addTrail: () => dispatch(addTrail())
  };
}

function mapStateToProps({ trails }) {
  return { trails: trails };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailsContainer);
