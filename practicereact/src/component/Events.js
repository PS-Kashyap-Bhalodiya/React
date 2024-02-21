import React from "react";
import ReactDOM from "react-dom/client";

// React has same events as HTML: click, change, mouseover, etc.

// to pass an argument to an event handler use an arrow function.
// function Events() {
//     const shoot = (a) => {
//         alert(a);
//     }

//     return (
//         <button onClick={() => shoot("Goal")}>Events example</button>
//     );
// }

// ************************************************************************

// React Event object
// Event handlers have access to the react event that trigged the function.
// function Events() {
//     const shoot = (a, b) => {
//         alert(b.type); // b represents react event that trigged the function in this case 'click' event
//     }

//     return (
//         <button onClick={(event) => shoot("Goal!", event)}>Event Object</button>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Events />);

// **********************************************************
// simple way to create
function Events() {
    let data = "Kashyap Bhalodiya";

    function apple() {
        alert(data);
    }

    return (
        <div>
            <h1>{data}</h1>

            {/* one way to create event */}
            <button onClick={apple}>Events-1</button>

            {/* second way to create event use the arrow function */}
            <button onClick={() => alert("Event function is called")}>Events-2</button>
        </div>
    );
}

export default Events;