import React from 'react';

const FunctionalComponent = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.descrition}</p>
            {props.children}
        </div>
    )
}

export default FunctionalComponent;