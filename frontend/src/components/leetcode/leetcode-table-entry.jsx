'use client'

import React from "react";
import "@/components/leetcode/styles/leetcode-table-entry.css"
import Image from "next/image";
import LanguageToSvg from "@/components/common/language-svg";
import {useRouter, usePathname} from "next/navigation";


export default function LeetcodeTableEntry(props) {
    const { title, description, difficulty, languages, pno } = props

    const shortDescription = description.length > 50
        ? description.substring(0, 47) + '...'
        : description;

    const router = useRouter();
    const pathname = usePathname()

    const handleClick = () => {
        router.push(`${pathname}/${pno}`);
    };

    return (

        <tr className="leetcode-table-entry" title={description} onClick={handleClick}>
            <td>{ title }</td>
            <td>{ shortDescription }</td>
            <td>{ difficulty }</td>
            <td className="leetcode-table-entry-image-cell">
                {languages && languages.map((language, index) => (
                    <Image key={`${pno}-${language}`} alt={`${pno}-${language}`}
                           src={LanguageToSvg({language: language})} className="leetcode-table-entry-image"/>
                ))}
            </td>
        </tr>
    );
}