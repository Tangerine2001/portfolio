import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import userInfo from "@/data/page-content/user-info.json";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "@/app/home.css";

export default function HomepageSocials() {
    return (
        <div className="homepage-socials">
            <a href={userInfo.socials.github} className="homepage-social-wrapper">
                <FontAwesomeIcon icon={faGithub} className="homepage-social-icon"/>
            </a>

            <a href={userInfo.socials.linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="homepage-social-icon"/>
            </a>
            <a href={`mailto:${userInfo.socials.email}`} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="homepage-social-icon"/>
            </a>
        </div>
    )
}