'use client'

import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import '@/app/resume/resume.css'
import Logo from "@/components/common/logo";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
//     import.meta.url,
// ).toString();
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ResumePage() {
    const resumeLink = "Max_Tang_Resume.pdf";

    return (
        <React.Fragment>
            <Logo width={50}/>
            <div className="resume-title-container">
                <h1>Resume</h1>
                <a href={resumeLink} download={resumeLink} target="_blank">
                    <FontAwesomeIcon className="resume-download-icon" icon={faDownload}/>
                </a>
            </div>
            <div className="resume-container">
                <a href={resumeLink} target="_blank">
                    <Document className="resume-document" file={resumeLink}>
                        <Page pageNumber={1}/>
                    </Document>
                </a>
            </div>
        </React.Fragment>
    );
}