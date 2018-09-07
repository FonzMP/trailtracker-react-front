import React, { Component } from "react";
import "./App.css";
import Navigation from "./containers/Navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarked, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarked, faStarHalfAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <p>
          TrailTracker is an application designed to provide ease of mind for
          the solo, and/or safety concious rider in all of us. Our focus is to
          provide an application that assists in keeping our users safe while
          adventuring alone, in small groups, or with friends in the great
          outdoors.
        </p>
      </div>
    );
  }
}

export default App;
