import React, {useState} from "react";

export default function PreviousState() {

    const [count, setCount] = useState(0);
    function updateCounter() {
        // if my previous state is  5 and I call this function again it will give me the value of count as 6.
        for (let i = 0; i < 5; ++i) {
            setCount((pre) => pre + 1);
        }
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={updateCounter}>Click Me</button>
        </>
    );
}