import React from "react";
import "@/components/leetcode/styles/leetcode-table.css"
import LeetcodeTableEntry from "@/components/leetcode/leetcode-table-entry";
import problems from "@/data/problems.json"


export default function LeetcodeTable() {


    return (
        <React.Fragment>
            <div className="subtitle">
                Here are some Leetcode problems that I have solved. I discuss the methodology, implementation,
                and the languages I used to solve the problems. You can hover the table row to read the full problem.
            </div>
            <div className="leetcode-table-container">
                <table className="leetcode-table">
                    <thead className="leetcode-table-header">
                    <tr>
                        <th>Problem Title</th>
                        <th>Description</th>
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
                                languages={problem.languages} />
                            ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}