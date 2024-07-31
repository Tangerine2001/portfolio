'use client'

import React from 'react';
import '@/app/resume/resume.css'
import Logo from "@/components/common/logo";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function ResumePage() {
    const resumeLink = "Max_Tang_Resume.pdf";

    return (
        <React.Fragment>
            <Logo width={50}/>
            <div className="resume-title-container">
                <h1>Resume</h1>
                {/*<a href={resumeLink} download={resumeLink} target="_blank">*/}
                {/*    <FontAwesomeIcon className="resume-download-icon" icon={faDownload}/>*/}
                {/*</a>*/}
            </div>
            <div className="resume-container">
                <a href={resumeLink} target="_blank">
                    <object className="resume-document" data={resumeLink} type="application/pdf">
                        <div>No online PDF viewer installed</div>
                    </object>
                    {/*<iframe className="resume-document" src={resumeLink} frameborder={0}/>*/}
                </a>
            </div>
        </React.Fragment>
    );
}