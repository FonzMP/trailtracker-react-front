import React, { Component } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarked, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarked, faStarHalfAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content-body">
          <div id="main-page">
            <img
              src={require("./assets/img/baja_beach.jpg")}
              id="baja"
              className="inline"
              alt="dirt bike on beach"
            />
            <p className="inline">
              TrailTracker is an application designed to provide ease of mind
              for the solo, and/or safety concious rider in all of us. Our focus
              is to provide an application that assists in keeping our users
              safe while adventuring alone, in small groups, or with friends in
              the great outdoors.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
