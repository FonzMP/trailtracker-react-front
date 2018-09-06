import React, { Component } from "react";

class EditTrailRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.rating.name,
      length: props.rating.length,
      rating: props.rating.rating
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  updateTrailRating = (id, name, length, rating) => {
    this.props.update(id, name, length, rating),
    this.props.showTrailRating()
  }

  render() {
    return (
      <div className="trail">
        <p>
            <strong>Name: </strong>
            <span>{this.props.rating.trail.name}</span>
          </p>
          <p>
            <strong>Length: </strong>
            <span>{this.props.rating.trail.length}</span>
          </p>
        <p>
          <strong>Rating: </strong>
          <input onChange={this.handleOnChange} value={this.state.rating} id="rating" ></input>
        </p>
        <button onClick={() => this.updateTrailRating(this.props.rating.id, this.state.name, this.state.length, this.state.rating)}>Save Trail Rating</button>
        <button onClick={() => this.props.delete(this.props.rating.id)}>Delete Trail Rating</button>
      </div>
    )
  }
}

export default EditTrailRating;
