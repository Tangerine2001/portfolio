import React from "react";
import Link from "next/link"

import "./styles/logo.css";
import logo from '../../data/logo.svg';
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
            {link ? <Link href="/">{imageElement}</Link> : imageElement}
        </React.Fragment>
    );
};

export default Logo;