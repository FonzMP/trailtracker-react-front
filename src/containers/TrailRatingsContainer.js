import React, { Component } from "react";
import TrailRatings from "../components/trail_ratings/Ratings";
import TrailRatingInput from "../components/trail_ratings/TrailRatingInput"
import Navigation from './Navigation'
import { connect } from "react-redux";
import { fetchRatings, addTrailRating, deleteTrailRating, updateTrailRating } from "../actions/trailRatingsActions";
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
          <TrailRatingInput trails={this.props.trails} addTrailRating={this.props.addTrailRating}/>
          <TrailRatings ratings={this.props.trail_ratings} delete={this.props.deleteTrailRating} update={this.props.updateTrailRating} />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchRatings: () => dispatch(fetchRatings()),
  fetchTrails: () => dispatch(fetchTrails()) ,
  addTrailRating: (user_id, trail_id, rating) => dispatch(addTrailRating(user_id, trail_id, rating)),
  updateTrailRating: (id, name, length, rating) => dispatch(updateTrailRating(id, name, length, rating)),
  deleteTrailRating: (ratingId) => dispatch(deleteTrailRating(ratingId))
  }
}

function mapStateToProps({ trail_ratings, trails }) {
  const myData = [].concat(trail_ratings).sort((a, b) => a.trail.name > b.trail.name)
  return { 
    trail_ratings: myData,
    trails: trails 
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailRatingsContainer);
