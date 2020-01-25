import React, { useState, useEffect } from 'react';

const FunctionalComponent = props => {
    const [count, setCount] = useState(props.count);
    const [user, setUser] = useState({name:"Nikola"});

    useEffect(() => {
        console.log("mounted");

        return () => {
            console.log("unmounted");
        }
    }, [count, user])

    return (
        <div>
            <div>{count}</div>
            <button
                onClick={() => setCount(count + props.step)}
                type="button"
                className="btn btn-warning"
            >Increment</button>
            <button
                onClick={() => setCount(count - props.step)}
                type="button"
                className="btn btn-success"
            >Decrement</button>
        </div>
    )
}

export default FunctionalComponent;