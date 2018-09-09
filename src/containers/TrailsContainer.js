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
import { ClipLoader } from 'react-spinners';

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
        <h3 className="content-header">Trails</h3>
          {this.props.isLoading ? 
          <div className="center">
            <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={this.props.isLoading}
            />
          </div>
        : <div className="content-body">
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
                href="#enter"
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
        }
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

function mapStateToProps(state) {
  const myData = [].concat(state.trails.trails).sort((a, b) => a.name > b.name);
  return { trails: myData,
  isLoading: state.trails.isLoading };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailsContainer);
