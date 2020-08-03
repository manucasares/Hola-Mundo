import React, { useState } from "react";

const CounterApp = ({value = 10}) => {


    const [count, setCount] = useState(value);

    //FUNCIONES
    const incrementar = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrementar = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount(value);
    };

    return (
        <>
            <button onClick={decrementar}>-</button>
            <h2>{count}</h2>
            <button onClick={incrementar}>+</button>
            <button onClick={reset}>RESET</button>
        </>
    );
};

export default CounterApp;
