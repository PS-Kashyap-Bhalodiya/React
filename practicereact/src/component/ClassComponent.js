// rcc

import React, { Component } from 'react'

const ChildComponent1 = () => {
    return <div>This is a child 1 component into parent component</div>;
};

const ChildComponent2 = () => {
    return <div>This is a child 2 component into parent component</div>;
};

class ClassComponent extends Component {
    
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <h2>Class Component</h2>
                {ChildComponent1()}
                <ChildComponent1 />
                {ChildComponent2()}
                <ChildComponent2 />
            </div>
        )
    }
}

export default ClassComponent;

// another way to create a class component
// export default class ClassComponent extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
