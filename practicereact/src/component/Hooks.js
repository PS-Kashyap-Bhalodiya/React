// Here the useState is one hook for our example
// if the word is starting with use then that will be hook. Like: useState, useCallback, ...
import React, {useState} from 'react';

function Hooks() {
    const [data, setData] = useState("Nirav")
    return(
        <div>
            <h1>Hello {data}</h1>
            <button onClick={() => setData("Shalin")}>Update Data</button>
        </div>
    )
}

export default Hooks;