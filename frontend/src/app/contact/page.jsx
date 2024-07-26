import React from "react";
import userInfo from "@/data/page-content/user-info.json";

import "./contact.css";
import Logo from "@/components/common/logo";
import HomepageSocials from "@/components/homepage/homepage-socials";

export default function Contact() {
    // Put these variables into their own file
    const titleText = "Let's Get in Touch: Ways to Connect with Me";
    const subtitleText1 = "Thank you for your interest in getting in touch with me. I welcome your feedback, " +
        "questions, any suggestions. If you have a specific question or comment, please feel free to email me " +
        "directly at"
    const subtitleText2 = ". I make an effort to respond to all messages within 24 hours, although it may " +
        "take me longer during busy periods. If you" +
        " prefer to connect on social media, you can find me on"
    const subtitleText3 = ". Thanks again for your interest, and I look forward to hearing from you!"

    return (
        <React.Fragment>
            <Logo width={50}/>
            <div className="contact-container">
                <div className="title">
                    {titleText}
                </div>

                <div className="subtitle contact-subtitle">
                    { subtitleText1 }
                    &nbsp;{" "}
                    <a href={`mailto:${userInfo.socials.email}`}>
                        {userInfo.socials.email}
                    </a>
                    { subtitleText2 }
                    {" "}
                    <a
                        href={userInfo.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {userInfo.socials.linkedin}
                    </a>
                    { subtitleText3 }
                </div>

                <HomepageSocials />
            </div>
        </React.Fragment>
    );
}