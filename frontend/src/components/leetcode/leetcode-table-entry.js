import React from "react";
import "@/components/leetcode/styles/leetcode-table-entry.css"

export default function LeetcodeTableEntry(props) {
    const { title, description } = props

    const shortDescription = description.length > 50
        ? description.substring(0, 47) + '...'
        : description;

    return (
        <tr className="leetcode-table-entry">
            <td>{ title }</td>
            <td title={description}>{ shortDescription }</td>
            <td>Easy</td>
            <td>Python</td>
        </tr>
    );
}