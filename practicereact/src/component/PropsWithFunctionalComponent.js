import React from "react";

function PropsWithFunctionalComponent(props) {
    console.warn(props);
    console.warn(props.name, props.age)
    return (
        <div style={{backgroundColor: "skyblue", margin: 10}}>
            <h1>Hello {props.name} and I'm {props.age}</h1>
        </div>
    )
}

export default PropsWithFunctionalComponent;