import React, { Component } from "react";

class TrailInput extends Component {
  constructor() {
    super();
    this.state = {
      trails: [],
      trail_id: "0",
      user_id: "1",
      rating: "0"
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addTrailRating(this.state.user_id, this.state.trail_id, this.state.rating);
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
            {this.props.trails.map(trail => {
              return <option key={trail.id} value={trail.id} >{trail.name}</option>
            })}
          </select>
          <label>
            <strong>Rating: </strong>
          </label>
          <select name="rating" onChange={this.handleOnChange} >
            <option key='1' value='1' >1 Easiest</option>
            <option key='2' value='2' >2</option>
            <option key='3' value='3' >3 Average</option>
            <option key='4' value='4' >4</option>
            <option key='5' value='5' >5 Most Difficult</option>
          </select>
          <button type="submit">Add Trail Rating</button>
        </form>
        <div id="enter"></div>
      </div>
    );
  }
}

export default TrailInput;