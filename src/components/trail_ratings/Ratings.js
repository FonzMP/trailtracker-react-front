import React, { Component } from "react";
import TrailRating from "./Rating";

class Ratings extends Component {

  renderRatings = () => {
    return this.props.ratings.map(trail_rating => {
      return <TrailRating key={trail_rating.id} rating={trail_rating} />;
   });
  };

  render() {
    return (
      <div>
        <h3>All Ratings</h3>
        <ul>{this.renderRatings()}</ul>
      </div>
    );
  }
}

export default Ratings;
