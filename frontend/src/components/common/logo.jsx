import React from "react";
import Link from "next/link"

import "./styles/logo.css";
import logo from '@/app/favicon.svg';
import Image from "next/image";

const Logo = (props) => {
    let { width, link } = props;

    if (link === undefined) {
        link = true;
    }

    const imageElement = (
        <Image src={logo} alt="logo" className="logo" width={width} />
    );

    return (
        <React.Fragment>
            <div className="logo-container">
                {link ? <Link href="/">{imageElement}</Link> : imageElement}
            </div>
        </React.Fragment>
    );
};

export default Logo;