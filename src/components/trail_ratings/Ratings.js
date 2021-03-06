import React, { Component } from "react";
import TrailRating from "./Rating";

class Ratings extends Component {
  renderRatings = () => {
    return this.props.ratings.map(trail_rating => {
      return (
        <TrailRating
          key={trail_rating.id}
          rating={trail_rating}
          delete={this.props.delete}
          update={this.props.update}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <div className="trails">{this.renderRatings()}</div>
      </div>
    );
  }
}

export default Ratings;
