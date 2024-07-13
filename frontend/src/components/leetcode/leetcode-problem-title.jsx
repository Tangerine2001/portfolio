import React from 'react';

export default function Title(props) {
    const { text } = props
    return (
        <React.Fragment>
            <h1>{ text }</h1>
        </React.Fragment>
    )
}
