import React, {useEffect, useRef} from "react";

function Child(props) {
    const lastVal = useRef();
    useEffect(() => {
        lastVal.current = props.count;
    })

    const previousProps = lastVal.current;
    return(
        <>
            <h1>Count is: {props.count}</h1>
            <h1>Previous Props is: {previousProps}</h1>
        </>
    );
}

export default Child;