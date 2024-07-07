import React from "react";
import Logo from "@/components/common/logo";

import "./home.css";
import HomepageFirstArea from "@/components/homepage/homepage-first-area";
import HomepageSocials from "@/components/homepage/homepage-socials";

export default function Home() {
    let logoSize = 80
    return (
        <React.Fragment>
            <Logo width={logoSize} link={false}/>
            <div className="homepage-container">
                <HomepageFirstArea />
                <HomepageSocials />
            </div>
        </React.Fragment>
    );
}
