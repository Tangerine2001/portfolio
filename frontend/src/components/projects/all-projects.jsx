import React from "react";

import Project from "./project";
import projectInfo from "@/data/page-content/project-page-content.json";


import "./styles/all-projects.css";

export default function AllProjects() {
    return (
        <div className="all-projects-container">
            {projectInfo.projects.map((project, index) => (
                <div className="all-projects-project" key={index}>
                    <Project
                        language={project.language}
                        title={project.title}
                        description={project.description}
                        linkText={project.linkText}
                        link={project.link}
                    />
                </div>
            ))}
        </div>
    );
};