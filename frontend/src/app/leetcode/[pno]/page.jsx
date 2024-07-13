'use client'

import React, { useEffect, useState } from 'react';
import "./leetcode-pno.css"


export default function LeetcodeProblemPage({params}) {
    const { pno } = params;

    const [htmlString, setHtmlString] = useState(null);

    useEffect(() => {
        async function fetchProblemComponents() {
            try {
                const problemComponents = await import(`@/data/problem_solutions/${pno}_solution.json`);
                setHtmlString(problemComponents.html);
            } catch (error) {
                console.error("Error loading problem components:", error);
            }
        }
        fetchProblemComponents();
    }, [pno]);

    return (
        <React.Fragment>
            <div className="leetcode-pno">
                <div dangerouslySetInnerHTML={{__html: htmlString}}/>
            </div>
        </React.Fragment>
    )
}