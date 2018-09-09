import React, { Component } from "react";
import TrailRatings from "../components/trail_ratings/Ratings";
import TrailRatingInput from "../components/trail_ratings/TrailRatingInput";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import {
  fetchRatings,
  addTrailRating,
  deleteTrailRating,
  updateTrailRating
} from "../actions/trailRatingsActions";
import { fetchTrails } from "../actions/trailActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TrailRatingsContainer extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false
    };
  }
  componentDidMount() {
    this.props.fetchRatings();
    this.props.fetchTrails();
  }

  showAddComponent = () => {
    this.setState({
      showComponent: !this.state.showComponent
    });
  };

  render() {
    return (
      <div>
        <div className="content-body">
          <TrailRatings
            ratings={this.props.trail_ratings}
            delete={this.props.deleteTrailRating}
            update={this.props.updateTrailRating}
          />
          <div className="trail-input" id="rating-input">
            <div className="add-container">
              <FontAwesomeIcon icon="star-half-alt" />
              <a
                onClick={this.showAddComponent}
                className="input-link"
                href="#rating-input"
              >
                {this.state.showComponent ? "Hide Rating Form" : "Add A Rating"}
              </a>
              {this.state.showComponent ? (
                <TrailRatingInput
                  trails={this.props.trails}
                  addTrailRating={this.props.addTrailRating}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRatings: () => dispatch(fetchRatings()),
    fetchTrails: () => dispatch(fetchTrails()),
    addTrailRating: (user_id, trail_id, rating) =>
      dispatch(addTrailRating(user_id, trail_id, rating)),
    updateTrailRating: (id, name, length, rating) =>
      dispatch(updateTrailRating(id, name, length, rating)),
    deleteTrailRating: ratingId => dispatch(deleteTrailRating(ratingId))
  };
}

function mapStateToProps({ trail_ratings, trails }) {
  const ratingData = []
    .concat(trail_ratings)
    .sort((a, b) => a.trail.name > b.trail.name);
  const trailData = [].concat(trails).sort((a, b) => a.name > b.name);
  return {
    trail_ratings: ratingData,
    trails: trailData,
    loading: trail_ratings.loading
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailRatingsContainer);
