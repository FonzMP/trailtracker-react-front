import React, { Component } from "react";
import TrailRating from "./Ratings";

class Ratings extends Component {
  renderRatings = () => {
    return this.props.ratings.map(trail_rating => {
      return <TrailRating key={trail_rating.id} trail={trail_rating} />;
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>All Ratings</h3>
        {this.renderRatings()}
      </div>
    );
  }
}

export default Ratings;
