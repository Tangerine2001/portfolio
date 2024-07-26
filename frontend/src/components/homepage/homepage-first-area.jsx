import React from "react";
import Image from "next/image";

import mainContent from "@/data/page-content/main-page-content.json";
import randomImage from "@/data/page-content/main-page-image1.jpg";

import "@/app/home.css";
import TypingEffect from "@/components/common/typing-effect";
import Logo from "@/components/common/logo";


export default function HomepageFirstArea() {
    let logoSize = 40;

    return (
        <React.Fragment>
            <div className="homepage-first-area">
                <div className="homepage-first-area-left-side">

                    <div className="title homepage-title">Max Tang</div>
                    <TypingEffect titles={mainContent.titles}/>
                    <div className="subtitle homepage-subtitle">
                        {mainContent.description}
                    </div>
                </div>

                <div className="homepage-first-area-right-side">
                    <div className="homepage-image-container">
                        <div className="homepage-image-wrapper">
                            <Image src={randomImage} width={200} height={300}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}