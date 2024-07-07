import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import pythonLogo from "@/data/languages/python.svg"
import cppLogo from "@/data/languages/cpp.svg"

import "./styles/project.css";

export default function Project(props) {
    const { language, title, description, linkText, link } = props;

    const languageMapping = {
        "Python": pythonLogo,
        "C++": cppLogo
    }
    const languageLogo = languageMapping[language];

    return (
        <React.Fragment>
            <div className="project">
                <a href={link} target="_blank">
                    <div className="project-container">
                        <div className="project-logo">
                            <Image src={languageLogo} />
                        </div>
                        <div className="project-title">{title}</div>
                        <div className="project-description">{description}</div>
                        <div className="project-link">
                            <div className="project-link-icon">
                                <FontAwesomeIcon icon={faLink} />
                            </div>

                            <div className="project-link-text">{linkText}</div>
                        </div>
                    </div>
                </a>
            </div>
        </React.Fragment>
    );
}