import React from 'react';

export default function Code(props) {
    const { text } = props
    return (
        <React.Fragment>
            <p>{ text }</p>
        </React.Fragment>
    )
}
