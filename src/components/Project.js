import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import './styles/Project.css'


const Project = ({ project }) => {
    return (
        <div className="projectCard">
            <img className="projectImage" src={project.image} alt="project1" />
            <div className="projectInfo">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer"><GithubOutlined 
                
                style={{ fontSize: "20px" }}
                />  View Project</a>
            </div>
        </div>
    )
}

export default Project;