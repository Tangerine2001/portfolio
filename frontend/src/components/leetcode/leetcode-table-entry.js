'use client'

import React from "react";
import "@/components/leetcode/styles/leetcode-table-entry.css"
import Image from "next/image";
import LanguageToSvg from "@/components/common/language-svg";

export default function LeetcodeTableEntry(props) {
    const { title, description, difficulty, languages } = props

    const shortDescription = description.length > 50
        ? description.substring(0, 47) + '...'
        : description;

    return (
        <tr className="leetcode-table-entry" title={description}>
            <td>{ title }</td>
            <td>{ shortDescription }</td>
            <td>{ difficulty }</td>
            <td className="leetcode-table-entry-image-cell">
                { Object.keys(languages).map((language, index) => (
                    <Image src={LanguageToSvg({language: language})} className="leetcode-table-entry-image"/>
                )) }
            </td>
        </tr>
    );
}