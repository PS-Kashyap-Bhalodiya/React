import React, { useState, useMemo } from "react";

function UseMemo() {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    // function multiCount() {
    //     console.warn("Multicount");
    //     return count * 5;
    // }
    
    // when our count is updated then this funciton is called otherwise it will not called.
    const multiCountMemo = useMemo(function multiCount() {
        console.warn("Multicount");
        return count * 5;
    }, [count]) // we have to define condition inside the [] brackets.


    return(
        <>
            {/* Usememo:  */}
            <h1>Usememo Hook in React <br /> Count: {count} and Item: {item}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            
            {/* <h2>{multiCount()}</h2> */}
            <h2>{multiCountMemo}</h2>

            <button onClick={() => setItem(item * 5)}>Update Item</button>
            
        </>
    )
}

export default UseMemo;