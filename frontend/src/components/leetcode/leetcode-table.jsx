import React from "react";
import "@/components/leetcode/styles/leetcode-table.css"
import LeetcodeTableEntry from "@/components/leetcode/leetcode-table-entry";
import problems from "@/data/all_problems.json"


export default function LeetcodeTable() {
    return (
        <React.Fragment>
            <div className="leetcode-table-container">
                <table className="leetcode-table">
                    <thead className="leetcode-table-header">
                    <tr>
                        <th>Problem Title</th>
                        <th className="leetcode-table-entry-description">Description</th>
                        <th>Difficulty</th>
                        <th>Solved Languages</th>
                    </tr>
                    </thead>
                    <tbody className="leetcode-table-body">
                        {problems['problems'].map((problem, index) => (
                            <LeetcodeTableEntry
                                key={index}
                                title={problem.title}
                                description={problem.description}
                                difficulty={problem.difficulty}
                                languages={problem.solved_languages}
                                pno={problem.pno}/>
                            ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}