import React from "react";
import Image from "next/image";

import MAINCONTENT from "@/data/main-content";
import randomImage from "@/data/random-image.jpg";

import "@/app/home.css";


export default function HomepageFirstArea() {
    return (
        <React.Fragment>
            <div className="homepage-first-area">
                <div className="homepage-first-area-left-side">
                    <div className="title homepage-title">
                        {MAINCONTENT.title}
                    </div>

                    <div className="subtitle homepage-subtitle">
                        {MAINCONTENT.description}
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