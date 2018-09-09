import React, { Component } from "react";

class TrailInput extends Component {
  constructor() {
    super();
    this.state = {
      trails: [],
      trail_id: "",
      user_id: "1",
      rating: "1",
      hasError: false
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    let message = "";
    if (this.state.trail_id !== "") {
      return (
        this.props.addTrailRating(
          this.state.user_id,
          this.state.trail_id,
          this.state.rating
        ),
        this.setState({
          hasError: false
        })
      );
    } else {
      this.setState({
        hasError: true
      });
      message = "";
    }
    console.log(message);
    return message;
  };

  render() {
    return (
      <div className="trail-input">
        <h3>Add a Trail Rating</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            <strong>Name: </strong>
          </label>
          <select name="trail_id" onChange={this.handleOnChange}>
            <option key="blank" placeholder="select a trail" value="" />
            {this.props.trails.map(trail => {
              return (
                <option key={trail.id} value={trail.id}>
                  {trail.name}
                </option>
              );
            })}
          </select>
          <label>
            <strong>Rating: </strong>
          </label>
          <select name="rating" onChange={this.handleOnChange}>
            <option key="1" value="1">
              1 Easiest
            </option>
            <option key="2" value="2">
              2
            </option>
            <option key="3" value="3">
              3 Average
            </option>
            <option key="4" value="4">
              4
            </option>
            <option key="5" value="5">
              5 Most Difficult
            </option>
          </select>
          <button type="submit">Add Trail Rating</button>
        </form>
        {this.state.hasError ? <h5>Please select a trail name.</h5> : null}
        <div id="enter" />
      </div>
    );
  }
}

export default TrailInput;
