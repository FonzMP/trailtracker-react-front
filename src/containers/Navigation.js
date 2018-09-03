import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return(
      <div>
        <header className="App-header">
          <h1 className="App-title">TrailTracker MC</h1>
        </header>
        <div className="navigation-div">
          <div className="navigation-link"><a href="/">Home</a></div>
          <div className="navigation-link"><a href="/trails">Trails</a></div>
          <div className="navigation-link"><a href="/trail-ratings">Trail Ratings</a></div>
        </div>
      </div>
    )
  }

}

export default Navigation