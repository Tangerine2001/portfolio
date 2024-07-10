import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";


import "./styles/project.css";
import LanguageToSvg from "@/components/common/language-svg";

export default function Project(props) {
    const { language, title, description, linkText, link } = props;

    const languageLogo = LanguageToSvg({ language: language })

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