import React, { Component } from "react";

class EditTrail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.trail.name,
      length: props.trail.length
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  updateTrail = (id, name, length) => {
    this.props.update(id, name, length);
    this.props.showTrail();
  };

  render() {
    return (
      <div className="trail">
        <form
          onSubmit={() =>
            this.updateTrail(
              this.props.trail.id,
              this.state.name,
              this.state.length
            )
          }
        >
          <p>
            <strong>Edit Name: </strong>
            <input
              onChange={this.handleOnChange}
              value={this.state.name}
              key={this.props.trail.id}
              id="name"
              required
            />
          </p>
          <p>
            <strong>Edit Length: </strong>
            <input
              type="number"
              onChange={this.handleOnChange}
              value={this.state.length}
              key={this.props.trail.id}
              id="length"
              min="0.1"
              max="50"
              step="0.1"
              required
            />
          </p>
          <p>
            <strong>Average Rating: </strong>
            <span>{this.props.trail.average_rating}</span>
          </p>
          <button type="submit">Save Trail</button>
          <button onClick={() => this.props.delete(this.props.trail.id)}>
            Delete Trail
          </button>
        </form>
        {this.state.hasError ? (
          <h5>There seems to be an error. Please try again.</h5>
        ) : null}
      </div>
    );
  }
}

export default EditTrail;
