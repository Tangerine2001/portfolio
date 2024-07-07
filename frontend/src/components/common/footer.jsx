import React from "react";

import "./styles/footer.css";

export default function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="footer-credits">
                    <div className="footer-credits-text">
                        Website developed using Next.js by Max Tang.
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};