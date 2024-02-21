import React, {useState} from "react";

function ControlledComponent() {

    let [val, setVal] = useState("");

    return(
        <>
            {/* It is one where the data, typically input from data, is handled by the react state mechanism */}
            <h1>ControlledComponent </h1>
            {/* <input type="text" defaultValue="0000" onChange={(e) => setVal(e.target.value)} /> */}
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />

        </>
    );
}

export default ControlledComponent;