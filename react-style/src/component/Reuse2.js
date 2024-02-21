import React from "react";

function Reuse2(props) {
    return(
        <div>
            <span>Name: {props.data.name}</span>
            <span>Age: {props.data.age}</span>
            <span>City: {props.data.city}</span>

        </div>
    )
}

export default Reuse2;