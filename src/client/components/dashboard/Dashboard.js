/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Projectlist from '../projects/ProjectList';
import Notifications from './Notifications';
import WeatherCard from './WeatherCard/WeatherCard';

export class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m5">
            <Projectlist projects={projects} />
          </div>
          <div className="col s12 m2 offset-m1 notification">
            <Notifications />
          </div>
          <div className="col s12 m3 offset-m1 weathercard">
            <div className="title grey-text lighten-1">
              <h5>Weather Card</h5>
              <WeatherCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>
// console.log(state);
  ({ // createProject-->firestoreReducer-->firestore-->rootReducer-->store-->state-->projects
    projects: state.firestore.ordered.projects
    // projects: state.project.projects // here props of dashboard are set to store_state
    // which comes from reducer that initializes state
    // reducer_state --> store --> app_component --> mapStateToProps --> HOC(i.e connect) --> component_props
  });
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects' }]))(Dashboard);
