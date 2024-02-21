import React from "react";


// Pure component: It is only used in class component. (we can use state and props)
// It will stop the re-rendering.

// we will create pure component using two ways: 1) writing React.PureComponent, 2) import React, {PureComponent} 

class PureComponent extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    render() {
        return(
            <>
                <h1>Pure component: count - {this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Update Count</button>
            </>
        )
    }
}

export default PureComponent;