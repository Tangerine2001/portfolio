import React from "react";

import Project from "./project";
import PROJECTINFO from "@/data/projects";


import "./styles/all-projects.css";

export default function AllProjects() {
    return (
        <div className="all-projects-container">
            {PROJECTINFO.projects.map((project, index) => (
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