import React from "react";
import Logo from "@/components/common/logo";
import LeetcodeTable from "@/components/leetcode/leetcode-table";
import leetcodeInfo from "@/data/page-content/leetcode-page-content.json"


export default function Leetcode() {
    return (
        <React.Fragment>
            <Logo width={50}/>
            <div className="title">{leetcodeInfo.title}</div>
            <div className="subtitle">{leetcodeInfo.description}</div>
            <LeetcodeTable/>
        </React.Fragment>
    );
}