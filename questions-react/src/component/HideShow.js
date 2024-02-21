import React, {useState} from "react";


function HideShow() {
    const [status, setStatus] = React.useState(true)
    // const [status, setStatus] = React.useState(false)

    return(
        <div>
            {
                status ? <h1>Hello World</h1> : null
            }

            {/* create using two button */}
            <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button>

            {/* create using one button */}
            <button onClick={() => setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default HideShow;