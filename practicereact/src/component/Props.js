import React from "react";
import ReactDOM from "react-dom/client";

function Props(props) {
    // props: properties
    // props are argument passed into react component.
    // props are passed to component via HTML attributes.

    return <h1>I'm a {props.brand}!</h1>
}

function Garage() {
    const carName = "Ford";
    return (
        <div>
            <h1>Who lives in my garage?</h1>
            <Props brand = { carName } />
        </div>
    );
}

// ReactDOM.createRoot function in react is used to create a root entry point for a react application
// document.getElementById('root'): It finds an HTML element with the 'id' root in the DOM.
// ReactDOM.createRoot(...): used to create a root for a concurrent react tree.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

export default Props;