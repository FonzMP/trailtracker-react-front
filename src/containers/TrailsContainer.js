import React, { Component } from "react";
import Trails from "../components/trails/Trails";
import Navigation from './Navigation'
import { connect } from "react-redux";
import { fetchTrails } from "../actions/trailActions";

class TrailsContainer extends Component {
  componentDidMount() {
    this.props.fetchTrails();
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="content-body">
          <Trails trails={this.props.trails} />
        </div>
      </div>
    )
    
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchTrails: () => dispatch(fetchTrails()) };
}

function mapStateToProps({ trails }) {
  return { trails: trails };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailsContainer);
