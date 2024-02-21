import React from "react";

// for updating the data we are using useState
import { useState } from "react";

function StateWithFunctionalComponent() {
    const [data, setData] = useState(0);

    function updateData() {
        setData(data + 1);
    }

    console.warn("_______________________");

    return(
        <div>
            <h1>{data}</h1>
            <button onClick={updateData}>StateWithFunctionalComponent</button>
        </div>
    )
}

export default StateWithFunctionalComponent;