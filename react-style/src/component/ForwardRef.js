import React, {useRef} from "react";
import ForwardRef2 from "./ForwardRef2";

function ForwardRef() {
    let inputRef = useRef(null);

    function updateInput() {
        inputRef.current.value="1000";
        inputRef.current.style.backgroundColor="yellow";
        inputRef.current.focus();
    }

    return(
        <>
            {/* ForwardRef: you can pass a reference from a parent component a child component,
                even if that child component is wrapped inside another component.
            */}        
            <h1>Forward reference</h1>
            <ForwardRef2 ref={inputRef} />
            <button onClick={updateInput}>Update Inputbox</button> 
        </>
    );
}

export default ForwardRef;