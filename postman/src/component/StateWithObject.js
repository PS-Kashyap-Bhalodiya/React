import React from "react";

export default StateWithObject() {

    const [data, setData] = React.useState({name: 'nilay', age: 21})

    return(
        <>
            <h1>State object with Hooks</h1>
            <input type="text" placeholder="Enter name" value={data.name} onChange={(e) => {
                setData({age: data.age, name: e.target.value})
            }} />
            <input type="text" placeholder="Enter age" value={data.age} onChange={(e) => {
                setData({name: data.name, age: e.target.value})
            }} />

            <h1>{data.name}</h1>
            <h1>{data.age}</h1>
        </>
    );
}
