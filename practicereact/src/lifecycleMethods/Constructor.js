import React from 'react';

class Constructor extends React.Component {

    constructor() {
        super(); // for parent class React.Component call we have to used super keyword
        console.warn("Constructor");
        
        // we have to create a state inside the constructor
        this.state = {
            data: "product"
        }

        // Note: we never called an API inside the constructor
    }

    render() {
        console.warn("Render");
        return(
            <div>
                <h1>Hello {this.state.data}</h1>
            </div>
        )
    }
}

export default Constructor;