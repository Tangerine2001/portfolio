'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

import "./styles/navbar.css";

export default function NavBar(props) {
    const pathname = usePathname()

    const isActive = (path) => {
        if (path === "/") {
            return pathname === path ? 'active' : '';
        }
        return pathname.startsWith(path) ? 'active' : '';
    };

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li className={`nav-item ${isActive('/')}`}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={`nav-item ${isActive('/projects')}`}>
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li className={`nav-item ${isActive('/leetcode')}`}>
                                <Link href="/leetcode">Leetcode</Link>
                            </li>
                            <li className={`nav-item ${isActive('/contact')}`}>
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Max_Tang_Resume.pdf" target="_blank">Resume</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
}
