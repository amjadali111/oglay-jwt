import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom';


const ProjectList = ({projects}) => { // map is not a function due invalid destructuring curly braces were not used 
    return (
        <div className="projects-list section">
            <h5 className="title grey-text lighten-1">Projects List</h5>
            { 
            projects && projects.map(project =>{
                    return(
                        <Link to= {'/project/'+ project.id} key={project.id}>
                            <ProjectSummary project = {project} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ProjectList
