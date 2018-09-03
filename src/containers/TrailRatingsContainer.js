import React, { Component } from "react";
import TrailRatings from "../components/trail_ratings/Ratings";
import { connect } from "react-redux";
import { fetchRatings } from "../actions/trailRatingsActions";

class TrailRatingsContainer extends Component {
  componentDidMount() {
    this.props.fetchRatings();
  }

  render() {
    return <TrailRatings ratings={this.props.trail_ratings} />;
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchRatings: () => dispatch(fetchRatings()) };
}

function mapStateToProps({ trail_ratings }) {
  return { trail_ratings: trail_ratings };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailRatingsContainer);
