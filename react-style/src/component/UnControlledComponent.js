import React, {useRef} from "react";

function UnControlledComponent() {

    let inputRef = useRef(null);
    let inputRef2 = useRef(null);

    function submitForm(e) {
        e.preventDefault();
        console.warn("Input field 1 value: ", inputRef.current.value);
        console.warn("Input field 2 value: ", inputRef2.current.value);

        let input3 = document.getElementById('input3').value;
        console.warn("Input field 3 value: ", input3);
    }

    return(
        <>
            {/* It is one that stores its own state internally and does not control its vallue through React state mechanism */}
            <h1>UnControlledComponent </h1>
            <form onSubmit={submitForm}>
                <input ref={inputRef} type="text" /><br/><br/>
                <input ref={inputRef2} type="text" /><br/><br/>
                <input id="input3" type="text" /><br/><br/>
                <button >Submit</button>
            </form>

        </>
    );
}

export default UnControlledComponent;