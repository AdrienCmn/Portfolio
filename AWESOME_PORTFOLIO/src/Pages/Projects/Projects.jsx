import { useState } from 'react';
import ProjectTemplate from '../../Components/Header/ProjectTemplate/ProjectTemplate';
import './Projects.scss'
import adminProject from "../../assets/admin-dashboard.png"

const Projects = () => {
    const [tags] = useState([
        "React",
        "CSS/SCSS",
        "NodeJS",
        "More.."
    ]);
        return (
        <div className="project-wrapper">

            <div></div>
            <ProjectTemplate projectName="Admin Dashboard" 
            projectDesc='Project description..'
            tags={tags}
            img={adminProject}
            />

            <ProjectTemplate projectName="Admin Dashboard" 
            projectDesc='Project description..'
            tags={tags}
            img={adminProject}
            />

            <ProjectTemplate projectName="Admin Dashboard" 
            projectDesc='Project description..'
            tags={tags}
            img={adminProject}
            />
            <div></div>
    </div>
    );        
};

export default Projects;