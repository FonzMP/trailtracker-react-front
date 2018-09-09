import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">TrailTracker MC</h1>
        </header>
        <div className="navigation-div">
          <div className="navigation-link">
            <Link to="/">Home</Link>
          </div>
          <div className="navigation-link">
            <Link to="/trails">Trails</Link>
          </div>
          <div className="navigation-link">
            <Link to="/trail-ratings">Trail Ratings</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
