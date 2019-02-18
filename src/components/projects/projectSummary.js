import React, { Component } from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
    return(
        <div className="card project-summary z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;
