import React from 'react';

class Render extends React.Component {
    // when the render method is executed: when componet is created, when state is updated and when props updated

    constructor() {
        super();
        this.state = {
            name: "anil"
        }
        console.warn(this.props);
    }

    render() {
        console.warn("render method", this.state.name);
        return(
            <div>
                <h1>Render Component</h1>
                <button onClick={() => this.setState({name: "om"})}>Update Name</button>
            </div>
        )
    }
}

export default Render;