import React from "react";
import Logo from "@/components/common/logo";
import LeetcodeTable from "@/components/leetcode/leetcode-table";


export default function Leetcode() {
    return (
        <React.Fragment>
            <Logo width={50}/>
            <div className="title">Leetcode</div>
            <LeetcodeTable />
        </React.Fragment>
    );
}