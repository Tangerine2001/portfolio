import React from "react";
import Logo from "@/components/common/logo";
import AllProjects from "@/components/projects/all-projects";

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
                    Projects
                </div>

                <div className="subtitle projects-subtitle">
                    Here are some of the projects I have worked on either in my free time or as part of my coursework.
                </div>

                <div className="projects-list">
                    <AllProjects/>
                </div>
            </div>
        </React.Fragment>
    )
}