import React from "react";
import Logo from "@/components/common/logo";
import AllProjects from "@/components/projects/all-projects";
import projectInfo from "@/data/page-content/project-page-content.json";

export default function Projects() {
    return (
        <React.Fragment>
            <div className="projects-logo-container">
                <div className="projects-logo">
                    <Logo width={50}/>
                </div>
            </div>
            <div className="projects-container">
                <div className="title projects-title">
                    {projectInfo.title}
                </div>

                <div className="subtitle projects-subtitle">
                    {projectInfo.description}
                </div>

                <div className="projects-list">
                    <AllProjects/>
                </div>
            </div>
        </React.Fragment>
    )
}