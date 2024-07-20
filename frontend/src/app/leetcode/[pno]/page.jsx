'use client'

import React, { useEffect, useState } from 'react';
import "./leetcode-pno.css"
import SolutionViewer from "@/components/leetcode/leetcode-solution-viewer";


export default function LeetcodeProblemPage({params}) {
    const { pno } = params;

    let [components, setComponents] = useState(null);
    let [solutions, setSolutions] = useState(null);

    useEffect(() => {
        async function fetchProblemComponents() {
            try {
                const problemInfo = await import(`@/data/problem_solutions/${pno}_solution.json`);
                setSolutions(problemInfo.solutions);
                setComponents(problemInfo.components);
            } catch (error) {
                console.error("Error loading problem components:", error);
            }
        }
        fetchProblemComponents();
    }, [pno]);

    const renderComponent = (component) => {
        switch (component.type) {
            case 'problem_title':
                return <h1>{component.text}</h1>;
            case 'problem_desc':
                return <p>{component.text}</p>;
            case 'example_case':
                return (
                    <div>
                        <h2>Example</h2>
                        <p><strong>Input:</strong> <code className="inline-code">{component.input.join(', ')}</code></p>
                        <p><strong>Output:</strong> <code className="inline-code">{component.output.join(', ')}</code></p>
                        <div>
                            <strong>Explanation:</strong>
                            {component.explanation.map((exp, index) => {
                                if (exp.type === 'code') {
                                    return <code key={index} className="inline-code">{exp.text}</code>;
                                }
                                if (exp.type === 'text') {
                                    return <span key={index}>{exp.text}</span>;
                                }
                                return null;
                            })}
                        </div>
                    </div>
                );
            case 'solution_title':
                return <h2>{component.text}</h2>;
            case 'solution_desc':
                return <p>{component.text}</p>;
            case 'solution':
                return <SolutionViewer solution={solutions["solution" + component.solution_no]} />;
            default:
                return null;
        }
    };

    return (
        <div className="leetcode-pno">
            {components && components.map((component, index) => (
                <div key={index}>
                    {renderComponent(component)}
                </div>
            ))}
        </div>
    );
    // return (
    //     <React.Fragment>
    //         <div className="leetcode-pno">
    //             <div dangerouslySetInnerHTML={{__html: htmlString}}/>
    //         </div>
    //     </React.Fragment>
    // )
}