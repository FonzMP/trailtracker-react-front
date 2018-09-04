import React, { Component } from "react";
import TrailRatings from "../components/trail_ratings/Ratings";
import TrailRatingInput from "../components/trail_ratings/TrailRatingInput"
import Navigation from './Navigation'
import { connect } from "react-redux";
import { fetchRatings } from "../actions/trailRatingsActions";
import { fetchTrails } from "../actions/trailActions";

class TrailRatingsContainer extends Component {
  componentDidMount() {
    this.props.fetchRatings();
    this.props.fetchTrails();
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="content-body">
          <TrailRatings ratings={this.props.trail_ratings} />
          <TrailRatingInput trails={this.props.trails} />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchRatings: () => dispatch(fetchRatings()),
  fetchTrails: () => dispatch(fetchTrails()) };
}

function mapStateToProps({ trail_ratings, trails }) {
  return { 
    trail_ratings: trail_ratings,
    trails: trails 
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailRatingsContainer);
