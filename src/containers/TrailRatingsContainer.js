import React, { Component } from "react";
import TrailRatings from "../components/trail_ratings/Ratings";
import Navigation from './Navigation'
import { connect } from "react-redux";
import { fetchRatings } from "../actions/trailRatingsActions";

class TrailRatingsContainer extends Component {
  componentDidMount() {
    this.props.fetchRatings();
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="content-body">
          <TrailRatings ratings={this.props.trail_ratings} />
        </div>
      </div>
    )
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
