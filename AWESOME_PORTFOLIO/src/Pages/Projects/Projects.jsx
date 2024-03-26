import { useState } from 'react';
import ProjectTemplate from '../../Components/Header/ProjectTemplate/ProjectTemplate';
import './Projects.scss'
import adminProject from "../../assets/admin-dashboard.png"

const Projects = () => {
    const [tags] = useState(["React", "CSS/SCSS","NodeJS","More.."])
        return (
        <div className="project-wrapper">
            <ProjectTemplate projectName="Admin Dashboard" 
            projectDesc='Project description..'
            tags={tags}
            img={adminProject}/> 
            
    </div>
    );        
};

export default Projects;