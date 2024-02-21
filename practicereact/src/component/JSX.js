import React, { createElement } from "react";

// without JSX we have to write long code

function JSX() {
    // for parent element
    // return React.createElement('h1', null, "Without JSX")

    // for child element we have to create nested code
    return React.createElement('div', null, React.createElement('h1', null, "JSX in Child element"))

    // const element = React.createElement('div', { className: 'my-class', style: { color: 'red' } }, 'Hello, World!');
    // const element = React.createElement('div', null, 'Hello, ', React.createElement('span', null, 'World!'));
    
}

// with JSX we can write react code easily.
// function JSX() {
//     return(
//         <div>
//             <h1>JSX - JavaScript XML</h1>
//             <h1>Operations: {10 + 20}</h1>
//         </div>
//     )
// }

export default JSX;