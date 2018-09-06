import React, { Component } from "react";

class EditTrail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.trail.name,
      length: props.trail.length
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  updateTrail = (id, name, length) => {
    this.props.update(id, name, length),
    this.props.showTrail()
  }

  render() {
    console.log(this.state)
    return (
      <div className="trail">
        <p>
          <strong>Edit Name: </strong>
          <input onChange={this.handleOnChange} value={this.state.name} key={this.props.trail.id} id="name" ></input>
        </p>
        <p>
          <strong>Edit Length: </strong>
          <input onChange={this.handleOnChange} value={this.state.length} key={this.props.trail.id} id="length" ></input>
        </p>
        <p>
          <strong>Average Rating: </strong>
          <span>{this.props.trail.average_rating}</span>
        </p>
        <button onClick={() => this.updateTrail(this.props.trail.id, this.state.name, this.state.length)}>Save Trail</button>
        <button onClick={() => this.props.delete(this.props.trail.id)}>Delete Trail</button>
      </div>
    )
  }
}

export default EditTrail;
