import React, { Component } from "react";

class EditTrailRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
          <select id="rating" onChange={this.handleOnChange} >
            <option key='1' value='1' >1 Easiest</option>
            <option key='2' value='2' >2</option>
            <option key='3' value='3' >3 Average</option>
            <option key='4' value='4' >4</option>
            <option key='5' value='5' >5 Most Difficult</option>
          </select>
        </p>
        <button onClick={() => this.updateTrailRating(this.props.rating.id, this.props.rating.name, this.props.rating.length, this.state.rating)}>Save Trail Rating</button>
        <button onClick={() => this.props.delete(this.props.rating.id)}>Delete Trail Rating</button>
      </div>
    )
  }
}

export default EditTrailRating;
