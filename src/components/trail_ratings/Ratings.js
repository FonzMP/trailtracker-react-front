import React, { Component } from "react";
import TrailRating from "./Rating";

class Ratings extends Component {
  renderRatings = () => {
    return this.props.ratings.map(trail_rating => {
      return <TrailRating key={trail_rating.id} rating={trail_rating} delete={this.props.delete} />;
    });
  };

  render() {
    return (
      <div>
        <h3 className="content-header">Trail Ratings</h3>
        <div className="trails">{this.renderRatings()}</div>
      </div>
    );
  }
}

export default Ratings;
