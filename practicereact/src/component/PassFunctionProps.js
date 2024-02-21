import React from "react";

function PassFunctionProps(props) {
    function getData() {
        
    }

    return(
        <div>
            {/* How to pass function as props */}
            <button onClick={props.data}>call data function</button>
        </div>
    )
}

export default PassFunctionProps;