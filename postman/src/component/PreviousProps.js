import React, {useState} from "react";

import Child from './Child';

export default function PreviousProps() {

    const [count, setCount] = useState(0);

    return(
        <>
            <Child count = {count} />
            <button onClick={() => {
                setCount(Math.floor(Math.random() * 10))
            }}>
                Update Counter
            </button>
        </>
    );
}