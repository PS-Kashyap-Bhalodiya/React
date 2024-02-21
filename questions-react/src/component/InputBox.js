import React, {useState} from "react";

function InputBox() {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getData(val) {
        // console.warn(val); DOM
        // console.warn(val.target);
        console.warn(val.target.value);
        setData(val.target.value);
    }

    return(
        <div>
            <h1>Get Input box value:</h1>
            <h1>{data}</h1>
            <input type="text" onChange={getData} />
            {
                print ? <h1>{data}</h1> : null
            }
            <button onClick={() => setPrint(true)}>Print Data</button>
        </div>
    )
}

export default InputBox;