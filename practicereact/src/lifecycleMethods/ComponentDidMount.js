import React from "react";

class ComponentDidMount extends React.Component {
    constructor() {
        super();    
        console.warn("Constructor");
        this.state = {
            name: "Nihar"
        }
    }

    // do not use with state and props
    componentDidMount() {
        console.warn("render");
    }
    
    render() {
        return(
            <div>
                <h1>Component Did Mount - {this.state.name}</h1>
                <button onClick={() => {this.setState({name: "Parth"})}}>Update Name</button>
            </div>
        )
    }
}

export default ComponentDidMount;