import React from 'react';

export default function Subtitle(props) {
    const { text } = props
    return (
        <React.Fragment>
            <h2>{ text }</h2>
        </React.Fragment>
    )
}
