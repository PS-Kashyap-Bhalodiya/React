import React from "react";

class PropsWithClassComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            name: 'Mukund'
        }
    }

    render() {
        return(
            <div style={{backgroundColor: 'greenyellow', margin: 30}}>
                <h1>{this.state.name}</h1>
                <h1>{this.props.name}</h1>
                <button onClick={() => this.setState({name: 'Niraj'})}>Update Mukund</button>
            </div>
        )
    }
}

export default PropsWithClassComponent;