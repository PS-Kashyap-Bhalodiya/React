import React from "react";

function ChildToParent2(props) {
    const data = {name: 'om', age: 5};
    return(
        <div>
            <h2>Name: </h2>
            <button onClick={() => props.alert(data)}>Click Me</button>
        </div>
    )
}

export default ChildToParent2;