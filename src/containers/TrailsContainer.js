import React, { Component } from "react";
import Trails from "../components/trails/Trails";
import TrailInput from "../components/trails/TrailInput";
import { connect } from "react-redux";
import {
  fetchTrails,
  addTrail,
  deleteTrail,
  updateTrail
} from "../actions/trailActions";
import "../containers/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TrailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      trails: [],
      showComponent: false
    };
  }

  componentDidMount() {
    this.props.fetchTrails();
  }

  showAddComponent = () => {
    this.setState({
      showComponent: !this.state.showComponent
    });
  };

  render() {
    return (
      <div>
        <div className="content-body">
          <Trails
            trails={this.props.trails}
            delete={this.props.deleteTrail}
            update={this.props.updateTrail}
          />
          <div className="trail-input">
            <FontAwesomeIcon icon="map-marked" />
            <a
              onClick={this.showAddComponent}
              className="input-link"
              href="#input"
            >
              {this.state.showComponent ? " Hide Trail Form" : " Add A Trail"}
            </a>
            {this.state.showComponent ? (
              <TrailInput
                trails={this.props.trails}
                addTrail={this.props.addTrail}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrails: () => dispatch(fetchTrails()),
    addTrail: (name, length) => dispatch(addTrail(name, length)),
    updateTrail: (id, name, length) => dispatch(updateTrail(id, name, length)),
    deleteTrail: trailId => dispatch(deleteTrail(trailId))
  };
}

function mapStateToProps({ trails }) {
  const myData = [].concat(trails).sort((a, b) => a.name > b.name);
  return { trails: myData };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailsContainer);
