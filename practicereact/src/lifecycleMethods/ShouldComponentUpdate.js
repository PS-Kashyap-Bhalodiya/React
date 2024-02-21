import React from 'root';

class ShouldComponentUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    // by default the return value is false
    // advantage: we have to stop the update using any conditions.
    shouldComponentUpdate() {
        console.warn("shouldComponentUpdate", this.state.counter);
        // return true; // the state will update

        if(this.state.counter > 5 && this.state.counter < 10) {
            return true;
        }
    }

    render() {
        return(
            <div>
                <h1>Should component update: {this.state.counter}</h1>
                <button onClick={() => this.setState({counter: this.state.counter + 1})}>Update Counter</button>
            </div>
        )
    }
}

export default ShouldComponentUpdate;