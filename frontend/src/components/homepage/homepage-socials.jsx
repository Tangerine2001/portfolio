import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import USERINFO from "@/data/user";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "@/app/home.css";

export default function HomepageSocials() {
    return (
        <div className="homepage-socials">
            <a href={USERINFO.socials.github} className="homepage-social-wrapper">
                <FontAwesomeIcon icon={faGithub} className="homepage-social-icon"/>
            </a>

            <a href={USERINFO.socials.linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="homepage-social-icon"/>
            </a>
            <a href={`mailto:${USERINFO.socials.email}`} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="homepage-social-icon"/>
            </a>
        </div>
    )
}