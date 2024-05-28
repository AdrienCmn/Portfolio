import { useState } from 'react';
import ProjectTemplate from '../../Components/Header/ProjectTemplate/ProjectTemplate';
import './Projects.scss'
import adminProject from "../../assets/admin-dashboard.png"
import Pico from "../../assets/PICO8.png"
import Dataviz from "../../assets/DATAVIZ.png"
import MemoNote from "../../assets/MEMONOTE.png"

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
            <ProjectTemplate projectName="Retro VideoGame" 
            projectDesc="We created a retro video game using Pico-8, inspired by Zelda. This is the first project we completed at school, and in my case, it's the very first development project I've ever worked on. It's the beginning of my new adventure."
            tags={tags}
            img={Pico}
            />

            <ProjectTemplate projectName="DataViz" 
            projectDesc='We completed a data visualization project where we chose to display water consumption in the municipality of Villeurbanne using an API, as well as a counter to track the consumption trends.'
            tags={tags}
            img={Dataviz}
            />

            <ProjectTemplate projectName="Browser Extension" 
            projectDesc='We developed a browser extension for Google Chrome; for this project, we chose to create a notepad.'
            tags={tags}
            img={MemoNote}
            />

            <div></div>
    </div>
    );        
};

export default Projects;