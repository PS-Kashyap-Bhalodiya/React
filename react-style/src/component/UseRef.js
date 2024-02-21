import React, {useRef} from 'react';

function UseRef() {
    
    let inputRef=useRef(null);

    function controlInput() {
        //  inputRef.current.value="abc"
        // inputRef.current.style.display="none"
        inputRef.current.focus()
    }

    return (
        <div>
        <h1>useRef in React</h1>
        <input type="text" ref={inputRef} />
        <button onClick={controlInput}>Handle Input</button>
        </div>
    );
}

export default UseRef;