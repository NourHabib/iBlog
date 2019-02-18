import React, { Component } from 'react';
import ProjectSummary from './projectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
        <h5 className="grey-text text-darken-3">Recent Projects</h5>
        { projects && projects.map(project => {
            return <Link to={'/project/'+ project.id} key={project.id}><ProjectSummary project={project} /></Link>
        })}
        </div>
    )
}


export default ProjectList;