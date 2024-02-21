import React from "react";
import { useState } from "react";

class StateWithClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 0
        }
    }

    apple() {
        this.setState({data: this.state.data + 1});
    }

    render() {
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={() => this.apple()}>StateWithClassComponent</button>
            </div>
        );
    }
}

export default StateWithClassComponent;