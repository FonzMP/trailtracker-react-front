import React, { Component } from "react";
import Trails from "../components/trails/Trails";
import TrailInput from "../components/trails/TrailInput";
import Navigation from './Navigation'
import { connect } from "react-redux";
import { fetchTrails } from "../actions/trailActions";
import '../containers/style.css'

class TrailsContainer extends Component {

  constructor() {
    super()
    this.state = {
      trails: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/trails.json")
    .then(response => response.json())
    .then(trails => this.setState({ trails: trails }));
  };

  addTrail = (trail) => {
    this.setState({
      trails: this.state.trails.concat(trail)
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="content-body">
          <Trails trails={this.state.trails} />
        </div>
        <TrailInput trails={this.state.trails} addTrail={this.addTrail}/>
      </div>
    )
    
  }
}



function mapDispatchToProps(dispatch) {
  return { 
    fetchTrails: () => dispatch(fetchTrails())
  }
}

function mapStateToProps({ trails }) {
  return { trails: trails };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailsContainer);
