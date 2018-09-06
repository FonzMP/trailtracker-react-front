import React, { Component } from "react";
import ShowTrailRating from './ShowTrailRating'
import EditTrailRating from './EditTrailRating'

class Rating extends Component {

  constructor() {
    super();
    this.state = {
      showComponent: false
    };
  }

  onEditClick = () => {
    this.setState({
      showComponent: !this.state.showComponent,
    });
  }

  hideEditComponent = () => {
    this.setState({
      showComponent: false
    })
  }
  
  render() {
    return (
      <div className="trail-container">
        {this.state.showComponent ? 
        <EditTrailRating rating={this.props.rating} update={this.props.update} showTrailRating={this.hideEditComponent} delete={this.props.delete} /> :
        <ShowTrailRating rating={this.props.rating} edit={this.onEditClick} delete={this.props.delete} />
        }
      </div>
    )
  }
}

export default Rating;
