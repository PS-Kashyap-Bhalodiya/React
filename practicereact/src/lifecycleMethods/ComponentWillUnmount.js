import React from 'react';

class ComponentWillunmount extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    componentWillUnmount() {
        console.warn("ComponetWillUnmount called");
    }

    render() {
        return(
            <div>
                <h1>Component Will Unmount</h1>
                <button onClick={() => this.setState({show: !this.state.show})}>Toggle Child Component</button>
            </div>
        )
    }
}

export default ComponentWillunmount;