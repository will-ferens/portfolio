import React, { Component } from 'react'
import ProjectItem from './ProjectItem';



class Projects extends Component {
  render() {
    return (
      <div className="page">
        <h1>Projects</h1>
        <ProjectItem />
      </div>
    )
  }
}


export default Projects